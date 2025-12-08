import { create } from 'zustand';

interface IAudioStoreState {
	link: string;
	error: string | null;
	audio: null | HTMLAudioElement;
	currentAudioLink: string;
	setLink: (value: string) => void;
	setError: (value: string | null) => void;
	setAudio: (value: null | HTMLAudioElement) => void;
	setCurrentAudioLink: (value: string) => void;
}

const TEST_LINK_MOCK = `https://traxx011.ice.infomaniak.ch/traxx011-low.mp3`;

export const useAudioStore = create<IAudioStoreState>((set) => ({
	link: TEST_LINK_MOCK,
	error: null,
	audio: null,
	currentAudioLink: '',

	setError: (error: string | null) => set({ error }),
	setLink: (link: string) => set({ link }),
	setAudio: (audio: null | HTMLAudioElement) => set({ audio }),
	setCurrentAudioLink: (value: string) => set({ currentAudioLink: value }),
}));
