import { Outlet, RootRoute } from '@tanstack/react-router'
import { Header, Menu } from '../components'

export const rootRoute = new RootRoute({
	component: () => (
		<>
			<div className="scrollable-content">
				<Header />
				<main>
					<Outlet />
				</main>
			</div>
			<Menu />
		</>
	),
})
