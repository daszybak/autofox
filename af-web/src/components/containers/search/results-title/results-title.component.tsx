import { Title } from '@mantine/core';
import { useStyles } from './results-title.styles';

interface ResultsTitleProps {}

const ResultsTitle: React.FC<ResultsTitleProps> = ({}) => {
	const { classes } = useStyles();

	return (
		<div className={classes.titleContainer}>
			<Title className={classes.title} order={1}>
				BEST CHOICE
			</Title>
		</div>
	);
};

export default ResultsTitle;
