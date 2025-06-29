import { useLoaderData } from '@tanstack/react-router'
import { podcastDetailRoute } from '../routes/routes'
import EpisodeList from '../components/EpisodeList'
import EpisodeSearch from '../components/EpisodeSearch'

export default function PodcastPage() {
	const data = useLoaderData({ from: podcastDetailRoute.id })

	const { artistName, artworkUrl600, trackCount, trackName } = data.info
	const { episodes } = data

	console.log('DATA INFO PC PAGE', data.info)
	console.log('DATA PODCAST PAGE', data.episodes)

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
			<EpisodeSearch />
			<EpisodeList data={episodes} />
		</>
	)
}
