import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const StarSecondIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="17"
				height="16"
				viewBox="0 0 17 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M8.6665 0L11.0176 4.76393L16.275 5.52786L12.4707 9.23607L13.3688 14.4721L8.6665 12L3.96422 14.4721L4.86228 9.23607L1.05805 5.52786L6.31536 4.76393L8.6665 0Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
