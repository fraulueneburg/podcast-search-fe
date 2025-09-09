import parse from 'html-react-parser'
import { sanitizeHtml } from '../utils'

import { BookmarkSimpleIcon as IconSaveEpisode, ApplePodcastsLogoIcon as IconApplePodcast } from '@phosphor-icons/react'
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

			<div className="ep-desc">{parse(sanitizeHtml(description))}</div>

			<footer>
				<AudioPlayer url={audioURL} />
				{duration && <p className="ep-duration">{duration}</p>}
				<nav className="nav-actions" aria-label="episode actions">
					<ul>
						<li>
							<a href="" title="save episode"></a>
							<IconSaveEpisode />
						</li>
						<li>
							<a
								target="_blank"
								href={`https://podcasts.apple.com/podcast/id${podcastId}?i=${guid}`}
								title="open episode in apple podcasts">
								<IconApplePodcast />
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	)
}
