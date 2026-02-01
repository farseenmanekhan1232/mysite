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
            <a href="https://x.com/farsn_" target="_blank" rel="noopener">x</a>
            <a href="https://www.linkedin.com/in/farseen-m-2419531a7" target="_blank" rel="noopener">linkedin</a>
            <a href="mailto:farseenmanekhan1232@gmail.com">email</a>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <VisitorCounter />
    </footer>
</div>
