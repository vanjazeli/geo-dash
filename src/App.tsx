import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingOff } from './store/slices/loadingSlice';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/ui/Loader';
import IndexPage from './components/pages/IndexPage';

import fetchData from './services/fetchData';

import { QuizType } from './types/QuizType';
import { RootState } from './store/store';

function App() {
	const isLoading = useSelector((state: RootState) => state.loading.value);
	const dispatch = useDispatch();

	const [quizes, setQuizes] = useState<QuizType[] | null>(null);

	useEffect(() => {
		fetchData('http://localhost:8001/quizes', (data) => {
			setQuizes(data);
			dispatch(setLoadingOff());
		});
	}, []);

	return (
		<>
			{isLoading && <Loader />}
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<IndexPage quizes={quizes} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
