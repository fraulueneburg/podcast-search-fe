export default function EpisodeSearch(props) {
	const { submitAction } = props

	return (
		<>
			<h3>search in episodes</h3>
			<form onSubmit={submitAction}>
				<input aria-label="search term" placeholder="search term" id="ep-search-term" name="ep-search-term" type="search" />
				<button type="submit">search episodes</button>
			</form>
		</>
	)
}
