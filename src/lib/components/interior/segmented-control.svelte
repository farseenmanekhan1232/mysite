<script lang="ts">
	import { animate } from 'motion';

	type Option = {
		value: string;
		label: string;
		disabled?: boolean;
	};

	let {
		options,
		label,
		value = undefined,
		defaultValue = undefined,
		onValueChange = undefined,
		className = ''
	}: {
		options: Option[];
		label: string;
		value?: string;
		defaultValue?: string;
		onValueChange?: (value: string) => void;
		className?: string;
	} = $props();

	let internalValue = $state(defaultValue ?? options[0]?.value ?? '');
	let hoveredIndex = $state(-1);

	let controlled = $derived(value !== undefined);
	let current = $derived(controlled ? value : internalValue);
	let found = $derived(options.findIndex((o) => o.value === current));
	let index = $derived(found < 0 ? 0 : found);
	let count = $derived(Math.max(1, options.length));

	let buttons = $state<HTMLButtonElement[]>([]);

	let prefersReducedMotion = $state(false);

	let thumbEl = $state<HTMLDivElement | null>(null);
	let maskEl = $state<HTMLDivElement | null>(null);

	$effect(() => {
		const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mql.matches;
		function handle(e: MediaQueryListEvent) {
			prefersReducedMotion = e.matches;
		}
		mql.addEventListener('change', handle);
		return () => mql.removeEventListener('change', handle);
	});

	$effect(() => {
		const el = thumbEl;
		const mask = maskEl;
		if (!el || !mask) return;

		const thumbX = `${index * 100}%`;
		const maskX = `${index * -100}%`;

		if (prefersReducedMotion) {
			el.style.transform = `translateX(${thumbX})`;
			mask.style.transform = `translateX(${maskX})`;
			return;
		}

		const spring = { type: 'spring' as const, stiffness: 520, damping: 34, mass: 0.45 };

		const thumbAnim = animate(el, { x: thumbX }, spring);
		const maskAnim = animate(mask, { x: maskX }, spring);

		return () => {
			thumbAnim.stop();
			maskAnim.stop();
		};
	});

	function select(next: string) {
		if (!controlled) internalValue = next;
		if (next !== current) onValueChange?.(next);
	}

	function seek(from: number, dir: number): number {
		let i = from;
		for (let k = 0; k < count; k++) {
			i = (i + dir + count) % count;
			if (!options[i]?.disabled) return i;
		}
		return from;
	}

	function go(i: number) {
		const option = options[i];
		if (!option || option.disabled) return;
		buttons[i]?.focus();
		select(option.value);
	}

	function onKeyDown(e: KeyboardEvent, i: number) {
		if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
			e.preventDefault();
			go(seek(i, 1));
		} else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
			e.preventDefault();
			go(seek(i, -1));
		} else if (e.key === 'Home') {
			e.preventDefault();
			go(seek(count - 1, 1));
		} else if (e.key === 'End') {
			e.preventDefault();
			go(seek(0, -1));
		}
	}
</script>

<div
	role="radiogroup"
	aria-label={label}
	class="relative inline-block select-none rounded-[9px] border border-stone-200 bg-stone-100/70 p-[3px] shadow-[inset_0_1px_2px_rgba(28,25,23,0.07)] dark:border-white/[0.16] dark:bg-[#1D1D1A] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.45)] {className}"
>
	<div
		class="relative grid"
		style="grid-template-columns: repeat({count}, minmax(0, 1fr)); touch-action: manipulation"
	>
		{#each options as option, i}
			<span
				aria-hidden="true"
				class="px-3 py-[7px] text-center text-[13px] leading-[18px] font-medium tracking-[-0.01em] whitespace-nowrap pointer-events-none {option.disabled
					? 'text-stone-300 dark:text-stone-600'
					: hoveredIndex === i && i !== index
						? 'text-stone-700 dark:text-stone-200'
						: 'text-stone-500 dark:text-stone-400'}"
			>
				{option.label}
			</span>
		{/each}

		<div
			bind:this={thumbEl}
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-0 overflow-hidden rounded-[6px] bg-stone-800 shadow-[0_1px_2px_rgba(28,25,23,0.28)] dark:bg-stone-100 dark:shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
			style="width: {100 / count}%"
		>
			<div
				bind:this={maskEl}
				class="absolute inset-0"
			>
				<div
					class="absolute inset-y-0 left-0 grid"
					style="width: {count * 100}%; grid-template-columns: repeat({count}, minmax(0, 1fr))"
				>
					{#each options as option}
						<span class="px-3 py-[7px] text-center text-[13px] leading-[18px] font-medium tracking-[-0.01em] whitespace-nowrap text-stone-50 dark:text-stone-900">
							{option.label}
						</span>
					{/each}
				</div>
			</div>
		</div>

		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class="absolute inset-0 grid"
			style="grid-template-columns: repeat({count}, minmax(0, 1fr))"
			onpointerleave={() => (hoveredIndex = -1)}
		>
			{#each options as option, i}
				<button
					type="button"
					role="radio"
					aria-checked={i === index}
					aria-disabled={option.disabled || undefined}
					tabindex={i === index ? 0 : -1}
					onclick={() => !option.disabled && select(option.value)}
					onkeydown={(e) => onKeyDown(e, i)}
					onpointerenter={() => !option.disabled && (hoveredIndex = i)}
					class="cursor-default rounded-[6px] outline-none focus-visible:bg-[#4568FF]/[0.06] focus-visible:shadow-[inset_0_0_0_1px_#4568FF] dark:focus-visible:bg-[#93B0FF]/[0.08] dark:focus-visible:shadow-[inset_0_0_0_1px_#93B0FF]"
				>
					<span class="sr-only">{option.label}</span>
				</button>
			{/each}
		</div>
	</div>
</div>
