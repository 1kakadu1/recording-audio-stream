import { useMemo } from 'react';
import {
	type IAudioProgressBarProps,
	type IProgressCSSProps,
} from '../index.model';

export const ProgressBar = (props: IAudioProgressBarProps) => {
	const { duration, currentProgress, buffered, online, ...rest } = props;
	const progressBarWidth = useMemo(() => {
		const time = currentProgress / duration;
		const value = isNaN(time) ? 0 : time;
		return value > 1 ? 1 : value;
	}, [currentProgress, duration, online]);
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
