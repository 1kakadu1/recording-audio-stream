import { type ChangeEvent, useState } from 'react';
import { LayoutPublic } from '@/components/layout-public';
import { Button, InputField } from '@/components/ui';
import Audio from '../../components/audio';
import cl from './home.module.scss';

export const HomePage = () => {
	const [link, setLink] = useState(
		'https://traxx011.ice.infomaniak.ch/traxx011-low.mp3',
	);
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
			setError(null);
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
			<div className={cl.search}>
				<InputField
					value={link}
					onChange={onChangeLink}
					placeholder="Ссылка на файл"
					hideErrorText
				/>
				<Button onClick={onSetLink}>OK</Button>
				{error && <span className={cl.error}>{error}</span>}
			</div>

			{currentAudioLink && error === null && (
				<div className={cl.audio__wrap}>
					<Audio
						src="https://traxx011.ice.infomaniak.ch/traxx011-low.mp3"
						title={'traxx011.ice.infomaniak.ch/traxx011-low'}
						onSetAudio={onChangeAudio}
						online
					/>
				</div>
			)}
		</LayoutPublic>
	);
};
