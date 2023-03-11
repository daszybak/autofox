import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useStyles, DURATION } from './expandable-div.styles';

interface Props {
	children: React.ReactNode;
	in: boolean;
	className?: string;
}

const ExpandableDiv: React.FC<Props> = ({ children, in: inProp, className }) => {
	const { classes } = useStyles();
	const nodeRef = useRef(null);

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={inProp}
			timeout={DURATION}
			classNames={{
				enter: classes.enter,
				enterActive: classes.enterActive,
				exit: classes.exit,
				exitActive: classes.exitActive,
			}}
			unmountOnExit
		>
			<div ref={nodeRef} className={className}>
				{children}
			</div>
		</CSSTransition>
	);
};
export default ExpandableDiv;
