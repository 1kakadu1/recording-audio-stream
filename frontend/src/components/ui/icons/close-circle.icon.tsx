import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const CloseCircleIcon = forwardRef(
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
				<circle
					cx="12"
					cy="12"
					r="12"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.4419 6.55806C17.686 6.80214 17.686 7.19786 17.4419 7.44194L12.8839 12L17.4419 16.5581C17.686 16.8021 17.686 17.1979 17.4419 17.4419C17.1979 17.686 16.8021 17.686 16.558 17.4419L12 12.8839L7.44194 17.4419C7.19786 17.686 6.80214 17.686 6.55806 17.4419C6.31398 17.1979 6.31398 16.8021 6.55806 16.558L11.1161 12L6.55806 7.44195C6.31398 7.19788 6.31398 6.80215 6.55806 6.55807C6.80214 6.31399 7.19787 6.31399 7.44194 6.55807L12 11.1161L16.558 6.55806C16.8021 6.31398 17.1979 6.31398 17.4419 6.55806Z"
					fill="#fff"
				/>
			</svg>
		);
	},
);
