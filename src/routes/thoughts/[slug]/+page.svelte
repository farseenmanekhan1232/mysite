<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric'
        }).toLowerCase();
    }
</script>

<svelte:head>
    <title>{data.thought.title} - farseen</title>
</svelte:head>

<article class="thought-detail">
    <header>
        <h1>{data.thought.title}</h1>
        <time>{formatDate(data.thought.date)}</time>
    </header>

    <div class="content">
        {#each data.thought.content.split('\n') as paragraph}
            <p>{paragraph}</p>
        {/each}
    </div>

    <div class="back-link">
        <a href="/thoughts">← back to thoughts</a>
    </div>
</article>

<style>
    .thought-detail {
        max-width: 100%;
    }

    header {
        margin-bottom: var(--spacing-lg);
        display: block; /* Override flex from app.css header */
        justify-content: unset;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    time {
        font-size: 0.875rem;
        color: var(--text-muted);
    }

    .content {
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: var(--spacing-xl);
    }

    .back-link {
        margin-top: var(--spacing-xl);
    }
    
    .back-link a {
        text-decoration: none;
        font-size: 0.9rem;
    }
</style>
