import './header.scss'
import { Link } from '@tanstack/react-router'

export function Header() {
	return (
		<>
			<header className="page-header">
				<Link to="/">Bites — Podcast Search</Link>
			</header>
		</>
	)
}
