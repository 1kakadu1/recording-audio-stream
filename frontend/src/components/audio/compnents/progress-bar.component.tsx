import {
	type IAudioProgressBarProps,
	type IProgressCSSProps,
} from '../index.model';

export const ProgressBar = (props: IAudioProgressBarProps) => {
	const { duration, currentProgress, buffered, ...rest } = props;

	const progressBarWidth = isNaN(currentProgress / duration)
		? 0
		: currentProgress / duration;
	const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

	const progressStyles: IProgressCSSProps = {
		'--progress-width': progressBarWidth,
		'--buffered-width': bufferedWidth,
	};

	return (
		<div className={'progress-bar-container'}>
			<input
				type="range"
				name="progress"
				className={'progress-bar'}
				style={progressStyles}
				min={0}
				max={duration}
				value={currentProgress}
				{...rest}
			/>
		</div>
	);
};
