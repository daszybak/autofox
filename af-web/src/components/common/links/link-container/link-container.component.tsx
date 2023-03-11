import { useStyles } from '../links.styles';

interface LinkContainerProps {
	children: React.ReactNode;
}

const LinkContainer: React.FC<LinkContainerProps> = ({ children }) => {
	const { classes } = useStyles();
	return <div>{children}</div>;
};

export default LinkContainer;
