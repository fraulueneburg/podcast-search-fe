import { Outlet, RootRoute } from '@tanstack/react-router'
import { Header } from '../components'

export const rootRoute = new RootRoute({
	component: () => (
		<>
			<Header />
			<main>
				<h1>The awesome podcast search</h1>
				<Outlet />
			</main>
		</>
	),
})
