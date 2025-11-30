import { useState } from 'react';
import Audio from '../../components/audio';

export const HomePage = () => {
	const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
	const onChangeAudio = (value: null | HTMLAudioElement) => {
		if (value && audio) {
			audio.pause();
		}

		setAudio(value);
	};
	return (
		<div>
			<h1>HOME</h1>
			<Audio
				src="https://traxx011.ice.infomaniak.ch/traxx011-low.mp3"
				title={'traxx011.ice.infomaniak.ch/traxx011-low'}
				onSetAudio={onChangeAudio}
				download={[]}
			/>
		</div>
	);
};
