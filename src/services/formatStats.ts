const formatStats = (currentIndex: number, numberOfQuestions: number) => {
	const numberOfQuestionsStr = numberOfQuestions.toString();
	const numberOfZeros = Math.max(0, numberOfQuestionsStr.length - 1);
	const currentIndexStr = (currentIndex + 1).toString().padStart(1 + numberOfZeros, '0');

	return `${currentIndexStr} / ${numberOfQuestions}`;
};

export default formatStats;
