import type { Handle } from '@sveltejs/kit';

// Player-card pages are framed by X, so they must opt in via frame-ancestors.
// X (and its Card Validator) only frame from x.com / twitter.com origins.
const FRAME_ANCESTORS =
	"frame-ancestors 'self' https://x.com https://*.x.com https://twitter.com https://*.twitter.com";

const FRAMABLE = new Set(['/', '/play', '/play/']);

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	if (FRAMABLE.has(event.url.pathname)) {
		response.headers.set('Content-Security-Policy', FRAME_ANCESTORS);
	}

	return response;
};
