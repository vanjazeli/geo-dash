import { Link } from 'react-router-dom';

import { QuizType } from '../../types/QuizType';
import { FunFactType } from '../../types/FunFactType';

type MenuPropsType = {
	heading: string;
	funFact?: FunFactType | null;
	items: QuizType[] | null;
};

const Menu = ({ heading, funFact, items }: MenuPropsType) => {
	return (
		<div className="menu">
			<h1 className="menu__heading">{heading}</h1>
			{funFact && (
				<div className="menu__fact">
					<span className="menu__fact-heading">Fun fact about {funFact.country}:</span>
					<span className="menu__fact-description">{funFact.fact}</span>
				</div>
			)}
			<ul className="menu__list">
				{items?.map((item, itemIndex) => (
					<li className="menu__item" key={itemIndex}>
						<Link className="menu__link hover-default" to={`/${item.flagUrl}`}>
							{item.name}
						</Link>
					</li>
				))}
				{!items && <span className="menu__message">No quizes are currently available.</span>}
			</ul>
		</div>
	);
};

export default Menu;
