import { error } from '@sveltejs/kit';
import { thoughts } from '$lib/thoughts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const thought = thoughts.find(t => t.slug === params.slug);

    if (!thought) {
        throw error(404, 'Thought not found');
    }

    return {
        thought
    };
};
