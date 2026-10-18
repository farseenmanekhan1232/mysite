import type { PageServerLoad } from './$types';
import { loadPosts } from '$lib/server/posts';

export type { SubstackPost } from '$lib/types';

export const load: PageServerLoad = async ({ fetch, platform }) => {
	return { posts: await loadPosts(fetch, platform?.context?.waitUntil) };
};
