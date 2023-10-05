import { ReactNode } from 'react';

type PageWrapProps = {
	children: ReactNode;
};

const PageWrap = ({ children }: PageWrapProps) => {
	return (
		<div className="page-wrap">
			<div className="page-wrap__background-wrap">
				<img className="page-wrap__background" src="images/world-map.svg" alt="Background" />
			</div>
			<div className="page-wrap__wrap">{children}</div>
		</div>
	);
};

export default PageWrap;
