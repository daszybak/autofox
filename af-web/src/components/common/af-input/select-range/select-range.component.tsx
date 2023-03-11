import { useMemo } from 'react';
import { SelectProps } from '@mantine/core';
import { Controller, useFormContext } from 'react-hook-form';
import _ from 'lodash';

import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';

import { useStyles } from './select-range.styles';
import { useCreateSelectData } from '../../../hooks/use-create-select-data';
import ControlledSelect from '../../controlled-select/controlled-select.component';
import Select from '../../controlled-select/select/select.component';
import { GroupName } from '../../controlled-select/select/select-items/select-items.component';
import NumberInputItem from '../../controlled-select/select/number-input-item/number-input-item.component';
import { useTranslation } from 'next-i18next';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { SearchFormInputKeys } from 'src/components/types/search-form-inputs';

export interface SelectRangeProps extends Partial<SelectProps> {
	attributeDefinition: AttributeDefinition;
	withTranslatedOption?: boolean;
	className?: string;
}

const SelectRange: React.FC<SelectRangeProps> = ({ attributeDefinition, withTranslatedOption = false, className, data, ...other }) => {
	const { t } = useTranslation();
	const { classes, cx } = useStyles();
	const { control, watch } = useFormContext<SearchFormInputs>();
	const createSelectData = useCreateSelectData(attributeDefinition, withTranslatedOption);

	// const selectDataA = useMemo(() => createSelectData(), [createSelectData]);
	// const selectDataB = useMemo(() => createSelectData(true), [createSelectData]);

	const attribute = attributeDefinition.attribute;
	const model = attributeDefinition.model;
	const objectPathA = `${model}.${attribute}.0`;
	const objectPathB = `${model}.${attribute}.1`;
	const placeholder = t<string>(`common:filter.${attribute}`);
	const from = t<string>(`common:filter.from`);
	const to = t<string>(`common:filter.to`);
	const valueA = watch(objectPathA as SearchFormInputKeys);
	const valueB = watch(objectPathB as SearchFormInputKeys);
	const constructSelectedRange = () => (valueA || valueB ? `Price ${valueA ? `${from} ${valueA}` : ''}${valueB ? ` ${to} ${valueB}` : ''}` : placeholder);

	return (
		<Select data={[]} placeholder={constructSelectedRange()}>
			{/* <GroupName groupName={t<string>(`common:filter.${attributeDefinition.attribute}`)} /> */}
			<Controller name={objectPathA as SearchFormInputKeys} key={objectPathA} control={control} render={({ field }) => <NumberInputItem label={from} {...field} />} />
			<Controller name={objectPathB as SearchFormInputKeys} key={objectPathB} control={control} render={({ field }) => <NumberInputItem label={to} {...field} />} />
		</Select>
	);
};
export default SelectRange;
