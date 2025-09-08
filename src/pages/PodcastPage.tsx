import './_podcast.scss'
import { useLoaderData } from '@tanstack/react-router'
import { podcastDetailRoute } from '../routes/routes'
import EpisodeList from '../components/EpisodeList'
import { useMemo, useState } from 'react'
import type { EpisodeType } from '../types/episode'

export default function PodcastPage() {
	const data = useLoaderData({ from: podcastDetailRoute.id })

	const { artistName, artworkUrl600, collectionId, trackCount, trackName } = data.info
	const { episodes } = data
	const [query, setQuery] = useState('')

	const filteredEpisodes = useMemo(() => {
		const queryLc = query.toLowerCase()
		return episodes.filter(
			(elem: EpisodeType) => elem.title.toLowerCase().includes(queryLc) || elem.description.toLowerCase().includes(queryLc)
		)
	}, [episodes, query])

	const handleStartSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(event.target.value)
	}

	return (
		<>
			<section className="podcast-details">
				<img src={artworkUrl600} width={250} height={250} />
				<header>
					<h1>{trackName}</h1>
					<p className="artist-name">{artistName}</p>
					<p className="track-count">{trackCount} episodes</p>
				</header>
			</section>
			<input
				type="search"
				className="episode-filter"
				onChange={handleStartSearch}
				aria-label="filter episodes"
				placeholder="filter episodes"
				id="episode-query"
				name="episode-query"
			/>
			<EpisodeList podcastId={collectionId} data={filteredEpisodes} />
		</>
	)
}
