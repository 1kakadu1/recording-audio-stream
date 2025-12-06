import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const ArrowCatalogSubIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M4 20.5V4.5"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M20 12.5H10M20 12.5L15.5 17M20 12.5L15.5 8"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	},
);
