import { useMemo } from 'react';
import _ from 'lodash';

import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';

import { useCreateSelectData } from '../../../hooks/use-create-select-data';
import ControlledSelect from '../../controlled-select/controlled-select.component';
import { SelectProps } from '../../controlled-select/select/select.component';

export interface SelectAttribute extends Partial<SelectProps> {
	attributeDefinition: AttributeDefinition;
	withTranslatedOption?: boolean;
	className?: string;
}

const SelectAttribute: React.FC<SelectAttribute> = ({ attributeDefinition, withTranslatedOption = false, className, ...other }) => {
	const createSelectData = useCreateSelectData(attributeDefinition, withTranslatedOption);

	const selectData = useMemo(() => createSelectData(), [createSelectData]);

	const objectPath = `${attributeDefinition.model}.${attributeDefinition.attribute}`;

	return <ControlledSelect data={selectData ?? []} key={objectPath} name={objectPath} {...other} />;
};
export default SelectAttribute;
