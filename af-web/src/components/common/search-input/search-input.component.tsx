import { TextInput } from '@mantine/core';
import React, { useState } from 'react';
import { useStyles } from './search-input.styles';
import SearchIcon from 'public/icons/search.svg';

const SearchInput = () => {
	const { classes, theme } = useStyles();
	const [search, setSearch] = useState<string>('');

	const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSearchOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSearchOnSubmit}>
			<TextInput
				onChange={handleSearchOnChange}
				value={search}
				icon={<SearchIcon fill={theme.fn.primaryColor()} />}
				classNames={{
					root: classes.root,
					icon: classes.icon,
					withIcon: classes.withIcon,
				}}
			/>
		</form>
	);
};
export default SearchInput;
