import type { JSX } from 'react';

export interface IInputDefaultProps extends React.InputHTMLAttributes<HTMLInputElement> {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	id?: string;
	type?: string;
	label?: string;
	className?: string;
	error?: string;
	endAdornment?: JSX.Element;
	hideErrorText?: boolean;
	variant?: 'fluid' | 'outline' | 'outline-gray';
	big?: boolean;
}

export interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value?: any;
	id?: string;
	label?: string;
	className?: string;
	error?: string | null;
	endAdornment?: JSX.Element;
	hideErrorText?: boolean;
	variant?: 'fluid' | 'outline' | 'outline-gray';
	big?: boolean;
}
