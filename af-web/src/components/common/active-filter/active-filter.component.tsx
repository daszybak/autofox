import { useMemo, PropsWithoutRef, useContext } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { Button } from '@mantine/core';
import { MdOutlineClear } from 'react-icons/md';
import _ from 'lodash';

import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { removeFalsyValues } from 'af-shared/lib/components/utils/remove-falsy-values';
import { Attribute } from 'af-shared/lib/components/types/attribute-definitions';

import { useAttributeValueToAfValue } from '../../hooks/use-attribute-value-to-af-value';
import { AttributeDefinitionsCtx } from '../../context/attributeDefinitionsCtx.component';
import { useGetAfKey } from '../../hooks/use-get-af-key';
import { categoryTree } from '../../constants/category-tree';
import { useResetAfSuccessors } from '../../hooks/use-reset-af-successors';

interface ActiveFilterProps {
	value: string;
	tuplePosition?: 0 | 1;
	attribute: Attribute;
}

export const ActiveFilter: React.FC<ActiveFilterProps> = ({ value, attribute, tuplePosition }) => {
	const convertAfValue = useAttributeValueToAfValue();
	const getAfKey = useGetAfKey();
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);
	const attributeDefinition = useMemo(() => attributeDefinitions.find((a) => a.attribute === attribute), [attributeDefinitions, attribute]);
	const { setValue, trigger } = useFormContext();
	const withImage = attribute === 'WithImage';
	const resetAfSuccessors = useResetAfSuccessors();

	const handleRemoveFilterOnClick = () => {
		if (withImage) return setValue('WithImage', false);
		if (!attributeDefinition) return;

		if (attributeDefinition.inputType === 'range') return setValue(`${attributeDefinition.model}.${attributeDefinition.attribute}.${tuplePosition}`, '');
		if (attributeDefinition?.categoryCode && attributeDefinition.categoryCode in categoryTree && 'successors' in categoryTree[attributeDefinition.categoryCode as string])
			resetAfSuccessors(categoryTree[attributeDefinition.categoryCode as string].successors);
		setValue(`${attributeDefinition.model}.${attributeDefinition.attribute}`, '');
	};

	const tupleLabel = useMemo(() => (tuplePosition !== undefined ? (tuplePosition === 1 ? 'from' : 'to') : null), [tuplePosition]);

	const convertedValue = useMemo(() => convertAfValue(value, attributeDefinition), [convertAfValue, value, attributeDefinition]);

	const afKey = useMemo(
		() => (withImage ? 'With Image' : attributeDefinition?.attribute ? getAfKey(attributeDefinition.attribute) : ''),
		[getAfKey, attributeDefinition, withImage],
	);

	return (
		<Button
			onClick={handleRemoveFilterOnClick}
			style={{
				width: '12rem',
			}}
		>
			{`${afKey}:`}&nbsp;
			{tupleLabel}&nbsp;
			{convertedValue}&nbsp;
			<MdOutlineClear />
		</Button>
	);
};

interface ActiveFiltersProps extends PropsWithoutRef<JSX.IntrinsicElements['div']> {}

export const ActiveFilters: React.FC<ActiveFiltersProps> = ({ ...other }) => {
	const data = useWatch<SearchFormInputs>() as SearchFormInputs;
	const Ad = data.Ad;
	const AdAuto = data.AdAuto;
	const WithImage = data.WithImage;

	const filteredAdAutoData = AdAuto !== undefined ? removeFalsyValues(AdAuto) : {};
	const filteredAdData = Ad !== undefined ? removeFalsyValues(Ad) : {};

	const renderedActiveAdAdAutoFilters = _.map({ ...filteredAdAutoData, ...filteredAdData, WithImage }, (value, key) => {
		if (Array.isArray(value) && value.length === 2) {
			return value.map((v, i) => (v ? <ActiveFilter attribute={key} key={v + i} value={v} tuplePosition={i as ActiveFilterProps['tuplePosition']} /> : null));
		}
		if (!value) return null;
		return <ActiveFilter key={key} value={value.toString()} attribute={key} />;
	});

	return <div {...other}>{renderedActiveAdAdAutoFilters}</div>;
};

export default ActiveFilters;
