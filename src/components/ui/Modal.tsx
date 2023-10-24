import { ReactNode } from 'react';

type ModalProps = {
	children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
	return (
		<div className="modal">
			<div className="modal__wrap wrap">{children}</div>
		</div>
	);
};

export default Modal;
