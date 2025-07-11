import { useLoaderData } from '@tanstack/react-router'
import { podcastDetailRoute } from '../routes/routes'
import EpisodeList from '../components/EpisodeList'
import EpisodeSearch from '../components/EpisodeSearch'
import { useEffect, useState } from 'react'

export default function PodcastPage() {
	const data = useLoaderData({ from: podcastDetailRoute.id })

	const { artistName, artworkUrl600, trackCount, trackName } = data.info
	const { episodes } = data

	const [filteredEpisodes, setFilteredEpisodes] = useState(episodes)

	const startSearch = (event) => {
		event.preventDefault()

		const inputTerm = event.target.elements['ep-search-term'].value.trim()

		if (inputTerm.length > 0) {
			setFilteredEpisodes(
				episodes.filter((obj) =>
					Object.values(obj).some((value) => String(value).toLowerCase().includes(inputTerm.toLowerCase()))
				)
			)
		}
	}

	return (
		<>
			<section style={{ display: 'flex', gap: '1rem' }}>
				<img src={artworkUrl600} width={250} height={250} />
				<header>
					<h1>{trackName}</h1>
					<p>{artistName}</p>
					<p>{trackCount} episodes</p>
				</header>
			</section>
			<EpisodeSearch submitAction={startSearch} />
			<EpisodeList data={filteredEpisodes} />
		</>
	)
}
