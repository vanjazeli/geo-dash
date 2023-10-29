import { Link } from 'react-router-dom';

import { QuizQuestion } from '../../types/QuizQuestionType';

type ResultsPanelProps = {
	wrongAnswers: QuizQuestion[];
	allQuizQuestions: QuizQuestion[];
};

const ResultsPanel = ({ wrongAnswers, allQuizQuestions }: ResultsPanelProps) => {
	const correctAnswers = allQuizQuestions.length - wrongAnswers.length;
	const numOfQuestions = allQuizQuestions.length;
	const correctAnswersPerc = parseFloat(((correctAnswers / numOfQuestions) * 100).toFixed(2));

	const highScoreMessages = ["Killin' it!", 'Daaamn dawg!', "You're on a roll!"];
	const middleScoreMessages = ['Not bad, not good.', 'Could be better.', 'Not impressed.'];
	const lowScoreMessages = ['Hella FAILED!', "I'd be ashamed!", "Failed miserably! :'("];

	let message = null;

	if (correctAnswersPerc >= 90) {
		const randomIndex = Math.floor(Math.random() * highScoreMessages.length);
		message = highScoreMessages[randomIndex];
	}
	if (correctAnswersPerc >= 80 && correctAnswersPerc < 90) {
		const randomIndex = Math.floor(Math.random() * middleScoreMessages.length);
		message = middleScoreMessages[randomIndex];
	}
	if (correctAnswersPerc < 80) {
		const randomIndex = Math.floor(Math.random() * lowScoreMessages.length);
		message = lowScoreMessages[randomIndex];
	}

	return (
		<div className="results-panel">
			<span className="results-panel__score text-middle">{`${correctAnswersPerc}% (${correctAnswers}/${numOfQuestions})`}</span>
			<span className="results-panel__message text-small">{message}</span>
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
