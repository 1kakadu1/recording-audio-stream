import { type ForwardedRef, forwardRef } from 'react';
import type { ISvgIconProps } from '.';

export const SearchIcon = forwardRef(
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
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2.25 11.25C2.25 16.2206 6.27944 20.25 11.25 20.25C13.2762 20.25 15.146 19.5804 16.6502 18.4505C16.6712 18.4783 16.6943 18.505 16.7197 18.5303L18.9697 20.7803C19.2626 21.0732 19.7374 21.0732 20.0303 20.7803C20.3232 20.4874 20.3232 20.0126 20.0303 19.7197L17.7803 17.4697C17.776 17.4654 17.7717 17.4611 17.7673 17.4569C19.3056 15.8421 20.25 13.6563 20.25 11.25C20.25 6.27944 16.2206 2.25 11.25 2.25C6.27944 2.25 2.25 6.27944 2.25 11.25ZM3.75 11.25C3.75 15.3921 7.10786 18.75 11.25 18.75C15.3921 18.75 18.75 15.3921 18.75 11.25C18.75 7.10786 15.3921 3.75 11.25 3.75C7.10786 3.75 3.75 7.10786 3.75 11.25Z"
					fill="currentColor"
				/>
			</svg>
		);
	},
);
