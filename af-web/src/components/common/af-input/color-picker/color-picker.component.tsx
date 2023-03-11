import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { DefaultProps, Selectors } from '@mantine/core';
import { AiOutlineCheck } from 'react-icons/ai';
import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';
import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { useStyles } from './color-picker.styles';
import { COLORS } from '../../../constants/colors-input';

interface ColorPickerProps extends DefaultProps<Selectors<typeof useStyles>> {
	attributeDefinition: AttributeDefinition;
	withNameLabel?: boolean;
	className?: string;
}

//ColorSwatch Mantine Dev component
const ColorPicker: React.FC<ColorPickerProps> = ({ attributeDefinition, className, classNames, unstyled, /*defaultValue,*/ withNameLabel = true, ...other }) => {
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;
	const { classes, cx } = useStyles(undefined, { name: 'ColorPicker', classNames, unstyled });
	const { register, watch } = useFormContext();
	const [checkbox, setCheckbox] = useState<string>(watch(`${attributeDefinition.model}.${attributeDefinition.attribute}`));

	const renderedColors = categories
		?.filter((category) => category.code === attributeDefinition.categoryCode)
		.map(({ name, category_id }, i) => {
			const unqName = name + category_id;
			return (
				<span key={unqName} className={cx(classes.wrapper, className)}>
					<label
						htmlFor={unqName}
						className={classes.inputContainer}
						style={{
							background: `${COLORS[name.toLocaleLowerCase()]}`,
						}}
					>
						<input
							className={classes.input}
							type={'checkbox'}
							{...register(`${attributeDefinition.model}.${attributeDefinition.attribute}`, {
								onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
									const value = e.currentTarget.value;
									if (value === checkbox) return setCheckbox('');
									setCheckbox(value);
								},
							})}
							{...other}
							id={unqName}
							value={category_id}
							checked={checkbox === category_id}
						/>
						<AiOutlineCheck className={classes.icon} />
					</label>
					{withNameLabel && (
						<label htmlFor={unqName} className={classes.label}>
							{name}
						</label>
					)}
				</span>
			);
		});

	return <>{renderedColors}</>;
};

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
