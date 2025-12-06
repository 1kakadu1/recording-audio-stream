'use client';

import { useEffect, useId, useRef } from 'react';
import { type IModalProps } from './modal.model';
import { CloseIcon } from '../icons';
import { PortalWrapper } from '../portal-wrapper/portal-wrapper.container';
import cl from './modal.module.scss';

const Modal = ({
	children,
	open,
	onClose,
	align = 'center',
	animate = 'left',
	justify = 'center',
	classes,
	wrapperId,
	portal = true,
	closeIcon,
}: IModalProps) => {
	const bodyRef = useRef<HTMLElement | null>(undefined);
	const modalId = useId();

	useEffect(() => {
		if (bodyRef.current) {
			bodyRef.current.style.overflow = open ? 'hidden' : '';
		}
	}, [open]);

	useEffect(() => {
		bodyRef.current = document.querySelector('body');
		return () => {
			if (bodyRef.current) bodyRef.current.style.overflow = '';
		};
	}, []);

	const content = () => (
		<div
			className={`${cl['modal']} ${cl[`modal_${align}`]} ${cl[`modal_justify-${justify}`]} ${
				classes?.root || ''
			} ${cl[`modal_${open ? 'active' : 'unactive'}`]} ${portal ? '' : cl.portal}`}
		>
			<div
				className={`${cl[`modal-overlay`]} ${classes?.overlay || ''}`}
				onClick={onClose}
			></div>
			<div
				className={`${cl[`modal-content`]} ${
					classes?.content || ''
				} ${cl[`modal-content__animate-${animate}`]}`}
			>
				<div
					className={`${cl[`modal-close`]} ${classes?.closeWrapper || ''}`}
					onClick={onClose}
				>
					{closeIcon || <CloseIcon />}
				</div>
				{children}
			</div>
		</div>
	);
	return portal ? (
		<PortalWrapper wrapperId={wrapperId || modalId}>{content()}</PortalWrapper>
	) : (
		content()
	);
};

export default Modal;
