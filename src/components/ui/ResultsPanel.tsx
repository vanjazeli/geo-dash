import { QuizQuestion } from '../../types/QuizQuestionType';

type ResultsPanelProps = {
	wrongAnswers: QuizQuestion[];
};

const ResultsPanel = ({ wrongAnswers }: ResultsPanelProps) => {
	return <div className="results-panel">Results Panel</div>;
};

export default ResultsPanel;
