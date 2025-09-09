import './Menu.scss'
import { Link, useMatchRoute } from '@tanstack/react-router'

import {
	HouseLineIcon as IconHome,
	HeadphonesIcon as IconLibrary,
	BookmarkSimpleIcon as IconSaved,
	UserIcon as IconProfile,
} from '@phosphor-icons/react'

const navItems = [
	{ to: '/', label: 'Home', icon: IconHome },
	{ to: '/library', label: 'Library', icon: IconLibrary },
	{ to: '/saved', label: 'Saved', icon: IconSaved },
	{ to: '/profile', label: 'Profile', icon: IconProfile },
]

function NavLink({ to, label, icon: Icon }: { to: string; label: string; icon: React.ElementType }) {
	const matchRoute = useMatchRoute()
	const isActive = !!matchRoute({ to, fuzzy: false })

	return (
		<li>
			<Link to={to} className={isActive ? 'current' : ''} aria-current={isActive ? 'page' : undefined}>
				<Icon />
				{label}
			</Link>
		</li>
	)
}

export function Menu() {
	return (
		<>
			<nav className="menu-main">
				<ul>
					{navItems.map((elem) => (
						<NavLink key={elem.to} to={elem.to} label={elem.label} icon={elem.icon} />
					))}
				</ul>
			</nav>
		</>
	)
}
