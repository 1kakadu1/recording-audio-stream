import { useAudioStore } from '@/stores/audio.store';
import { type ChangeEvent, useCallback, useEffect, useMemo } from 'react';
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
		fetchRecorderStart,
		fetchRecorderStop,
		fetchRecorderStatus,
		isRecorder,
		setIsRecorder
	} = useAudioStore();

	const title = useMemo(() => {
		if (audio && currentAudioLink) {
			return createTitle(currentAudioLink);
		}

		return '';
	}, [audio, currentAudioLink]);

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

	const onStartRecord = useCallback(()=>{
		fetchRecorderStart(currentAudioLink, title);
	}, [title, currentAudioLink, audio])

	const onStopRecord = () =>{
		fetchRecorderStop();
	}

	const onGetStatusProgress = (init?: boolean)=>{
		fetchRecorderStatus().then((res)=>{
			if(init){
				setIsRecorder(res.recording);
			}
		})
	}

	useEffect(()=>{
		if(!isRecorder){
			onGetStatusProgress(true);
		}
	}, [])



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
		onStartRecord,
		onStopRecord,
		onGetStatusProgress,
		isRecorder
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
		onStartRecord,
		onStopRecord,
		onGetStatusProgress,
		isRecorder
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
				<div>
					<div className={cl.audio__wrap}>
						<Audio
							src={currentAudioLink}
							title={'traxx011.ice.infomaniak.ch/traxx011-low'}
							onSetAudio={onChangeAudio}
							online
						/>
					</div>
					<div className={cl.actions}>
						<Button disabled={isRecorder} onClick={onStartRecord}>Start</Button>
						<Button  disabled={!isRecorder} onClick={onStopRecord}>Stop</Button>
						<Button  onClick={()=>onGetStatusProgress()}>
							Status Progress
							{isRecorder && <span className={cl.recorder}></span>}
						</Button>
					</div>
				</div>
			)}
		</LayoutPublic>
	);
};
