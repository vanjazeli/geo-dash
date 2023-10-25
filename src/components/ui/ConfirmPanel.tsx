type ConfirmPanelProps = {
	message: string;
	yesHandler: () => void;
	noHandler: () => void;
};

const ConfirmPanel = ({ message, yesHandler, noHandler }: ConfirmPanelProps) => {
	return (
		<div className="confirm-panel">
			<div className="confirm-panel__top">
				<span className="confirm-panel__message text-middle">{message}</span>
			</div>
			<div className="confirm-panel__bottom">
				<button className="confirm-panel__button cta-primary cta-primary--inverse text-middle" onClick={yesHandler}>
					Yes
				</button>
				<button className="confirm-panel__button cta-primary cta-primary--inverse text-middle" onClick={noHandler}>
					No
				</button>
			</div>
		</div>
	);
};

export default ConfirmPanel;
