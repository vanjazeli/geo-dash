import { Link } from 'react-router-dom';

import { QuizQuestion } from '../../types/QuizQuestionType';

type ResultModal = {
	wrongAnswers: QuizQuestion[];
};

const ResultModal = ({ wrongAnswers }: ResultModal) => {
	return (
		<div className="result-modal">
			<div className="result-modal__holder">
				<h2 className="result-modal__heading text-middle">Learn from your mistakes.</h2>
				<ul className="result-modal__list">
					{wrongAnswers.map((wrongAnswer, wrongAnswerIndex) => (
						<li className="result-modal__item" key={wrongAnswerIndex}>
							<span className="result-modal__name text-small">{wrongAnswer.name}</span>
							<div className="result-modal__image-wrap">
								<img src={wrongAnswer.flagUrl} alt={`Flag of ${wrongAnswer.name}`} className="result-modal__image" />
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ResultModal;
