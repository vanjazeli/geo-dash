import FlagQuiz from '../containers/FlagQuiz';

import { QuizType } from '../../types/QuizType';

type FlagQuizPageProps = {
	quiz: QuizType;
};

const FlagQuizPage = ({ quiz }: FlagQuizPageProps) => {
	return (
		<>
			<div className="page-wrap">
				<div className="page-wrap__background-wrap">
					<img className="page-wrap__background" src="images/world-map.svg" alt="background" />
				</div>
				<div className="page-wrap__wrap">
					<FlagQuiz quiz={quiz} />
				</div>
			</div>
		</>
	);
};

export default FlagQuizPage;
