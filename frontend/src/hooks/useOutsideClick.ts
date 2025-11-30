import { RefObject, useEffect, useRef } from 'react';

type Callback = (e: MouseEvent) => void;

export const useOutsideClick = <T extends HTMLElement>(
	callback: Callback,
): RefObject<T | null> => {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) callback(e);
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	}, [callback]);

	return ref;
};
