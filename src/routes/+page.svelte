<script lang="ts">
	import type { PageProps } from './$types';
	import SegmentedControl from '$lib/components/interior/segmented-control.svelte';
	import VisitorCounter from '$lib/components/VisitorCounter.svelte';

	let { data }: PageProps = $props();

	const segments = [
		{ value: 'projects', label: 'Projects' },
		{ value: 'writing', label: 'Writing' },
		{ value: 'about', label: 'About' }
	];

	let active = $state('projects');

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Farseen</title>
	<meta name="description" content="Farseen — Software Developer" />
</svelte:head>

<div class="mx-auto max-w-[640px] px-6 py-16">
	<h1 class="mb-1 text-[15px] font-medium text-stone-800 dark:text-stone-100">Farseen</h1>
	<p class="mb-10 text-[13px] text-stone-500 dark:text-stone-400">Software developer, Hubli</p>

	<div class="mb-10">
		<SegmentedControl
			options={segments}
			label="Sections"
			value={active}
			onValueChange={(v) => (active = v)}
		/>
	</div>

	<div class="min-h-[320px] text-[13.5px] leading-relaxed text-stone-700 dark:text-stone-200">
		{#if active === 'projects'}
			<div class="space-y-10">
				<div>
					<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
						<a href="https://rynk.chat" class="hover:underline">rynk.chat</a>
					</h3>
					<p class="mt-1 text-stone-500 dark:text-stone-400">
						Open-source AI thought capture and synthesis tool built on Cloudflare Edge. Converts raw thought dumps into clustered idea threads and actionable research plans using Next.js, Cloudflare Workers, D1, Vectorize, and Groq.
					</p>
				</div>

				<div>
					<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
						<a href="https://neustream.app" class="hover:underline">Neustream.app</a>
					</h3>
					<p class="mt-1 text-stone-500 dark:text-stone-400">
						Multi-platform RTMP streaming tool — an open-source alternative to Restream. Ingest a single video source and broadcast to multiple destinations via FFmpeg and RTMP.
					</p>
				</div>

				<div>
					<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
						<a href="https://github.com/farseenmanekhan1232/win-set" class="hover:underline">Win-set</a>
					</h3>
					<p class="mt-1 text-stone-500 dark:text-stone-400">
						Minimal window manager for macOS with Hyprland-style auto-tiling. Built in Swift with Vim-style navigation, smart resize logic, drag-to-swap, and multi-monitor support.
					</p>
				</div>

				<div>
					<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
						<a href="https://github.com/farseenmanekhan1232/tkeybr" class="hover:underline">Tkeybr</a>
					</h3>
					<p class="mt-1 text-stone-500 dark:text-stone-400">
						Terminal-based typing tutor inspired by keybr.com. Adaptive learning algorithm with progressive letter unlocking, phonetic pseudo-words, and real-time heatmaps.
					</p>
				</div>

				<div>
					<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
						<a href="https://github.com/farseenmanekhan1232/cf-tool" class="hover:underline">CF-Tool Companion</a>
					</h3>
					<p class="mt-1 text-stone-500 dark:text-stone-400">
						Chrome extension for Codeforces CLI authentication. Streamlines login so competitive programmers can submit and parse test cases from the terminal.
					</p>
				</div>

				<div>
					<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
						<a href="https://github.com/farseenmanekhan1232/opencode-ollama-multi-auth" class="hover:underline">opencode-ollama-multi-auth</a>
					</h3>
					<p class="mt-1 text-stone-500 dark:text-stone-400">
						Opencode plugin for managing multiple Ollama Cloud API keys with automatic failover and key rotation on auth errors.
					</p>
				</div>
			</div>

		{:else if active === 'writing'}
			{#if data.posts.length > 0}
				<div class="space-y-6">
					{#each data.posts as post}
						<div>
							<h3 class="text-[13px] font-medium text-stone-800 dark:text-stone-100">
								<a href={post.link} class="hover:underline">{post.title}</a>
							</h3>
							<p class="mt-0.5 text-[12px] text-stone-400 dark:text-stone-500">{formatDate(post.pubDate)}</p>
							{#if post.description}
								<p class="mt-1 text-stone-500 dark:text-stone-400">{post.description}</p>
							{/if}
						</div>
					{/each}
				</div>
				<p class="mt-8 text-[12px] text-stone-400 dark:text-stone-500">
					More on <a href="https://farseen.substack.com/" class="text-stone-600 dark:text-stone-300 hover:underline">Substack</a>
				</p>
			{:else}
				<p class="text-stone-400 dark:text-stone-500">Loading...</p>
			{/if}

		{:else if active === 'about'}
			<p class="text-stone-500 dark:text-stone-400">
				Self-taught software developer from Hubli, India. I started with Python scripts out of curiosity, transitioned into web development, and now build open-source tools at the intersection of AI, streaming infrastructure, and the edge.
			</p>
			<p class="mt-4 text-stone-500 dark:text-stone-400">
				I believe AI should automate grunt work, not replace human intent. I spend most of my time building things I want to see in the world.
			</p>

			<div class="mt-8 space-y-1.5">
				<div>
					<a href="https://github.com/farseenmanekhan1232" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">GitHub</a>
				</div>
				<div>
					<a href="https://x.com/farsn_" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">X / Twitter</a>
				</div>
				<div>
					<a href="https://www.linkedin.com/in/farseen-m-2419531a7" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">LinkedIn</a>
				</div>
				<div>
					<a href="https://www.youtube.com/@1farseen" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">YouTube</a>
				</div>
				<div>
					<a href="https://farseen.substack.com/" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">Substack</a>
				</div>
				<div>
					<a href="https://farseenmanekhan1232.medium.com/" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">Medium</a>
				</div>
				<div>
					<a href="mailto:farseenmanekhan1232@gmail.com" class="text-[13px] text-stone-600 dark:text-stone-300 hover:underline">Email</a>
				</div>
			</div>
		{/if}
	</div>

	<div class="mt-16">
		<VisitorCounter />
	</div>
</div>
