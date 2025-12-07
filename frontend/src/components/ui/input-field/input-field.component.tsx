import { type Ref, forwardRef, useId } from 'react';
import { type IInputDefaultProps } from './input-field.model';
import cl from './input-field.module.scss';

export const InputField = forwardRef(
	(
		{
			value: valueProps,
			label,
			type = 'text',
			id,
			placeholder = '',
			onChange,
			className = '',
			error: errorProps,
			endAdornment,
			hideErrorText = false,
			variant = 'fluid',
			big = false,
			...props
		}: IInputDefaultProps,
		ref: Ref<HTMLInputElement> | undefined,
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
						{props.required && <span className={cl.required}>*</span>}
					</label>
				)}
				<div
					className={`${cl['input-form-control__wrapper-input']} ${
						errorProps ? cl.error : ''
					} ${hideErrorText ? cl.errorHide : ''}`}
				>
					<input
						{...props}
						className={
							cl['input-form-control__input'] + ' ' + (big ? cl.big : '')
						}
						onChange={onChange}
						value={valueProps}
						placeholder={placeholder}
						type={type}
						id={id_field}
						ref={ref}
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
