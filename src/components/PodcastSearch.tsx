import { API_URL } from '../config'

import { MagnifyingGlassIcon as IconSearch } from '@phosphor-icons/react'

export default function PodcastSearch({ updateData }) {
	const startSearch = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const formData = new FormData(event.currentTarget)
		const searchTerm = formData.get('pc-name') as string

		try {
			const res = await fetch(`${API_URL}/search?term=${encodeURIComponent(searchTerm)}`)
			const data = await res.json()
			const fetchedData = data.results

			updateData(fetchedData)
			sessionStorage.setItem('podcast-list', JSON.stringify(fetchedData))
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<form onSubmit={startSearch} className="podcast-search-form">
				<input aria-label="podcast name" placeholder="Find podcasts by name …" id="pc-name" name="pc-name" type="search" />
				<button type="submit" className="icon-only" aria-label="find podcast">
					<IconSearch aria-hidden="true" weight="bold" />
				</button>
			</form>
		</>
	)
}
