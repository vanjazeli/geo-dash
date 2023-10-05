import FlagQuiz from '../containers/FlagQuiz';

import { Quiz } from '../../types/QuizType';

type FlagQuizPageProps = {
	quiz: Quiz;
};

const FlagQuizPage = ({ quiz }: FlagQuizPageProps) => {
	return (
		<>
			<FlagQuiz sentence="Which country's flag is showing below?" quiz={quiz} />
		</>
	);
};

export default FlagQuizPage;
