
export interface Env {
    VISITOR_TRACKER: DurableObjectNamespace;
}

export class VisitorTracker {
    state: DurableObjectState;
    sessions: Set<WebSocket>;

    constructor(state: DurableObjectState, env: Env) {
        this.state = state;
        this.sessions = new Set();
    }

    async fetch(request: Request) {
        const upgradeHeader = request.headers.get('Upgrade');
        if (!upgradeHeader || upgradeHeader !== 'websocket') {
            return new Response('Expected Upgrade: websocket', { status: 426 });
        }

        const webSocketPair = new WebSocketPair();
        const [client, server] = Object.values(webSocketPair);

        // Accept the websocket connection
        this.state.acceptWebSocket(server);
        this.sessions.add(server);

        // Handle initial stats
        await this.handleConnection(server);

        return new Response(null, {
            status: 101,
            webSocket: client,
        });
    }

    async handleConnection(ws: WebSocket) {
        let totalVisits = (await this.state.storage.get<number>('totalVisits')) || 0;
        totalVisits++;
        await this.state.storage.put('totalVisits', totalVisits);

        this.broadcastStats(totalVisits);
    }

    async broadcastStats(totalVisits?: number) {
        if (totalVisits === undefined) {
             totalVisits = (await this.state.storage.get<number>('totalVisits')) || 0;
        }
        
        const currentUsers = this.sessions.size;
        const msg = JSON.stringify({
            type: 'update',
            totalVisits,
            currentUsers
        });

        this.sessions.forEach(session => {
            try {
                session.send(msg);
            } catch (err) {
                // connection might be closed
                this.sessions.delete(session);
            }
        });
    }

    async webSocketMessage(ws: WebSocket, message: string | ArrayBuffer) {
        // We don't really expect messages from client, but can handle pings if needed
    }

    async webSocketClose(ws: WebSocket, code: number, reason: string, wasClean: boolean) {
        this.sessions.delete(ws);
        this.broadcastStats();
    }

    async webSocketError(ws: WebSocket, error: unknown) {
        this.sessions.delete(ws);
        this.broadcastStats();
    }
}

export default {
    async fetch(request: Request, env: Env) {
        // Simple router to get the singleton DO
        const id = env.VISITOR_TRACKER.idFromName('global-counter');
        const stub = env.VISITOR_TRACKER.get(id);
        return stub.fetch(request);
    }
};
