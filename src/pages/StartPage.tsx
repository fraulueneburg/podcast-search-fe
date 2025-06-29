import PodcastList from '../components/PodcastList'
import { useState } from 'react'

import PodcastSearch from '../components/PodcastSearch'

export default function StartPage() {
	const [podcastListData, setPodcastListData] = useState(JSON.parse(localStorage.getItem('podcast-list') || '[]'))

	return (
		<>
			<PodcastSearch updateData={setPodcastListData} />
			<PodcastList data={podcastListData} />
		</>
	)
}
