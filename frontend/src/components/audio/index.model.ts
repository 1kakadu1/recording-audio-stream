export interface IAudioProgressBarProps extends React.ComponentPropsWithoutRef<'input'> {
	duration: number;
	currentProgress: number;
	buffered: number;
	online?: boolean;
}

export interface IVolumeProps extends React.ComponentPropsWithoutRef<'input'> {
	onMute?: () => void;
}

export interface IProgressCSSProps extends React.CSSProperties {
	'--progress-width': number;
	'--buffered-width': number;
}

export interface IVolumeCSSProps extends React.CSSProperties {
	'--volume-width': string;
}

export interface IAudioProps {
	src: string;
	title: string;
	onSetAudio: (audio: HTMLAudioElement | null) => void;
	download?: { link: string; icon: string }[];
	online?: boolean;
}
