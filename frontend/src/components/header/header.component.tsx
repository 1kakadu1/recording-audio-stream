import { Link, useLocation } from 'react-router-dom';
import cl from './header.module.scss';

export const Header = () => {
	const { pathname } = useLocation();
	return (
		<header className={cl.header}>
			<div className="container">
				<nav className={cl.nav}>
					<Link
						to="/"
						className={pathname === '/' ? cl.active : ''}
					>
						Запись
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
