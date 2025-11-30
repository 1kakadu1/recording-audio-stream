import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cl from './icon-action.module.scss';

export const IconAction = ({
	onClick,
	href,
	icon,
	label,
	active = false,
	badge,
	className = '',
}: {
	onClick?: () => void;
	href?: string;
	icon: ReactNode;
	label: string;
	active?: boolean;
	badge?: number;
	className?: string;
}) => {
	if (href) {
		return (
			<Link
				to={href}
				className={
					cl.action + ' ' + className + ' ' + (active ? cl.active : '')
				}
			>
				{icon}
				{badge && badge > 0 ? <span className={cl.badge}>{badge}</span> : null}
				<span className={cl.label}>{label}</span>
			</Link>
		);
	}

	return (
		<button
			type="button"
			onClick={onClick}
			className={cl.action + ' ' + className + ' ' + (active ? cl.active : '')}
		>
			{icon}
			{badge && badge > 0 && <span className={cl.badge}>{badge}</span>}
			<span className={cl.label}>{label}</span>
		</button>
	);
};
