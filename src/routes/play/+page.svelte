<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import Site from '$lib/components/Site.svelte';

	let { data }: PageProps = $props();

	// X sandboxes the player iframe, so navigating within the frame is blocked.
	// Send every link click to a real new tab instead.
	onMount(() => {
		const onClick = (event: MouseEvent) => {
			if (event.defaultPrevented || event.button !== 0) return;
			const anchor = (event.target as Element | null)?.closest?.('a[href]');
			if (!anchor) return;
			const href = anchor.getAttribute('href') ?? '';
			if (!href || href.startsWith('#')) return;
			event.preventDefault();
			window.open((anchor as HTMLAnchorElement).href, '_blank', 'noopener,noreferrer');
		};
		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	});
</script>

<svelte:head>
	<title>Farseen</title>
	<meta name="description" content="Farseen — Software Developer" />
	<base target="_blank" />

	<!-- Framed by X as the Player Card defined at https://farseen.me/ -->
	<meta name="twitter:card" content="player" />
	<meta name="twitter:title" content="Farseen" />
	<meta name="twitter:description" content="farseen.me, running live inside this post. Click to open the real site." />
	<meta name="twitter:image" content="https://farseen.me/me.png" />
	<meta name="twitter:player" content="https://farseen.me/play" />
	<meta name="twitter:player:width" content="480" />
	<meta name="twitter:player:height" content="480" />
</svelte:head>

<!-- X locks the iframe viewport, so the document itself can't scroll. Scroll an
     inner container instead: it moves regardless of the iframe's scrolling mode. -->
<div class="h-dvh overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]">
	<Site posts={data.posts} compact />
</div>
