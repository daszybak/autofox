import React from 'react';
import { Ad } from 'af-shared/lib/graphql/generated/generated';
import useStyles from './ads-types.style';

interface AdsTypesProps {
	adsList: Ad[];
	setWhereQuery(data: any): any;
}

const AdsTypesView: React.FC<AdsTypesProps> = ({ adsList, setWhereQuery }) => {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.mainBox}>
			<div
				className={cx(classes.countAdBox, classes.activeBox)}
				onClick={() => {
					setWhereQuery({});
				}}
			>
				<p>All ads</p>
				<span>{adsList.length}</span>
			</div>
			<div className={classes.countAdBox}>
				<p>Active ads</p>
				<span>0</span>
			</div>
			<div className={classes.countAdBox}>
				<p>Reported ads</p>
				<span>0</span>
			</div>
			<div className={classes.countAdBox}>
				<p>Promoted ads</p>
				<span>0</span>
			</div>
		</div>
	);
};

export default AdsTypesView;
