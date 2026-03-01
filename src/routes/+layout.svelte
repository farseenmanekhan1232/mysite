<script lang="ts">
    import '../app.css';
    import VisitorCounter from '$lib/components/VisitorCounter.svelte';
</script>

<svelte:head>
    <!-- Using system fonts for raw aesthetic -->
</svelte:head>

<div class="container">
    <main>
        <slot />
    </main>

    <footer>
        <VisitorCounter />
    </footer>
</div>
