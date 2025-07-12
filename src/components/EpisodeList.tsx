import parse from 'html-react-parser'
import AudioPlayer from './AudioPlayer'

export default function EpisodeList(props) {
	const episodes = props.data
	const { podcastId } = props

	type EpisodeListType = {
		title: string
		description: string
		pubDate: string
		guid: {
			'@_isPermaLink': string
			'#text': string
		}
		image: string
		duration: string
		audioURL: string
	}

	return (
		<>
			<h3>EpisodeList</h3>
			{episodes?.length > 0 && (
				<ul className="list-episodes">
					{episodes.map(({ title, description, pubDate, guid, image, duration, audioURL }: EpisodeListType) => (
						<li key={guid?.['#text']}>
							<div>{image && <img src={image} width="150" alt={title} />}</div>
							<div>
								<small>
									{pubDate} | {duration}
								</small>
								<h4>
									<a target="_blank" href={`https://podcasts.apple.com/podcast/id${podcastId}?i=${guid?.['#text']}`}>
										{title}
									</a>
								</h4>
								<AudioPlayer url={audioURL} />
								<div className="desc">{parse(description)}</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
