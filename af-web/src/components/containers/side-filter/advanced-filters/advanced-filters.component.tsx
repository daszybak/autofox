import { Title } from '@mantine/core';
import AfInput from '../../../common/af-input/af-input.component';
import { useStyles } from '../side-fiter.styles';

const AdvancedFilters = () => {
	const { classes, cx } = useStyles();

	return (
		<>
			<Title order={3} className={cx(classes.marginB02)}>
				TECH
			</Title>
			<AfInput attribute={'fuel_type_cid'} />
			<AfInput attribute={'power_kw'} />
			<AfInput attribute={'engine_displacement_cm3'} />
			<AfInput attribute={'transmission_type_cid'} />
			<AfInput attribute={'emission_class_cid'} />
			<Title order={4} className={cx(classes.marginB02)}>
				BATTERY FOR ELECTRIC VEHICLES
			</Title>
			<AfInput attribute={'battery_capacity_kwh'} />
			<Title order={4} className={cx(classes.marginB02)}>
				AIR CONDITIONING
			</Title>
			<AfInput attribute={'conditioning_cid'} className={classes.conditioningContainer} />
			<Title order={4} className={cx(classes.marginB02)}>
				EXTERIOR COLOR
			</Title>
			<div className={classes.colorPickContainer}>
				<AfInput attribute={'color_exterior_cid'} className={classes.gridSpan1} />
			</div>
			<Title order={4} className={cx(classes.marginB02)}>
				INTERIOR COLOR
			</Title>
			<div className={classes.colorPickContainer}>
				<AfInput attribute={'color_interior_cid'} className={classes.gridSpan1} />
			</div>
		</>
	);
};
export default AdvancedFilters;
