import { useEffect, useRef } from 'react';

import { QuizType } from '../../types/QuizQuestionType';
import shuffleArray from '../../services/shuffleArray';

type FlagQuizProps = {
	quiz: QuizType;
};

const FlagQuiz = ({ quiz }: FlagQuizProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		(inputRef.current as HTMLInputElement).focus();
	}, []);

	const stats = `02/23`;

	return (
		<div className="flag-quiz">
			<p className="flag-quiz__question text-middle">Which country's flag is showing below?</p>
			<div className="flag-quiz__holder">
				<div className="flag-quiz__image-wrap">
					<img className="flag-quiz__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1920px-Flag_of_Serbia.svg.png" alt="Country Flag" />
				</div>
				<div className="flag-quiz__info">
					<span className="text-middle">{quiz.name}</span>
					<span className="text-middle">{stats}</span>
				</div>
				<div className="flag-quiz__form">
					<input className="flag-quiz__input input-primary text-small" type="text" ref={inputRef} spellCheck="false" />
					<button className="flag-quiz__button cta-primary text-small hover-default" type="button">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default FlagQuiz;
