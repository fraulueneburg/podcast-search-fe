import parse from 'html-react-parser'
import AudioPlayer from './AudioPlayer'

import type { EpisodeType } from '../types/episode'

type EpisodeProps = {
	data: EpisodeType
	podcastId: string
}

export default function Episode({ data, podcastId }: EpisodeProps) {
	const { title, description, pubDate, guid, audioURL, image, duration } = data
	return (
		<>
			<header>
				<div className="text">
					<h2 className="ep-title">{title}</h2>
					<small className="ep-date">{pubDate}</small>
				</div>
				<img src={image || ''} width="60" height="60" alt={image ? title : ''} />
			</header>

			<div className="ep-desc">{parse(description)}</div>

			<footer>
				<AudioPlayer url={audioURL} />
				<p className="ep-duration">{duration}</p>
				<nav className="nav-actions" aria-label="episode actions">
					<ul>
						<li>save episode</li>
						<li>
							<a target="_blank" href={`https://podcasts.apple.com/podcast/id${podcastId}?i=${guid}`}>
								open episode in apple podcasts
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	)
}
