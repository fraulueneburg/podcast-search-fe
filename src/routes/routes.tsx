import { createRoute } from '@tanstack/react-router'
import { rootRoute } from './__layout'
import { API_URL } from '../config'

import { Start, Podcast, Library, Profile, Saved } from '../pages'

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Start,
})

export const searchRoute = createRoute({
	getParentRoute: () => indexRoute,
	path: '$searchTerm',
	component: Start,
	loader: async ({ params }) => {
		const res = await fetch(`${API_URL}?search/${params.searchTerm}`)
		if (!res.ok) throw new Error('Failed to load search result page')
		return res.json()
	},
})

export const podcastRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/podcast',
})

export const podcastDetailRoute = createRoute({
	getParentRoute: () => podcastRoute,
	path: '$podcastId',
	component: Podcast,
	loader: async ({ params }) => {
		const res = await fetch(`${API_URL}/podcast/${params.podcastId}`)
		if (!res.ok) throw new Error('Failed to load podcast')
		return res.json()
	},
})

export const savedRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/saved',
	component: Saved,
})

export const libraryRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/library',
	component: Library,
})

export const profileRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/profile',
	component: Profile,
})
