import { Router } from '@tanstack/react-router'
import { rootRoute } from './routes/__layout'
import { indexRoute, podcastRoute } from './routes/routes'
import { podcastDetailRoute } from './routes/routes'

const routeTree = rootRoute.addChildren([indexRoute, podcastRoute.addChildren([podcastDetailRoute])])

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}
