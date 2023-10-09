import { useEffect, useRef, useState } from 'react';
import shuffleArray from '../../services/shuffleArray';
import formatStats from '../../services/formatStats';
import capitalizeEachWord from '../../services/capitalizeEachWord';

import ResultModal from './ResultModal';
import { Link, useNavigate } from 'react-router-dom';

import { Quiz } from '../../types/QuizType';
import { QuizQuestion } from '../../types/QuizQuestionType';

type FlagQuizProps = {
	sentence: string;
	quiz: Quiz;
};

const FlagQuiz = ({ sentence, quiz }: FlagQuizProps) => {
	const navigate = useNavigate();

	const shuffledQuiz = useRef(shuffleArray(quiz.questions));

	const currentQuestionIndex = useRef(42);
	const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(shuffledQuiz.current[currentQuestionIndex.current]);
	const [stats, setStats] = useState(formatStats(currentQuestionIndex.current, shuffledQuiz.current.length));
	const [inputQuery, setInputQuery] = useState('');
	const wrongAnswers = useRef<QuizQuestion[]>([
		{
			name: 'Monaco',
			flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1280px-Flag_of_Monaco.svg.png',
		},
		{
			name: 'Montenegro',
			flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/1920px-Flag_of_Montenegro.svg.png',
		},
		{
			name: 'Netherlands',
			flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1920px-Flag_of_the_Netherlands.svg.png',
		},
	]);

	const [showResults, setShowResults] = useState(false);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputQuery(capitalizeEachWord(e.target.value));
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputQuery.toLowerCase() === currentQuestion.name.toLowerCase() && currentQuestionIndex.current < shuffledQuiz.current.length + 1) {
			currentQuestionIndex.current += 1;
			setCurrentQuestion(shuffledQuiz.current[currentQuestionIndex.current]);
			setStats(formatStats(currentQuestionIndex.current, shuffledQuiz.current.length));
		}
		if (inputQuery.toLowerCase() !== currentQuestion.name.toLocaleLowerCase()) {
			wrongAnswers.current.push(currentQuestion);
			console.log(wrongAnswers);
			currentQuestionIndex.current += 1;
			setCurrentQuestion(shuffledQuiz.current[currentQuestionIndex.current]);
			setStats(formatStats(currentQuestionIndex.current, shuffledQuiz.current.length));
		}
		if (currentQuestionIndex.current === shuffledQuiz.current.length) {
			alert('No more questions!');
			navigate('/');
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
				<Link className="flag-quiz__return cta-secondary text-small hover-default" to="/">
					Return to Menu
				</Link>
			</div>
			{/* <ResultModal wrongAnswers={wrongAnswers.current} /> */}
		</div>
	);
};

export default FlagQuiz;
