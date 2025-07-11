import parse from 'html-react-parser'

export default function EpisodeList(props) {
	const episodes = props.data

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
	}

	return (
		<>
			<h3>EpisodeList</h3>
			{episodes?.length > 0 && (
				<ul className="list-episodes">
					{episodes.map(({ title, description, pubDate, guid, image, duration }: EpisodeListType) => (
						<li className={guid?.['#text']}>
							{image && <img src={image} width="150" alt={title} />}
							<div>
								<small>
									{pubDate} | {duration}
								</small>
								<h4>{title}</h4>
								<div className="desc">{parse(description)}</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
