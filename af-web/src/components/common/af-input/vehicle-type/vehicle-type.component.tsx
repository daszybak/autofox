import { FieldPath, useFormContext } from 'react-hook-form';
import _ from 'lodash';

import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';

import Car from 'public/icons/car.svg';
import Moto from 'public/icons/moto.svg';
import Commercial from 'public/icons/cargo.svg';
import Camper from 'public/icons/camper.svg';
import { getVehicleTypeIds } from '../../../utils/get-vehicle-type-ids';

import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';

import { useMemo } from 'react';
import ControlledSelect from '../../controlled-select/controlled-select.component';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { SearchFormInputKeys } from 'src/components/types/search-form-inputs';
import { useStyles } from './vehicle-type.styles';

interface Props {
	className?: string;
	attributeDefinition: AttributeDefinition;
	withTranslatedOption?: boolean;
}

const VehicleType: React.FC<Props> = ({ className, attributeDefinition, withTranslatedOption = false, ...other }) => {
	const { classes, cx } = useStyles();
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;
	const { car, moto, commercial, camper } = getVehicleTypeIds(categories);
	const { control } = useFormContext<SearchFormInputs>();

	const vehicleTypeData = useMemo(() => {
		return [
			{ value: car, Icon: Car, label: 'Car' },
			{ value: moto, Icon: Moto, label: 'Moto' },
			{ value: commercial, Icon: Commercial, label: 'Commercial' },
			{ value: camper, Icon: Camper, label: 'Camper' },
		];
	}, [car, camper, moto, commercial]);

	const objectPath = `${attributeDefinition.model}.${attributeDefinition.attribute}` as SearchFormInputKeys;
	return (
		<ControlledSelect<SearchFormInputs>
			name={objectPath}
			key={objectPath}
			control={control}
			className={cx(classes.vehicleType, className)}
			data={vehicleTypeData}
			withTranslatedOption={withTranslatedOption}
			{...other}
		/>
	);
};
export default VehicleType;
