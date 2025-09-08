import PodcastList from '../components/PodcastList'
import { useState } from 'react'

import PodcastSearch from '../components/PodcastSearch'

export default function StartPage() {
	const [podcastListData, setPodcastListData] = useState(JSON.parse(sessionStorage.getItem('podcast-list') || '[]'))

	return (
		<>
			<h1>
				Quickly find episodes <br />
				from your favourite shows
			</h1>
			<PodcastSearch updateData={setPodcastListData} />
			<PodcastList data={podcastListData} />
		</>
	)
}
