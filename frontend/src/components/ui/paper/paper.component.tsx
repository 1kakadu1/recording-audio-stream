import { IPaperProps } from './paper.model';
import cl from './paper.module.scss';

export const Paper = ({
	className = '',
	variant,
	pd,
	children,
	hover,
	radiusNull = false,
}: IPaperProps) => {
	return (
		<div
			className={`${cl.paper} ${variant ? cl[variant] : ''} ${pd ? cl['pd' + pd] : ''} ${hover ? cl.hover : ''} ${radiusNull ? '' : cl.radius} ${className}`}
		>
			{hover ? <div className={cl.hover__content}>{children}</div> : children}
		</div>
	);
};
