import { QuizType } from '../../types/QuizType';

type FlagQuizProps = {
	quiz: QuizType;
};

const FlagQuiz = ({ quiz }: FlagQuizProps) => {
	return (
		<div className="flag-quiz">
			<h2 className="flag-quiz__quiz-name text-large">Flags of {quiz.name}</h2>
			<div className="flag-quiz__holder">
				<div className="flag-quiz__image-wrap">
					<img className="flag-quiz__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1920px-Flag_of_Serbia.svg.png" alt="Country Flag" />
				</div>
				<div className="flag-quiz__form">
					<input className="flag-quiz__input form-primary" type="text" />
					<button className="flag-quiz__button cta-primary" type="button">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default FlagQuiz;
