import { Link } from '@tanstack/react-router'
import { podcastDetailRoute } from '../routes/routes'

type PodcastProps = {
	artistName: string
	artworkUrl600: string
	primaryGenreName: string
	trackCount: number
	trackId: number
	trackName: string
}

export default function PodcastList(props: { data: PodcastProps[] }) {
	const { data } = props

	return (
		<>
			{data?.length > 0 ? (
				<ul className="list-podcasts">
					{data.map(({ artistName, artworkUrl600, primaryGenreName, trackCount, trackId, trackName }: PodcastProps) => (
						<li key={trackId}>
							<Link to={podcastDetailRoute.id} params={{ podcastId: trackId.toString() }}>
								<div className="text">
									<h2 className="result-name">{trackName}</h2>
									<p className="artist-name">{artistName}</p>
									<p className="track-count">{trackCount} episodes</p>
								</div>
								<img src={artworkUrl600} width="120" height="120" />
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
