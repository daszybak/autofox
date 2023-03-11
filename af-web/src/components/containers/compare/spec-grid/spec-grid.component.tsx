import { useStyles } from './spec-grid.styles';

interface SpecFieldProps {
	span?: number;
	className?: string;
	children: React.ReactNode;
}

export const SpecField: React.FC<SpecFieldProps> = ({ className, children }) => {
	const { classes, cx } = useStyles();
	return <div className={cx(className, classes.specField)}>{children}</div>;
};

interface SpecGrid {
	children: React.ReactNode;
}

export const SpecGrid: React.FC<SpecGrid> = ({ children }) => {
	const { classes, cx } = useStyles();

	return <div className={classes.specificationsGrid}>{children}</div>;
};

// props specgridrow
interface SpecGridRowProps {
	children: React.ReactNode;
	className?: string;
}

export const SpecGridRow: React.FC<SpecGridRowProps> = ({ children, className }) => {
	const { classes, cx } = useStyles();
	return <div className={cx(classes.specRow, className)}>{children}</div>;
};
