import { LayoutPublic } from '@/components/layout-public';
import { useAudioStore } from '@/stores/audio.store';

export const AboutPage = () => {
	const { link, audio } = useAudioStore();
	console.log(audio);
	return (
		<LayoutPublic>
			<h1>AboutPage: {link}</h1>
		</LayoutPublic>
	);
};
