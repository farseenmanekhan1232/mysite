<script lang="ts">
    import '../app.css';
    import VisitorCounter from '$lib/components/VisitorCounter.svelte';
    import { Notebook, GithubLogo, XLogo, LinkedinLogo, EnvelopeSimple, YoutubeLogo } from 'phosphor-svelte';
</script>

<svelte:head>
    <!-- Using system fonts for raw aesthetic -->
</svelte:head>

<div class="container">
    <header>
        <div class="status-dot"></div>
        <nav>
            <a href="/thoughts" aria-label="thoughts">
                <Notebook size={24} />
            </a>
            <a href="https://github.com/farseenmanekhan1232" target="_blank" rel="noopener" aria-label="github">
                <GithubLogo size={24} />
            </a>
            <a href="https://x.com/farsn_" target="_blank" rel="noopener" aria-label="x">
                <XLogo size={24} />
            </a>
            <a href="https://www.linkedin.com/in/farseen-m-2419531a7" target="_blank" rel="noopener" aria-label="linkedin">
                <LinkedinLogo size={24} />
            </a>
            <a href="mailto:farseenmanekhan1232@gmail.com" aria-label="email">
                <EnvelopeSimple size={24} />
            </a>
            <a href="https://www.youtube.com/@1farseen" target="_blank" rel="noopener" aria-label="youtube">
                <YoutubeLogo size={24} />
            </a>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <VisitorCounter />
    </footer>
</div>
