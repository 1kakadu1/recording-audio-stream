import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const UserIcon = forwardRef(
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
					d="M12.0002 1.5C9.10075 1.5 6.75024 3.85051 6.75024 6.75V7.5C6.75024 10.3995 9.10075 12.75 12.0002 12.75C14.8997 12.75 17.2502 10.3995 17.2502 7.5V6.75C17.2502 3.85051 14.8997 1.5 12.0002 1.5Z"
					fill="currentColor"
				/>
				<path
					d="M5.60731 14.25C4.21722 14.25 3.0153 15.2194 2.72094 16.578L2.56551 17.2953C2.37887 18.1568 2.78477 19.0378 3.56084 19.4557C8.82954 22.2927 15.1711 22.2927 20.4398 19.4557C21.2159 19.0378 21.6218 18.1568 21.4352 17.2953L21.2797 16.578C20.9854 15.2194 19.7835 14.25 18.3934 14.25H5.60731Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
