import type { PageServerLoad } from './$types';

export interface SubstackPost {
	title: string;
	link: string;
	pubDate: string;
	description: string;
	image: string | null;
}

const SUBSTACK_RSS = 'https://farseen.substack.com/feed';
const REFRESH_INTERVAL_MS = 7 * 24 * 60 * 60 * 1000;

let cache: { posts: SubstackPost[]; fetchedAt: number } | null = null;
let refreshing: Promise<void> | null = null;

function xmlDecode(str: string): string {
	return str
		.replace(/&#8217;/g, "'")
		.replace(/&#8216;/g, "'")
		.replace(/&#8220;/g, '"')
		.replace(/&#8221;/g, '"')
		.replace(/&#8230;/g, '...')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));
}

function stripHtml(html: string): string {
	return html.replace(/<[^>]*>/g, '').trim();
}

function extractFirstParagraph(html: string): string {
	const match = html.match(/<p>(.*?)<\/p>/);
	return match ? stripHtml(match[1]) : '';
}

function parseFeed(xml: string): SubstackPost[] {
	const posts: SubstackPost[] = [];
	const itemRegex = /<item>([\s\S]*?)<\/item>/g;
	let match;

	while ((match = itemRegex.exec(xml)) !== null) {
		const item = match[1];

		const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
		const linkMatch = item.match(/<link>(.*?)<\/link>/);
		const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
		const descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/);
		const encMatch = item.match(/<enclosure[^>]*url="([^"]*)"[^>]*\/>/);

		const title = titleMatch ? xmlDecode(titleMatch[1]) : '';

		if (title.includes('Join my new subscriber chat')) continue;

		posts.push({
			title,
			link: linkMatch ? linkMatch[1] : '',
			pubDate: dateMatch ? dateMatch[1] : '',
			description: descMatch ? extractFirstParagraph(xmlDecode(descMatch[1])) : '',
			image: encMatch ? encMatch[1] : null
		});
	}

	return posts;
}

async function fetchPosts(fetchFn: typeof fetch): Promise<SubstackPost[]> {
	const response = await fetchFn(SUBSTACK_RSS);
	if (!response.ok) throw new Error(`Substack feed returned ${response.status}`);
	const xml = await response.text();
	const posts = parseFeed(xml);
	if (posts.length === 0) throw new Error('Substack feed parsed to zero posts');
	return posts;
}

async function refresh(fetchFn: typeof fetch): Promise<void> {
	try {
		const posts = await fetchPosts(fetchFn);
		cache = { posts, fetchedAt: Date.now() };
	} catch {
		if (!cache) throw new Error('Substack feed unavailable');
	}
}

export const load: PageServerLoad = async ({ fetch, platform }) => {
	if (!cache) {
		try {
			await refresh(fetch);
			return { posts: cache!.posts };
		} catch {
			return { posts: [] };
		}
	}

	if (cache && Date.now() - cache.fetchedAt < REFRESH_INTERVAL_MS) {
		return { posts: cache.posts };
	}

	if (!refreshing) {
		refreshing = refresh(fetch).finally(() => {
			refreshing = null;
		});
		platform?.context?.waitUntil(refreshing);
	}

	return { posts: cache.posts };
};
