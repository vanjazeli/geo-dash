import { Link } from 'react-router-dom';

import { QuizQuestion } from '../../types/QuizQuestionType';

type ResultsPanelProps = {
	wrongAnswers: QuizQuestion[];
	allQuizQuestions: QuizQuestion[];
};

type GradeType = 'excellent' | 'good-enough' | 'failed';

const ResultsPanel = ({ wrongAnswers, allQuizQuestions }: ResultsPanelProps) => {
	const correctAnswers = allQuizQuestions.length - wrongAnswers.length;
	const numOfQuestions = allQuizQuestions.length;
	const correctAnswersPerc = parseFloat(((correctAnswers / numOfQuestions) * 100).toFixed(2));

	const highScoreMessages = ['You know your sh*t!', "Damn dawg! You be killin' it.", "You're on a roll!"];
	const middleScoreMessages = ['Not bad, not good.', 'OK but could be better.', "I wouldn't be too proud."];
	const lowScoreMessages = ['This must be a joke.', 'Is your name John Snow? Cause you know nothing.', 'Failed miserably!'];

	let message = null;
	let grade = null;

	if (correctAnswersPerc >= 90) {
		const randomIndex = Math.floor(Math.random() * highScoreMessages.length);
		message = highScoreMessages[randomIndex];
		grade = 'excellent';
	}
	if (correctAnswersPerc >= 80 && correctAnswersPerc < 90) {
		const randomIndex = Math.floor(Math.random() * middleScoreMessages.length);
		message = middleScoreMessages[randomIndex];
		grade = 'good-enough';
	}
	if (correctAnswersPerc < 80) {
		const randomIndex = Math.floor(Math.random() * lowScoreMessages.length);
		message = lowScoreMessages[randomIndex];
		grade = 'failed';
	}

	const gradeClassKVP: Record<string, string> = {
		excellent: 'results-panel__message--excellent',
		'good-enough': 'results-panel__message--good-enough',
		failed: 'results-panel__message--failed',
	};

	return (
		<div className="results-panel">
			<span className="results-panel__score text-middle">{`${correctAnswersPerc}% (${correctAnswers}/${numOfQuestions})`}</span>
			<span className={`results-panel__message ${gradeClassKVP[grade as GradeType]} text-small`}>{message}</span>
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
