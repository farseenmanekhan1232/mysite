<script lang="ts">
    import { thoughts } from '$lib/thoughts';
    
    // Sort by date descending
    const sortedThoughts = [...thoughts].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    function formatDate(dateStr: string) {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short', 
            day: 'numeric'
        }).toLowerCase();
    }
</script>

<svelte:head>
    <title>thoughts - farseen</title>
</svelte:head>

<section class="thoughts-list">
    <h1>thoughts</h1>
    
    <div class="list">
        {#each sortedThoughts as thought}
            <article class="thought-item">
                <div class="meta">
                    <time>{formatDate(thought.date)}</time>
                </div>
                <h3><a href="/thoughts/{thought.slug}">{thought.title}</a></h3>
            </article>
        {/each}
    </div>
</section>

<style>
    h1 {
        margin-bottom: var(--spacing-lg);
    }

    .thought-item {
        margin-bottom: var(--spacing-md);
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .meta {
        font-size: 0.875rem;
        color: var(--text-muted);
    }

    h3 {
        font-size: 1rem;
        font-weight: 400;
        margin: 0;
    }

    h3 a {
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s;
    }

    h3 a:hover {
        border-bottom-color: var(--link-color);
    }
</style>
