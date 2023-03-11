import ActiveFilters from '../active-filter.component';
import { useStyles } from './active-filter-grid.styles';

interface ActiveFilterGridProps {}

const ActiveFilterGrid: React.FC<ActiveFilterGridProps> = ({}) => {
	const { classes } = useStyles();

	return <ActiveFilters className={classes.activeFilterGrid} />;
};

export default ActiveFilterGrid;
