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
	}

	return (
		<>
			<h3>EpisodeList</h3>
			{episodes?.length > 0 && (
				<ul className="list-episodes">
					{episodes.map(({ title, description, pubDate, guid }: EpisodeListType) => (
						<li className={guid?.['#text']}>
							<small>{pubDate}</small>
							<h4>{title}</h4>
							{parse(description)}
						</li>
					))}
				</ul>
			)}
		</>
	)
}
