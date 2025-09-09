import DOMPurify from 'dompurify'

export function sanitizeHtml(dirtyHtml: string): string {
	return DOMPurify.sanitize(dirtyHtml, {
		ALLOWED_TAGS: ['strong', 'b', 'em', 'i', 'a', 'p', 'ul', 'ol', 'li', 'br'],
		ALLOWED_ATTR: ['href', 'target', 'rel'],
	})
}
