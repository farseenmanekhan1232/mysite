<script lang="ts">
	import { onMount } from 'svelte';

	let totalVisits = 0;
	let currentUsers = 0;
	let connected = false;

	onMount(() => {
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
				setTimeout(connect, 5000);
			};
		};

		connect();
	});
</script>

{#if connected && totalVisits > 0}
	<div class="flex items-center gap-2 text-[12px] text-stone-400 dark:text-stone-500">
		<span>{totalVisits.toLocaleString()} visits</span>
		<span>·</span>
		<span class="inline-flex items-center gap-1.5">
			<span class="inline-block h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
			{currentUsers} online
		</span>
	</div>
{/if}
