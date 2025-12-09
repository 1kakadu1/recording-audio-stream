import { Link, useLocation } from 'react-router-dom';
import cl from './header.module.scss';
import { useAudioStore } from '@/stores/audio.store';

export const Header = () => {
	const { pathname } = useLocation();
	const { isRecorder } = useAudioStore();
	return (
		<header className={cl.header}>
			<div className="container">
				<nav className={cl.nav}>
					<Link
						to="/"
						className={pathname === '/' ? cl.active : ''}
					>
						Record
						{isRecorder && <span className={cl.recorder}></span>}
					</Link>
					<Link
						to="/about"
						
					>
						About
					</Link>
				</nav>
			</div>
		</header>
	);
};
