'use client';

import { useEffect, useState } from 'react';

export function useWindowSize(
	mobileSize: number = 1280,
	defaultSize?: { width?: number; height?: number },
) {
	const [windowSize, setWindowSize] = useState<{
		width?: number;
		height?: number;
	}>(
		defaultSize
			? defaultSize
			: {
					width: undefined,
					height: undefined,
				},
	);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
			setIsMobile(window.innerWidth < mobileSize);
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return {
		...windowSize,
		isMobile,
	};
}
