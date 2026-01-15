<script lang="ts">
    import { onMount } from 'svelte';

    let totalVisits = 0;
    let currentUsers = 0;
    let connected = false;

    onMount(() => {
        // Connect to the deployed analytics worker
        const wsUrl = 'wss://mysite-analytics.farseenmanekhan1232.workers.dev';
        
        const connect = () => {
            const ws = new WebSocket(wsUrl);

            ws.onopen = () => {
                connected = true;
            };

            ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.type === 'update') {
                        totalVisits = data.totalVisits;
                        currentUsers = data.currentUsers;
                    }
                } catch (e) {
                    console.error('Failed to parse analytics message', e);
                }
            };

            ws.onclose = () => {
                connected = false;
                // Try to reconnect in 5 seconds
                setTimeout(connect, 5000);
            };
        };

        connect();
    });
</script>

<div class="visitor-stats">
    {#if connected && totalVisits > 0}
        <span class="stat">
            {totalVisits.toLocaleString()} visits
        </span>
        <span class="separator">·</span>
        <span class="stat online">
            <span class="dot"></span>
            {currentUsers} online
        </span>
    {/if}
</div>

<style>
    .visitor-stats {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .online {
        display: inline-flex;
        align-items: center;
        gap: 6px;
    }

    .dot {
        width: 6px;
        height: 6px;
        background-color: #22c55e; /* Green */
        border-radius: 50%;
        display: inline-block;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
</style>
