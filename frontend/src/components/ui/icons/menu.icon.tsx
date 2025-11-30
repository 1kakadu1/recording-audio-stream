import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const MenuIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M3.375 7.5C3.375 6.87868 3.87868 6.375 4.5 6.375H19.5C20.1213 6.375 20.625 6.87868 20.625 7.5C20.625 8.12132 20.1213 8.625 19.5 8.625H4.5C3.87868 8.625 3.375 8.12132 3.375 7.5Z"
					fill="currentColor"
				/>
				<path
					d="M3.375 16.5C3.375 15.8787 3.87868 15.375 4.5 15.375H19.5C20.1213 15.375 20.625 15.8787 20.625 16.5C20.625 17.1213 20.1213 17.625 19.5 17.625H4.5C3.87868 17.625 3.375 17.1213 3.375 16.5Z"
					fill="currentColor"
				/>
				<path
					d="M4.5 10.875C3.87868 10.875 3.375 11.3787 3.375 12C3.375 12.6213 3.87868 13.125 4.5 13.125H19.5C20.1213 13.125 20.625 12.6213 20.625 12C20.625 11.3787 20.1213 10.875 19.5 10.875H4.5Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
