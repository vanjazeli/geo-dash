import FlagQuiz from '../containers/FlagQuiz';

import { Quiz } from '../../types/QuizType';

type FlagQuizPageProps = {
	quiz: Quiz;
};

const FlagQuizPage = ({ quiz }: FlagQuizPageProps) => {
	return (
		<>
			<div className="page-wrap">
				<div className="page-wrap__background-wrap">
					<img className="page-wrap__background" src="images/world-map.svg" alt="background" />
				</div>
				<div className="page-wrap__wrap">
					<FlagQuiz sentence="Which country's flag is showing below?" quiz={quiz} />
				</div>
			</div>
		</>
	);
};

export default FlagQuizPage;
