import type { ReactNode } from 'react';
import { Header } from '@/components/header';
import cl from './layout-public.module.scss';

export const LayoutPublic = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Header />
			<div className={cl.root}>
				<main>{children}</main>
			</div>
		</div>
	);
};
