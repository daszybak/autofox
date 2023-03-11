import { Drawer, Modal, Title } from '@mantine/core';

import AfInput from '../../../common/af-input/af-input.component';
import WithImage from '../../../common/af-input/with-image/with-image.component';
import { categoryTree } from '../../../constants/category-tree';
import { useStyles } from './advanced-filter.styles';

interface Props {
	className?: string;
}

const AdvancedFilter: React.FC<Props> = ({ className }) => {
	const { classes, cx } = useStyles();

	return (
		<div className={cx(classes.grid, className)}>
			<Title order={3} className={cx(classes.title, classes.gridSpan12)}>
				BASIC
			</Title>
			<AfInput {...categoryTree.make_cid} className={classes.gridSpan4} />
			<AfInput {...categoryTree.model_cid} className={classes.gridSpan4} />
			<AfInput {...categoryTree.variant_cid} className={classes.gridSpan4} />
			<AfInput attribute={'condition_type_cid'} className={classes.gridSpan4} />
			<AfInput attribute={'price_eurocent'} className={classes.gridSpan4} />
			<AfInput attribute={'registered_until'} className={classes.gridSpan4} />
			<AfInput attribute={'km'} className={classes.gridSpan4} />
			<AfInput attribute={'doors_num'} className={classes.gridSpan4} />
			<AfInput attribute={'seats_num'} className={classes.gridSpan4} />
			<div className={classes.gridSpan12}>
				<Title order={4} className={cx(classes.title)}>
					BODY DESIGN
				</Title>
				<AfInput attribute={'body_type_cid'} />
			</div>
			<Title order={4} className={cx(classes.title, classes.gridSpan12)}>
				OWNERSHIP
			</Title>
			<AfInput attribute={'is_first_owner'} className={classes.gridSpan4} />
			<AfInput attribute={'is_service_book_available'} className={classes.gridSpan4} />
			<AfInput attribute={'is_vehicle_garaged'} className={classes.gridSpan4} />
			<Title order={3} className={cx(classes.title, classes.gridSpan12)}>
				TECH
			</Title>
			<AfInput attribute={'fuel_type_cid'} className={classes.gridSpan4} />
			<AfInput attribute={'power_kw'} className={classes.gridSpan4} />
			<AfInput attribute={'engine_displacement_cm3'} className={classes.gridSpan4} />
			<AfInput attribute={'transmission_type_cid'} className={classes.gridSpan4} />
			<AfInput attribute={'emission_class_cid'} className={classes.gridSpan4} />
			<Title order={4} className={cx(classes.title, classes.gridSpan12)}>
				BATTERY FOR ELECTRIC VEHICLES
			</Title>
			<AfInput attribute={'battery_capacity_kwh'} className={classes.gridSpan4} />
			<Title order={4} className={cx(classes.title, classes.gridSpan12)}>
				AIR CONDITIONING
			</Title>
			<AfInput attribute={'conditioning_cid'} className={classes.gridSpan12} />
			<Title order={4} className={cx(classes.title, classes.gridSpan12)}>
				EXTERIOR COLOR
			</Title>
			<AfInput attribute={'color_exterior_cid'} className={classes.gridSpan2} />
			<Title order={4} className={cx(classes.title, classes.gridSpan12)}>
				INTERIOR COLOR
			</Title>
			<AfInput attribute={'color_interior_cid'} className={classes.gridSpan2} />
			<WithImage className={cx(classes.gridSpan12, classes.marginT1)} />
		</div>
	);
};
export default AdvancedFilter;
