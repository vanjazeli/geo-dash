import { Link } from 'react-router-dom';
import Menu from '../containers/Menu';

import { QuizType } from '../../types/QuizType';

type IndexPageProps = {
	quizes: QuizType[] | null;
};

const IndexPage = ({ quizes }: IndexPageProps) => {
	return (
		<>
			<div className="wrap">
				<Menu heading="Quiz Name" items={quizes} />
			</div>
		</>
	);
};

export default IndexPage;
