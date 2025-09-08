import Episode from './Episode'
import type { EpisodeType } from '../types/episode'

type EpisodeListProps = {
	data: EpisodeType[]
	podcastId: string
}

export default function EpisodeList(props: EpisodeListProps) {
	const episodes = props.data
	const { podcastId } = props

	return (
		<>
			{episodes?.length > 0 && (
				<ul className="list-episodes">
					{episodes.map((elem: EpisodeType) => (
						<li key={elem.guid}>
							<Episode data={elem} podcastId={podcastId} />
						</li>
					))}
				</ul>
			)}
		</>
	)
}
