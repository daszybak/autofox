import { NativeSelect, NativeSelectProps } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useRouter } from 'next/router';
import Dropdown from '../dropdown-icon/dropdown-icon.component';

import { useStyles } from './language-select.styles';

type LanguageSelectProps = Omit<NativeSelectProps, 'data'>;

const LanguageSelect: React.FC<LanguageSelectProps> = (props) => {
	const { classes } = useStyles();
	const router = useRouter();

	const setCookie = (locale: string) => {
		document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`;
	};

	const handleLanguageOnChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
		setCookie(event.target.value);
		await router.push(
			{
				pathname: router.asPath,
			},
			router.asPath,
			{
				locale: event.target.value,
			},
		);
		showNotification({
			title: 'Language changed',
			message: '',
		});
	};

	return (
		<NativeSelect
			data={[
				{
					value: 'en',
					label: 'English',
				},
				{
					value: 'hr',
					label: 'Hrvatski',
				},
			]}
			value={router.locale}
			onChange={handleLanguageOnChange}
			classNames={{
				input: classes.input,
				rightSection: classes.rightSection,
			}}
			rightSection={<Dropdown />}
		/>
	);
};
export default LanguageSelect;
