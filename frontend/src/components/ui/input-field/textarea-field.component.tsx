'use client';

import { type Ref, forwardRef, useId } from 'react';
import { type ITextAreaProps } from './input-field.model';
import cl from './input-field.module.scss';

export const TextAreaField = forwardRef(
	(
		{
			value: valueProps,
			label,
			id,
			placeholder = '',
			onChange,
			className = '',
			error: errorProps,
			endAdornment,
			variant = 'fluid',
			hideErrorText = false,
			big = false,
			...props
		}: ITextAreaProps,
		ref: Ref<HTMLTextAreaElement> | undefined,
	) => {
		const id_field = id ? id : useId();

		return (
			<div
				className={
					cl['input-form-control'] + ' ' + cl[variant] + ' ' + className
				}
				data-testid="input"
			>
				{label && (
					<label
						className={cl['input-form-control__label']}
						htmlFor={id}
					>
						{label}
					</label>
				)}
				<div
					className={`${cl['input-form-control__wrapper-input']} ${
						errorProps ? cl.error : ''
					} ${hideErrorText ? cl.errorHide : ''}`}
				>
					<textarea
						className={
							cl['input-form-control__textarea'] + ' ' + (big ? cl.big : '')
						}
						onChange={onChange}
						value={valueProps}
						placeholder={placeholder}
						id={id_field}
						ref={ref}
						{...props}
					/>
					{endAdornment && (
						<div
							className={
								cl['input-form-control-adornment'] +
								' ' +
								cl['input-form-control-adornment__end']
							}
						>
							{endAdornment}
						</div>
					)}
				</div>
				{!hideErrorText && (
					<div
						className={`${cl['input-form-control__error']} ${errorProps ? cl.error : ''}`}
					>
						{errorProps}
					</div>
				)}
			</div>
		);
	},
);
