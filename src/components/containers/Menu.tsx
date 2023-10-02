import { Link } from 'react-router-dom';

import { Quiz } from '../../types/QuizType';
import { FunFactType } from '../../types/FunFactType';

type MenuPropsType = {
	heading: string;
	funFact?: FunFactType | null;
	items: Quiz[] | null;
};

const Menu = ({ heading, funFact, items }: MenuPropsType) => {
	return (
		<div className="menu">
			{heading && <h1 className="menu__heading text-large">{heading}</h1>}
			{funFact && (
				<div className="menu__fact">
					<span className="menu__fact-heading text-middle">Fun fact about {funFact.country}:</span>
					<span className="menu__fact-description text-small">{funFact.fact}</span>
				</div>
			)}
			{items && (
				<>
					<h3 className="menu__subheading text-middle">Quiz list:</h3>
					<ul className="menu__list">
						{items?.map((item, itemIndex) => (
							<li className="menu__item" key={itemIndex}>
								<Link className="cta-primary text-small hover-default" to={`/${item.name.toLowerCase()}`}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default Menu;
