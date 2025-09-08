import { Route } from '@tanstack/react-router'
import { rootRoute } from './__layout'
import { API_URL } from '../config'
import StartPage from '../pages/StartPage'
import PodcastPage from '../pages/PodcastPage'

export const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: StartPage,
})

export const searchRoute = new Route({
	getParentRoute: () => indexRoute,
	path: '$searchTerm',
	component: StartPage,
	loader: async ({ params }) => {
		const res = await fetch(`${API_URL}/search/${params.searchTerm}`)
		if (!res.ok) throw new Error('Failed to load search result page')
		return res.json()
	},
})

export const podcastRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/podcast',
})

export const podcastDetailRoute = new Route({
	getParentRoute: () => podcastRoute,
	path: '$podcastId',
	component: PodcastPage,
	loader: async ({ params }) => {
		const res = await fetch(`${API_URL}/podcast/${params.podcastId}`)
		if (!res.ok) throw new Error('Failed to load podcast')
		return res.json()
	},
})
