import { Link } from '@tanstack/react-router'
import { MinusCircleIcon as IconBlock, HeartIcon as IconFav } from '@phosphor-icons/react'
import { podcastDetailRoute } from '../routes/routes'

export default function PodcastList(props) {
	const { data } = props

	type PodcastProps = {
		artistName: string
		artworkUrl100: string
		primaryGenreName: string
		trackCount: number
		trackId: number
		trackName: string
	}

	return (
		<>
			<h2>Podcast List</h2>
			{data?.length > 0 ? (
				<ul className="list-podcasts">
					{data.map(({ artistName, artworkUrl100, primaryGenreName, trackCount, trackId, trackName }: PodcastProps) => (
						<li key={trackId}>
							<Link to={podcastDetailRoute.id} params={{ podcastId: trackId.toString() }}>
								<img src={artworkUrl100} width="100" height="100" />
								<div>
									<h3>{trackName}</h3>
									<p>
										<em>{artistName}</em>
										<br />
										{trackCount} episodes
										<br />
										<small>{primaryGenreName}</small>
									</p>
									<IconFav /> <small>mark as favourite</small>
									<br />
									<IconBlock /> <small>hide this podcast</small>
								</div>
							</Link>
						</li>
					))}
				</ul>
			) : (
				<>No results</>
			)}
		</>
	)
}
