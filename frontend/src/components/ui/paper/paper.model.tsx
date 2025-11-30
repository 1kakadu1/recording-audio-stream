import { ReactNode } from 'react';

export interface IPaperProps {
	className?: string;
	variant?: 'primary' | 'secondary' | 'dark' | 'background';
	pd?: 8 | 16 | 32 | 24 | '32_24' | '24_m_24_16';
	children?: ReactNode;
	hover?: boolean;
	radiusNull?: boolean;
}
