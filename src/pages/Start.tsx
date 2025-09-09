import { useState } from 'react'
// import { useLoaderData } from '@tanstack/react-router'
// import { searchRoute } from '../routes/routes'

import PodcastSearch from '../components/PodcastSearch'
import PodcastList from '../components/PodcastList'

export function Start() {
	// const data = useLoaderData({ from: searchRoute.id })

	// console.log('data start', data)

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
