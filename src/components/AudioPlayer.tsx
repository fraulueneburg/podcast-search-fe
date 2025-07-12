export default function AudioPlayer(props) {
	const { url } = props

	return (
		<audio controls>
			<source src={url} type="audio/mpeg"></source>
		</audio>
	)
}
