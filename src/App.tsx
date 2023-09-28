import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setLoadingOff } from "./store/slices/loadingSlice";

import Loader from "./components/ui/Loader";

import fetchData from "./services/fetchData";

import { Quiz } from "./types/QuizType";
import { RootState } from "./store/store";

function App() {
	const isLoading = useSelector((state: RootState) => state.loading.value);
	const dispatch = useDispatch();

	const [quizes, setQuizes] = useState<Quiz[] | null>(null);

	useEffect(() => {
		fetchData('http://localhost:8001/quizes', (data) => {
			setQuizes(data);
			dispatch(setLoadingOff());
		})
	}, []);

  return (
    <>
			Geo Dash
			{isLoading && <Loader/>}
    </>
  );
}

export default App;
