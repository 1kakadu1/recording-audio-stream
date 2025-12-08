import { useAudioStore } from '@/stores/audio.store';
import { type ChangeEvent, useMemo } from 'react';
import { LayoutPublic } from '@/components/layout-public';
import { Button, InputField } from '@/components/ui';
import Audio from '../../components/audio';
import cl from './home.module.scss';

const createTitle = (url: string) => {
	const u = new URL(url);
	const host = u.host;
	const path = u.pathname.replace(/\.mp3$/, '');

	return host + path;
};

const useAudioHook = () => {
	const {
		audio,
		link,
		error,
		currentAudioLink,
		setAudio,
		setCurrentAudioLink,
		setLink,
		setError,
	} = useAudioStore();

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

	const title = useMemo(() => {
		if (audio && currentAudioLink) {
			return createTitle(currentAudioLink);
		}

		return '';
	}, [audio, currentAudioLink]);

	return {
		title,
		audio,
		link,
		error,
		currentAudioLink,
		setAudio,
		setCurrentAudioLink,
		setLink,
		setError,
		onChangeAudio,
		onSetLink,
		onChangeLink,
	};
};

export const HomePage = () => {
	const {
		link,
		error,
		currentAudioLink,
		onChangeAudio,
		onSetLink,
		onChangeLink,
	} = useAudioHook();
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
						src={currentAudioLink}
						title={'traxx011.ice.infomaniak.ch/traxx011-low'}
						onSetAudio={onChangeAudio}
						online
					/>
				</div>
			)}
		</LayoutPublic>
	);
};
