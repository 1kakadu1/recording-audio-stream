import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const LikeIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="14"
				height="12"
				viewBox="0 0 14 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					d="M8.0979 0C9.38422 0 10.1855 1.39574 9.53735 2.50684L8.66626 4H11.9583C12.8255 4 13.4623 4.81487 13.2522 5.65625L12.1711 9.98047C11.8742 11.1674 10.8077 12 9.58423 12H7.47388C6.94741 12 6.43243 11.8438 5.99438 11.5518L4.96313 10.8643C4.77783 10.7406 4.66626 10.5324 4.66626 10.3096V4.84375C4.66626 4.72773 4.69659 4.61343 4.75415 4.5127L7.33325 0H8.0979ZM2.33325 4C3.06952 4 3.66608 4.59678 3.66626 5.33301V10C3.66626 10.7364 3.06963 11.333 2.33325 11.333H1.66626C0.930067 11.3328 0.333252 10.7362 0.333252 10V5.33301C0.333428 4.59691 0.930176 4.00022 1.66626 4H2.33325Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
