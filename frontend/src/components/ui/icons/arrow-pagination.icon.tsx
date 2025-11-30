import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const ArrowPaginationIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="25"
				height="24"
				viewBox="0 0 25 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7.2045 2.2045C7.64384 1.76517 8.35616 1.76517 8.7955 2.2045L17.7955 11.2045C18.0065 11.4155 18.125 11.7016 18.125 12C18.125 12.2984 18.0065 12.5845 17.7955 12.7955L8.7955 21.7955C8.35616 22.2348 7.64384 22.2348 7.2045 21.7955C6.76517 21.3562 6.76517 20.6438 7.2045 20.2045L15.409 12L7.2045 3.7955C6.76517 3.35616 6.76517 2.64384 7.2045 2.2045Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
