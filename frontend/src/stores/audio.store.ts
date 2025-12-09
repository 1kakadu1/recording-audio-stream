import { create } from 'zustand';
import { API_URL_BASE } from '@/const/variable';

export interface IRecorderStatus {
	status_detail?: string;
	status: TStatusKeys;
	status_info: TStatusValues;
}

export const StatusEnum = {
	error: 'Error recording',
	success: 'Success recording',
	record: 'Already recording',
	start: 'Recording started',
	stop: 'Recording stop',
	no_running: 'There is no running record',
} as const;

export type TStatusValues = (typeof StatusEnum)[keyof typeof StatusEnum];
export type TStatusKeys = keyof typeof StatusEnum;

interface IRecorderStatusProgress {
	recording: boolean;
	elapsed: number;
}

interface IAudioStoreState {
	link: string;
	error: string | null;
	audio: null | HTMLAudioElement;
	currentAudioLink: string;
	isRecorder: boolean;
	recorderStatus: IRecorderStatus | null;
	recorderStatusProgress: null | IRecorderStatusProgress;
	loading: boolean;
	setRecorderStatusProgress: (value: null | IRecorderStatusProgress) => void;
	setIsRecorder: (value: boolean) => void;
	setLink: (value: string) => void;
	setError: (value: string | null) => void;
	setAudio: (value: null | HTMLAudioElement) => void;
	setCurrentAudioLink: (value: string) => void;
	setLoading: (loading: boolean) => void;
	fetchRecorderStart: (
		url: string,
		file_name?: string,
	) => Promise<IRecorderStatus>;
	fetchRecorderStop: () => Promise<IRecorderStatus>;
	fetchRecorderStatus: () => Promise<IRecorderStatusProgress>;
}

const TEST_LINK_MOCK = `https://traxx011.ice.infomaniak.ch/traxx011-low.mp3`;

export const useAudioStore = create<IAudioStoreState>((set) => ({
	link: TEST_LINK_MOCK,
	error: null,
	audio: null,
	currentAudioLink: '',
	isRecorder: false,
	recorderStatus: null,
	recorderStatusProgress: null,
	loading: false,
	setLoading: (loading: boolean) => set({ loading }),
	setRecorderStatusProgress: (value: null | IRecorderStatusProgress) =>
		set({ recorderStatusProgress: value }),
	setError: (error: string | null) => set({ error }),
	setLink: (link: string) => set({ link }),
	setAudio: (audio: null | HTMLAudioElement) => set({ audio }),
	setCurrentAudioLink: (value: string) => set({ currentAudioLink: value }),
	setRecorderStatus: (value: IRecorderStatus | null) =>
		set({ recorderStatus: value }),
	setIsRecorder: (value: boolean) => set({ isRecorder: value }),
	fetchRecorderStart: async (url: string, file_name?: string) => {
		try {
			console.log("AAAAAAAAAAAaa")
			set({ loading: true });
			const res = await fetch(
				`${API_URL_BASE}recorder/start?url=${encodeURIComponent(url)}${file_name ? '&file_name=' + file_name : ''}`,
			);
			const data: IRecorderStatus = await res.json();
			if (data.status === 'error') {
				throw JSON.stringify(data);
			}
			set({ isRecorder: true, recorderStatus: data, loading: false });
			return data;
		} catch (e) {
			const err = e as string;
			const data = JSON.parse(err) as IRecorderStatus;
			set({ isRecorder: false, recorderStatus: data, loading: false });
			throw data;
		}
	},
	fetchRecorderStop: async () => {
		try {
			set({ loading: true });
			const res = await fetch(`${API_URL_BASE}recorder/stop`);
			const data: IRecorderStatus = await res.json();
			if (data.status === 'error') {
				throw JSON.stringify(data);
			}
			set({ isRecorder: false, recorderStatus: data, loading: false });
			return data;
		} catch (e) {
			const err = e as string;
			const data = JSON.parse(err) as IRecorderStatus;
			set({ isRecorder: false, recorderStatus: data, loading: false });
			throw data;
		}
	},
	fetchRecorderStatus: async () => {
		try {
			const res = await fetch(`${API_URL_BASE}recorder/status`);
			if (!res.ok) {
				throw 'Status error';
			}
			const data: IRecorderStatusProgress = await res.json();
			set({ recorderStatusProgress: data });
			return data;
		} catch (e) {
			throw e;
		}
	},
}));
