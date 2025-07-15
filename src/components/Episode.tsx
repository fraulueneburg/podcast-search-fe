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
			<div>{image && <img src={image} width="150" alt={title} />}</div>
			<div>
				<small>
					{pubDate} | {duration}
				</small>
				<h4>
					<a
						title="open episode in apple podcasts"
						target="_blank"
						href={`https://podcasts.apple.com/podcast/id${podcastId}?i=${guid}`}>
						{title}
					</a>
				</h4>
				<AudioPlayer url={audioURL} />
				<div className="desc">{parse(description)}</div>
			</div>
		</>
	)
}
