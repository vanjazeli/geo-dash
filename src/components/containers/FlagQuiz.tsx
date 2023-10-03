import { useEffect, useRef, useState } from 'react';
import shuffleArray from '../../services/shuffleArray';
import formatStats from '../../services/formatStats';
import capitalizeEachWord from '../../services/capitalizeEachWord';

import { Quiz } from '../../types/QuizType';
import { QuizQuestion } from '../../types/QuizQuestionType';

type FlagQuizProps = {
	sentence: string;
	quiz: Quiz;
};

const FlagQuiz = ({ sentence, quiz }: FlagQuizProps) => {
	const shuffledQuiz = useRef(shuffleArray(quiz.questions));

	const currentQuestionIndex = useRef(0);

	const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(shuffledQuiz.current[currentQuestionIndex.current]);
	const [stats, setStats] = useState(formatStats(currentQuestionIndex.current, shuffledQuiz.current.length));

	const [inputQuery, setInputQuery] = useState('');

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputQuery(capitalizeEachWord(e.target.value));
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputQuery.toLowerCase() === currentQuestion.name.toLowerCase() && currentQuestionIndex.current < shuffledQuiz.current.length - 1) {
			currentQuestionIndex.current += 1;
			setCurrentQuestion(shuffledQuiz.current[currentQuestionIndex.current]);
			setStats(formatStats(currentQuestionIndex.current, shuffledQuiz.current.length));
		} else {
			alert('done');
		}
		setInputQuery('');
	};

	const inputEl = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (inputEl.current) {
			inputEl.current.focus();
		}
	}, []);

	return (
		<div className="flag-quiz">
			<p className="flag-quiz__question text-middle">{sentence}</p>
			<div className="flag-quiz__holder">
				<div className="flag-quiz__image-wrap">
					<img className="flag-quiz__image" src={currentQuestion.flagUrl} alt="Country Flag" />
				</div>
				<div className="flag-quiz__info">
					<span className="text-middle">{quiz.name}</span>
					<span className="text-middle">{stats}</span>
				</div>
				<form className="flag-quiz__form" action="submit" onSubmit={submitHandler}>
					<input className="flag-quiz__input input-primary text-small" type="text" spellCheck="false" value={inputQuery} onChange={changeHandler} ref={inputEl} />
					<button className="flag-quiz__button cta-primary text-small hover-default">Continue</button>
				</form>
			</div>
		</div>
	);
};

export default FlagQuiz;
