<script lang="ts">
    import '../app.css';
    import VisitorCounter from '$lib/components/VisitorCounter.svelte';
</script>

<svelte:head>
    <!-- Using system fonts for raw aesthetic -->
</svelte:head>

<div class="container">
    <header>
        <div class="status-dot"></div>
        <nav>
            <a href="/thoughts">thoughts</a>
            <a href="https://github.com/farseenmanekhan1232" target="_blank" rel="noopener">github</a>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <VisitorCounter />
    </footer>
</div>
