import { useFormContext } from 'react-hook-form';
import { isValid, parseISO } from 'date-fns';
import { Input } from '@mantine/core';

import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';

interface Props {
	className?: string;
	attributeDefinition: AttributeDefinition;
}

const DatePicker: React.FC<Props> = ({ attributeDefinition, className }) => {
	const { register } = useFormContext();

	return (
		<Input
			type={'date'}
			{...register(`${attributeDefinition.model}.${attributeDefinition.attribute}`, {
				setValueAs: (value: any) => {
					const date = parseISO(value);
					return isValid(date) ? date : null;
				},
			})}
			className={className}
		/>
	);
};
export default DatePicker;
