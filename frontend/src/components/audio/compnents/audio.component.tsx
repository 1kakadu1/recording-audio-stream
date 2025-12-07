import { type ChangeEvent, useEffect, useId, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { type IAudioProps } from '../index.model';
import { ProgressBar } from './progress-bar.component';
import { TimeAudio } from './time.component';
import { Volume } from './volume.component';
import { DotsHorizontalIcon } from '../../ui/icons';
import { formatDurationDisplay } from '../utils';
import { useWindowSize } from '../../../hooks/useWindowSize';

export const Audio = ({ src, title, onSetAudio, download }: IAudioProps) => {
	const id = useId();
	const [isContentOverflow, setContentOverflow] = useState<boolean>(false);
	const [isPlay, setPlay] = useState(false);
	const refAudio = useRef<HTMLAudioElement | null>(null);
	const refTitleContainer = useRef<HTMLDivElement | null>(null);
	const refTitle = useRef<HTMLDivElement | null>(null);
	const [, setIsReady] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentProgress, setCurrentProgress] = useState(0);
	const [buffered, setBuffered] = useState(0);
	const durationDisplay = formatDurationDisplay(duration);
	const elapsedDisplay = formatDurationDisplay(currentProgress);
	const [volume, setVolume] = useState(50);
	const { width = window.innerWidth } = useWindowSize();

	const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
		e,
	) => {
		const audio = e.currentTarget;
		const dur = audio.duration;
		if (dur > 0) {
			for (let i = 0; i < audio.buffered.length; i++) {
				if (
					audio.buffered.start(audio.buffered.length - 1 - i) <
					audio.currentTime
				) {
					const bufferedLength = audio.buffered.end(
						audio.buffered.length - 1 - i,
					);
					setBuffered(bufferedLength);
					break;
				}
			}
		}
	};
	const onPlay = () => {
		refAudio.current?.play();
		setPlay(true);
	};
	const onPause = () => {
		refAudio.current?.pause();
		setPlay(false);
	};
	const togglePlayAudio = () => {
		if (isPlay) {
			onPause();
		} else {
			onSetAudio(refAudio.current);
			onPlay();
		}
	};

	const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
		if (refAudio.current) {
			const value = parseInt(e.target.value);
			refAudio.current.volume = value / 100;
			setVolume(value);
		}
	};

	const onMute = () => {
		if (refAudio.current) {
			setVolume(volume === 0 ? 100 : 0);
		}
	};

	useEffect(() => {
		if (width && refTitle.current && refTitleContainer.current) {
			const width_title = refTitle.current.offsetWidth;
			const width_wrap_title = refTitleContainer.current.offsetWidth;
			const offset_width = width_title - width_wrap_title;

			if (offset_width > 0) {
				setContentOverflow(true);
			} else {
				setContentOverflow(false);
			}
		}
	}, [width]);

	useEffect(() => {
		if (refAudio.current) {
			refAudio.current.volume = 0.5;
		}
	}, []);

	return (
		<div className={`audio ${isPlay ? 'active' : ''}`}>
			<audio
				preload="metadata"
				ref={refAudio}
				controls={false}
				src={src}
				onPlaying={() => setPlay(true)}
				onPause={() => setPlay(false)}
				onDurationChange={(e) => setDuration(e.currentTarget.duration)}
				onCanPlay={(e) => {
					e.currentTarget.volume = 1;
					setIsReady(true);
				}}
				onTimeUpdate={(e) => {
					setCurrentProgress(e.currentTarget.currentTime);
					handleBufferProgress(e);
				}}
				onProgress={handleBufferProgress}
			></audio>
			<div className="audio-row">
				<button
					onClick={togglePlayAudio}
					className={`audio-submit ${isPlay ? 'play' : ''}`}
					style={{ backgroundImage: 'url(/image/albom.png)' }}
				>
					{isPlay ? (
						<svg
							width="14"
							height="17"
							viewBox="0 0 14 17"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								y="0.5"
								width="5"
								height="16"
								rx="1"
								fill="currentColor"
							/>
							<rect
								x="9"
								y="0.5"
								width="5"
								height="16"
								rx="1"
								fill="currentColor"
							/>
						</svg>
					) : (
						<svg
							width="13"
							height="15"
							viewBox="0 0 13 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 5.76795C13.3333 6.53775 13.3333 8.46225 12 9.23205L3 14.4282C1.66667 15.198 -7.31543e-07 14.2358 -6.64245e-07 12.6962L-2.09983e-07 2.30385C-1.42685e-07 0.764248 1.66667 -0.198005 3 0.571796L12 5.76795Z"
								fill="currentColor"
							/>
						</svg>
					)}
				</button>
				<div className="audio-body">
					<div className="audio-header">
						<div
							className="audio-title-wrap"
							data-tooltip-id={id}
							data-tooltip-content={title}
							ref={refTitleContainer}
						>
							<span
								className="audio-title-width"
								ref={refTitle}
							>
								{title}
							</span>
							<span className="audio-title">{title}</span>
						</div>
						<TimeAudio
							currentTime={elapsedDisplay}
							duration={durationDisplay}
							isDuration={width >= 768}
						/>
					</div>
					<div className="audio-footer">
						<ProgressBar
							duration={duration}
							currentProgress={currentProgress}
							buffered={buffered}
							onChange={(e) => {
								if (!refAudio.current) return;
								refAudio.current.currentTime = e.currentTarget.valueAsNumber;
								setCurrentProgress(e.currentTarget.valueAsNumber);
							}}
						/>
					</div>
				</div>
				<Volume
					onChange={onChangeVolume}
					value={volume}
					onMute={onMute}
				/>
				<button className="audio-links__btn">
					<DotsHorizontalIcon />
					<div className="audio-links">
						{download.map((item, index) => (
							<a
								href={item.link}
								target="_blank"
								rel="noflow, noindex noreferrer"
								key={index}
							>
								<img
									src={item.icon}
									alt=""
									className="audio-links__item-icon"
									loading="lazy"
								/>
							</a>
						))}
					</div>
				</button>
			</div>
			{isContentOverflow && (
				<Tooltip
					id={id}
					style={{ zIndex: 10 }}
				/>
			)}
		</div>
	);
};
