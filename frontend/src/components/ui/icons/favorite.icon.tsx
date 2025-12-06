import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const FavoriteIcon = forwardRef(
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
					d="M20.3715 4.61698C22.8762 7.13227 22.8762 11.2104 20.3715 13.7257L19.8925 14.2067C19.8543 14.2562 19.8126 14.3038 19.7674 14.3492C18.0168 16.1073 16.2619 17.8612 14.5088 19.6168C13.3345 20.7928 11.428 20.7927 10.2554 19.6151L5.01186 14.3492C4.96678 14.3039 4.92519 14.2565 4.8871 14.2072L4.62847 13.9474C2.12384 11.4321 2.12384 7.35403 4.62847 4.83874C6.70118 2.75719 10.0173 2.68534 12.1758 4.62317C12.2967 4.73172 12.4826 4.73212 12.5972 4.61698C14.744 2.46101 18.2247 2.46101 20.3715 4.61698Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
