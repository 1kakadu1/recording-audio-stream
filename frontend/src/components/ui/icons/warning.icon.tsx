import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const WarningIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref={ref}
				{...props}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M1.25 9.375C1.25 4.88769 4.88769 1.25 9.375 1.25H10.625C15.1123 1.25 18.75 4.88769 18.75 9.375V10.625C18.75 15.1123 15.1123 18.75 10.625 18.75H9.375C4.88769 18.75 1.25 15.1123 1.25 10.625V9.375ZM10 5C10.3452 5 10.625 5.27982 10.625 5.625V11.875C10.625 12.2202 10.3452 12.5 10 12.5C9.65482 12.5 9.375 12.2202 9.375 11.875V5.625C9.375 5.27982 9.65482 5 10 5ZM10 15C10.3452 15 10.625 14.7202 10.625 14.375C10.625 14.0298 10.3452 13.75 10 13.75C9.65482 13.75 9.375 14.0298 9.375 14.375C9.375 14.7202 9.65482 15 10 15Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
