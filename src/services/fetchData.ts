import axios from 'axios';

import type { AxiosResponse } from 'axios';

type FetchDataCallback = (data: any) => void;

const fetchData = (url: string, callback: FetchDataCallback): void => {
	axios
		.get(url)
		.then((response: AxiosResponse) => {
			callback(response.data);
		})
		.catch((error) => {
			console.error('Fetching error:', error);
		});
};

export default fetchData;
