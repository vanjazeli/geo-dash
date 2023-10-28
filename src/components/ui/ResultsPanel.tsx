import { Link } from 'react-router-dom';

import { QuizQuestion } from '../../types/QuizQuestionType';

type ResultsPanelProps = {
	wrongAnswers: QuizQuestion[];
};

const ResultsPanel = ({ wrongAnswers }: ResultsPanelProps) => {
	return (
		<div className="results-panel">
			<h2 className="results-panel__heading text-middle">Wrong Answers</h2>
			<div className="results-panel__list">
				{wrongAnswers.map((wrongAnswer, wrongAnswerIndex) => (
					<div className="results-panel__item" key={wrongAnswerIndex}>
						<span className="results-panel__name text-small">{`${wrongAnswerIndex + 1}. ${wrongAnswer.name}`}</span>
						<div className="results-panel__image-wrap">
							<img className="results-panel__image" src={wrongAnswer.flagUrl} alt={wrongAnswer.name} />
						</div>
					</div>
				))}
			</div>
			<Link className="results-panel__button text-middle cta-primary cta-primary--inverse hover-default" to="/">
				Menu
			</Link>
		</div>
	);
};

export default ResultsPanel;
