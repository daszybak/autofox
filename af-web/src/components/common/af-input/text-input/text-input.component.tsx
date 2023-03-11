import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core';
import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { useTranslation } from 'next-i18next';
import { useFormContext } from 'react-hook-form';

const setValueAs = (value: any) => (value ? Number(value) : null);

interface TextInputProps extends MantineTextInputProps {
	attributeDefinition: AttributeDefinition;
	withTranslatedOption?: boolean;
	className?: string;
	required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ attributeDefinition, placeholder, className, withTranslatedOption = true, required, ...other }) => {
	const { t } = useTranslation();
	const { register } = useFormContext();
	const isNumber = attributeDefinition.dataType === 'int';

	return (
		<MantineTextInput
			className={className}
			{...other}
			{...register(`${attributeDefinition.model}.${attributeDefinition.attribute}`, {
				setValueAs: isNumber ? setValueAs : undefined,
				required,
			})}
			placeholder={placeholder ? placeholder : withTranslatedOption ? t<string>(`common:filter.${attributeDefinition.attribute}`) : undefined}
			type={isNumber ? 'number' : 'text'}
		/>
	);
};
export default TextInput;
