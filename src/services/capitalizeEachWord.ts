const capitalizeEachWord = (inputString: string): string => {
	return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
};

export default capitalizeEachWord;
