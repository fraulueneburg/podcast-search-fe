import { API_URL } from '../config'

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
			<form onSubmit={startSearch}>
				<p className="pc-name-desc">Find a podcast you want to search through</p>
				<input
					aria-label="podcast name"
					placeholder="podcast name"
					id="pc-name"
					name="pc-name"
					aria-describedby="pc-name-desc"
					type="search"
				/>
				<button type="submit">find podcast</button>
			</form>
		</>
	)
}
