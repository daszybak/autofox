import { Checkbox as MantineCheckbox } from '@mantine/core';
import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

export interface CategorySelectProps {
	attributeDefinition: AttributeDefinition;
	className?: string;
}

const Checkbox: React.FC<CategorySelectProps> = ({ attributeDefinition, className }) => {
	const { t } = useTranslation();
	const { register } = useFormContext();

	return (
		<MantineCheckbox
			className={className}
			{...register(`${attributeDefinition.model}.${attributeDefinition.attribute}`)}
			label={t<string>(`common:filter.${attributeDefinition.attribute}`)}
		/>
	);
};
export default Checkbox;
