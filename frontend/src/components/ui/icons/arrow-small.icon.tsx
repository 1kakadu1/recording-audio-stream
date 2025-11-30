import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const ArrowSmallIcon = forwardRef(
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M6.7045 2.2045C7.14384 1.76517 7.85616 1.76517 8.2955 2.2045L17.2955 11.2045C17.5065 11.4155 17.625 11.7016 17.625 12C17.625 12.2984 17.5065 12.5845 17.2955 12.7955L8.2955 21.7955C7.85616 22.2348 7.14384 22.2348 6.7045 21.7955C6.26517 21.3562 6.26517 20.6438 6.7045 20.2045L14.909 12L6.7045 3.7955C6.26517 3.35616 6.26517 2.64384 6.7045 2.2045Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
