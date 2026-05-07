import type { PageServerLoad } from './$types';

export interface SubstackPost {
    title: string;
    link: string;
    pubDate: string;
    description: string;
    image: string | null;
}

const SUBSTACK_RSS = 'https://farseen.substack.com/feed';

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

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const response = await fetch(SUBSTACK_RSS);
        const xml = await response.text();

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

        return { posts };
    } catch {
        return { posts: [] };
    }
};
