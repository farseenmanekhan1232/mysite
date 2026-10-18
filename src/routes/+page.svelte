<script lang="ts">
	import type { PageProps } from './$types';
	import Site from '$lib/components/Site.svelte';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Farseen</title>
	<meta name="description" content="Farseen — Software Developer" />

	<!-- Twitter/X Player Card: lets this page run as an app inside a post. -->
	<meta name="twitter:card" content="player" />
	<meta name="twitter:title" content="Farseen" />
	<meta name="twitter:description" content="farseen.me, running live inside this post. Click to open the real site." />
	<meta name="twitter:image" content="https://farseen.me/me.png" />
	<meta name="twitter:player" content="https://farseen.me/play" />
	<meta name="twitter:player:width" content="480" />
	<meta name="twitter:player:height" content="480" />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Farseen" />
	<meta property="og:description" content="farseen.me, running live inside this post. Click to open the real site." />
	<meta property="og:image" content="https://farseen.me/me.png" />
	<meta property="og:url" content="https://farseen.me/" />
</svelte:head>

<Site posts={data.posts} />
