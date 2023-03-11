import { DefaultProps } from '@mantine/core';
import { useContext, useMemo } from 'react';

import { Attribute } from 'af-shared/lib/components/types/attribute-definitions';

import { AttributeDefinitionsCtx } from '../../context/attributeDefinitionsCtx.component';
import CategorySelectComponent from './category-select/category-select.component';
import SelectRange from './select-range/select-range.component';
import Select from './attribute-select/attribute-select.component';
import TextInput from './text-input/text-input.component';
import VehicleTypeControl from './vehicle-type/vehicle-type.component';
import CategoryRadio from './category-group/category-group.component';
import { icons } from '../../constants/body-type-icons';
import Checkbox from './checkbox/checkbox.component';
import ColorPicker from './color-picker/color-picker.component';
import DatePicker from './date-picker/date-picker.component';

interface InputProps extends DefaultProps {
	attribute: Attribute;
	location?: 'homepage' | 'search' | 'create';
	predecessors?: Attribute[];
	successors?: Attribute[];
	className?: string;
	required?: boolean;
}

const AfInput: React.FC<InputProps> = ({ attribute, predecessors, successors, location, ...other }) => {
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);
	const attributeDefinition = useMemo(() => attributeDefinitions.find((a) => a.attribute === attribute), [attributeDefinitions, attribute]);

	if (attributeDefinition?.inputType === 'select' && attributeDefinition.dataType === 'Category' && location === 'search')
		return <CategorySelectComponent attributeDefinition={attributeDefinition} {...other} predecessors={predecessors} successors={successors} />;
	if (attributeDefinition?.inputType === 'select' && attributeDefinition.dataType === 'Category' && location !== 'search') {
		if (attributeDefinition.attribute === 'vehicle_type_cid') return <VehicleTypeControl attributeDefinition={attributeDefinition} {...other} />;
	}
	if (attributeDefinition?.inputType === 'checkbox' && attributeDefinition.dataType === 'boolean')
		return <Checkbox attributeDefinition={attributeDefinition} className={other.className} />;
	if (attributeDefinition?.inputType === 'checkbox' && attributeDefinition.dataType === 'Category' && location !== 'search') {
		if (attributeDefinition.attribute === 'body_type_cid') return <CategoryRadio type={'checkbox'} attributeDefinition={attributeDefinition} icons={icons} {...other} />;
		if (attributeDefinition.attribute === 'color_interior_cid' || attributeDefinition.attribute === 'color_exterior_cid')
			return <ColorPicker attributeDefinition={attributeDefinition} {...other} />;
		if (attributeDefinition.attribute === 'conditioning_cid') return <CategoryRadio type={'checkbox'} attributeDefinition={attributeDefinition} icons={icons} {...other} />;
	}
	if (attributeDefinition?.inputType === 'select' && attributeDefinition.dataType === 'Category')
		return <CategorySelectComponent attributeDefinition={attributeDefinition} {...other} predecessors={predecessors} successors={successors} />;
	if (attributeDefinition?.inputType === 'range' && attributeDefinition.dataType === 'int' && location !== 'create')
		return <SelectRange attributeDefinition={attributeDefinition} {...other} />;
	if (attributeDefinition?.inputType === 'select' && attributeDefinition.dataType === 'int' && location !== 'create')
		return <Select attributeDefinition={attributeDefinition} {...other} />;
	if (attributeDefinition?.dataType === 'int' && location === 'create') return <TextInput attributeDefinition={attributeDefinition} {...other} />;
	if (attributeDefinition?.inputType === 'range' && attributeDefinition.dataType === 'DateTime') return <DatePicker attributeDefinition={attributeDefinition} {...other} />;

	console.log('attributeDefinition', attributeDefinition);

	return <div>attributeDefinitionInput: {attribute} Unavailable</div>;
};
export default AfInput;
