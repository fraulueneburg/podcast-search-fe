import { Router } from '@tanstack/react-router'
import { rootRoute } from './routes/__layout'
import { indexRoute, libraryRoute, podcastRoute, podcastDetailRoute, profileRoute, savedRoute } from './routes/routes'

const routeTree = rootRoute.addChildren([
	indexRoute,
	libraryRoute,
	podcastRoute.addChildren([podcastDetailRoute]),
	profileRoute,
	savedRoute,
])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
