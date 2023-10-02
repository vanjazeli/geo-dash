import { useEffect, useState } from 'react';
import fetchData from '../../services/fetchData';

import Menu from '../containers/Menu';

import { FunFactType } from '../../types/FunFactType';
import { Quiz } from '../../types/QuizType';

type IndexPageProps = {
	quizes: Quiz[] | null;
};

const IndexPage = ({ quizes }: IndexPageProps) => {
	const [funFact, setFunFact] = useState<FunFactType | null>(null);

	useEffect(() => {
		fetchData('http://localhost:8001/funFacts', (data) => {
			const randomIndex = Math.floor(Math.random() * data.length);
			setFunFact(data[randomIndex]);
		});
	}, []);

	return (
		<>
			<div className="page-wrap">
				<div className="page-wrap__background-wrap">
					<img className="page-wrap__background" src="images/world-map.svg" alt="background" />
				</div>
				<div className="page-wrap__wrap">
					<Menu heading="Geo Dash" funFact={funFact} items={quizes} />
				</div>
			</div>
		</>
	);
};

export default IndexPage;
