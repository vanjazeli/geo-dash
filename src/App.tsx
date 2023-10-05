import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrap from './components/ui/PageWrap';
import IndexPage from './components/pages/IndexPage';
import FlagQuiz from './components/containers/FlagQuiz';

import fetchData from './services/fetchData';

import { Quiz } from './types/QuizType';

function App() {
	const [quizes, setQuizes] = useState<Quiz[] | null>(null);

	useEffect(() => {
		fetchData('http://localhost:8001/quizes', (data) => {
			setQuizes(data);
		});
	}, []);

	return (
		<PageWrap>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<IndexPage quizes={quizes} />} />
					{quizes?.map((quiz, quizIndex) => (
						<Route path={`/${quiz.name}`} element={<FlagQuiz sentence="Which country's flag is showing below?" quiz={quiz} />} key={quizIndex} />
					))}
				</Routes>
			</BrowserRouter>
		</PageWrap>
	);
}

export default App;
