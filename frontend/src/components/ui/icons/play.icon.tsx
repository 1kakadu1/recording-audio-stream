import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const PlayIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="15"
				height="18"
				viewBox="0 0 15 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M15 9L-8.15666e-07 17.6603L-5.85621e-08 0.339745L15 9Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
