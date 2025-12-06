import { forwardRef, type ForwardedRef } from 'react';
import type { ISvgIconProps } from '.';

export const InfoIcon = forwardRef(
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
					d="M12 18C12.4142 18 12.75 17.6642 12.75 17.25V9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75V17.25C11.25 17.6642 11.5858 18 12 18Z"
					fill="currentColor"
				/>
				<path
					d="M12 6C12.4142 6 12.75 6.33579 12.75 6.75C12.75 7.16421 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6Z"
					fill="currentColor"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11.25 1.5C5.86522 1.5 1.5 5.86522 1.5 11.25V12.75C1.5 18.1348 5.86522 22.5 11.25 22.5H12.75C18.1348 22.5 22.5 18.1348 22.5 12.75V11.25C22.5 5.86522 18.1348 1.5 12.75 1.5H11.25ZM12.75 3H11.25C6.69365 3 3 6.69365 3 11.25V12.75C3 17.3063 6.69365 21 11.25 21H12.75C17.3063 21 21 17.3063 21 12.75V11.25C21 6.69365 17.3063 3 12.75 3Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
