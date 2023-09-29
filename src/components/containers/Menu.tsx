import { Link } from 'react-router-dom';

import { QuizType } from '../../types/QuizType';

type MenuPropsType = {
	heading: string;
	items: QuizType[] | null;
};

const Menu = ({ heading, items }: MenuPropsType) => {
	return (
		<div className="menu">
			<h1 className="menu__heading">{heading}</h1>
			<ul className="menu__list">
				{items?.map((item, itemIndex) => (
					<li className="menu__item" key={itemIndex}>
						<Link className="menu__link" to={`/${item.flagUrl}`}>
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
