import { useTranslation } from 'next-i18next';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import { TRANSITION_STYLES } from 'src/components/constants/select-transition';
import Select, { SelectProps } from './select/select.component';

export type ControlledSelectProps<T extends FieldValues> = Omit<SelectProps, 'name' | 'defaultValue'> &
	Omit<ControllerProps<T>, 'render'> & {
		withTranslatedOption?: boolean;
	};

const ControlledSelect = <T extends FieldValues>({ control, name, rules, styles, withTranslatedOption, disabled, ...other }: ControlledSelectProps<T>) => {
	const { t } = useTranslation();

	return (
		<Controller
			control={control}
			name={name}
			key={name}
			rules={rules}
			render={({ field }) => (
				<Select
					styles={{
						...styles,
					}}
					{...TRANSITION_STYLES}
					{...other}
					{...field}
					clearable
					allowDeselect
					searchable
					disabled={!!disabled}
					placeholder={withTranslatedOption ? undefined : t<string>(`common:filter.${name.split('.')[1]}`)}
				/>
			)}
		/>
	);
};

export default ControlledSelect;
