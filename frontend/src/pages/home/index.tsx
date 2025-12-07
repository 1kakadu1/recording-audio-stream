import { type ChangeEvent, useState } from 'react';
import { LayoutPublic } from '@/components/layout-public';
import { Button, InputField } from '@/components/ui';
import Audio from '../../components/audio';

export const HomePage = () => {
	const [link, setLink] = useState('');
	const [error, setError] = useState<null | string>(null);
	const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
	const [currentAudioLink, setCurrentAudioLink] = useState('');

	const onChangeAudio = (value: null | HTMLAudioElement) => {
		if (value && audio) {
			audio.pause();
		}
		setAudio(value);
	};

	const onSetLink = () => {
		if (link.includes('http') && link.includes('.mp3')) {
			setCurrentAudioLink(link);
		} else {
			setError('Invalid link');
		}
	};
	const onChangeLink = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setLink(value);
	};

	return (
		<LayoutPublic>
			<div>
				<InputField
					value={link}
					onChange={onChangeLink}
				/>
				<Button onClick={onSetLink}>OK</Button>
				{error && <h5>{error}</h5>}
			</div>
			{currentAudioLink && error === null && (
				<Audio
					src="https://traxx011.ice.infomaniak.ch/traxx011-low.mp3"
					title={'traxx011.ice.infomaniak.ch/traxx011-low'}
					onSetAudio={onChangeAudio}
					download={[]}
				/>
			)}
		</LayoutPublic>
	);
};
