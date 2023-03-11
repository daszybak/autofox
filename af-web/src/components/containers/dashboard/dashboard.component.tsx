import { useStyles } from './dashboard.styles';
import Sidebar from './sidebar/sidebar.component';

interface Props {
	children: React.ReactNode;
}

const Dashboard: React.FC<Props> = ({ children }) => {
	const { classes } = useStyles();

	return (
		<div className={classes.dashboardContainer}>
			<Sidebar className={classes.gridCol1} />
			<div className={classes.gridCol2}>
				<div className={classes.contentBackgroundColor}>
					<div className={classes.contentContainer}>{children}</div>
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
