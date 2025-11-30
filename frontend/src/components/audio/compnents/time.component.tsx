export const TimeAudio = ({
	currentTime,
	duration,
	isDuration = false,
}: {
	duration: string;
	currentTime: string;
	isDuration?: boolean;
}) => {
	return (
		<span className="audio-time">
			{currentTime}
			<span>{isDuration && <> / {duration}</>}</span>
		</span>
	);
};
