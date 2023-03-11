import { Progress, ProgressProps } from '@mantine/core';
import { useEffect, useState } from 'react';

interface DebounceProgressBarProps extends ProgressProps {
	timer: number;
}

const DebounceProgressBar: React.FC<DebounceProgressBarProps> = ({ timer, ...other }) => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setProgress((prev) => {
				return prev + 1;
			});
		}, timer / 200);

		return () => clearInterval(intervalId);
	}, [timer]);

	return <Progress value={progress} {...other} />;
};

export default DebounceProgressBar;
