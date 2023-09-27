import { RootState } from "./store/store";

import { useDispatch, useSelector } from "react-redux";
import { setLoadingOff } from "./store/slices/loadingSlice";

import Loader from "./components/ui/Loader";

function App() {
	const isLoading = useSelector((state: RootState) => state.loading.value);
	const dispatch = useDispatch();

	console.log(isLoading);

  return (
    <>
			Geo Dash
			{isLoading && <Loader/>}
    </>
  );
}

export default App;
