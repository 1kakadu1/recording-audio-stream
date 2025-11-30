import { ForwardedRef, forwardRef } from 'react';
import { ISvgIconProps } from '.';

export const DotsIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				ref={ref}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<circle
					cx="10"
					cy="3"
					r="2"
					fill="currentColor"
				/>
				<circle
					cx="10"
					cy="11"
					r="2"
					fill="currentColor"
				/>
				<circle
					cx="10"
					cy="19"
					r="2"
					fill="currentColor"
				/>
			</svg>
		);
	},
);

export const DotsHorizontalIcon = forwardRef(
	(props: ISvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
		return (
			<svg
				width="20"
				ref={ref}
				height="21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<circle
					cx="18"
					cy="10.5"
					r="2"
					transform="rotate(90 18 10.5)"
					fill="#EBE9F0"
					fillOpacity="0.2"
				/>
				<circle
					cx="10"
					cy="10.5"
					r="2"
					transform="rotate(90 10 10.5)"
					fill="#EBE9F0"
					fillOpacity="0.2"
				/>
				<circle
					cx="2"
					cy="10.5"
					r="2"
					transform="rotate(90 2 10.5)"
					fill="#EBE9F0"
					fillOpacity="0.2"
				/>
			</svg>
		);
	},
);
