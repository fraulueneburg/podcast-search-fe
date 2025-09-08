import { Outlet, RootRoute } from '@tanstack/react-router'
import { Header } from '../components'

export const rootRoute = new RootRoute({
	component: () => (
		<>
			<Header />
			<main>
				<h1>Quickly find episodes from your favourite shows</h1>
				<Outlet />
			</main>
		</>
	),
})
