import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const ArrowBackIcon = forwardRef(
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
					d="M11.7803 5.78033C12.0732 5.48744 12.0732 5.01256 11.7803 4.71967C11.4874 4.42678 11.0126 4.42678 10.7197 4.71967L3.96967 11.4697C3.67678 11.7626 3.67678 12.2374 3.96967 12.5303L10.7197 19.2803C11.0126 19.5732 11.4874 19.5732 11.7803 19.2803C12.0732 18.9874 12.0732 18.5126 11.7803 18.2197L6.31066 12.75L19.5 12.75C19.9142 12.75 20.25 12.4142 20.25 12C20.25 11.5858 19.9142 11.25 19.5 11.25L6.31066 11.25L11.7803 5.78033Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
