import Episode from './Episode'

export default function EpisodeList(props) {
	const episodes = props.data
	const { podcastId } = props

	return (
		<>
			<h3>EpisodeList</h3>
			{episodes?.length > 0 && (
				<ul className="list-episodes">
					{episodes.map((elem) => (
						<li key={elem.guid}>
							<Episode data={elem} podcastId={podcastId} />
						</li>
					))}
				</ul>
			)}
		</>
	)
}
