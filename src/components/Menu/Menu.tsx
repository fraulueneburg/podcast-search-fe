import './Menu.scss'
import { Link } from '@tanstack/react-router'

import {
	HouseLineIcon as IconHome,
	HeadphonesIcon as IconLibrary,
	BookmarkSimpleIcon as IconSaved,
	UserIcon as IconProfile,
} from '@phosphor-icons/react'

export function Menu() {
	return (
		<>
			<nav className="menu-main">
				<ul>
					<li>
						<Link to="/">
							<IconHome />
							Home
						</Link>
					</li>
					<li>
						<a href="">
							<IconLibrary />
							Library
						</a>
					</li>
					<li>
						<a href="">
							<IconSaved />
							Saved
						</a>
					</li>
					<li>
						<a href="">
							<IconProfile />
							Profile
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
