import { Button, Title } from '@mantine/core';
import { useDidUpdate } from '@mantine/hooks';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { useState } from 'react';
import { SubmitHandler, useFormContext, useWatch } from 'react-hook-form';
import AfInput from 'src/components/common/af-input/af-input.component';
import WithImage from 'src/components/common/af-input/with-image/with-image.component';
import { categoryTree } from 'src/components/constants/category-tree';
import AdvancedFilters from './advanced-filters/advanced-filters.component';
import { useStyles } from './side-fiter.styles';

interface SideFilterProps {
	onSubmit: SubmitHandler<SearchFormInputs>;
	scrollRef: React.RefObject<HTMLDivElement>;
}

const SideFilter: React.FC<SideFilterProps> = ({ onSubmit, scrollRef }) => {
	const { classes, cx } = useStyles();
	const { handleSubmit } = useFormContext<SearchFormInputs>();
	const [advancedFilters, setAdvancedFilters] = useState<boolean>(false);

	const data = useWatch<SearchFormInputs>() as SearchFormInputs;

	// const debounceFilterChange = useMemo(() => _.debounce(handleSubmit(onSubmit), DEBOUNCE_TIME), [handleSubmit, onSubmit]);

	useDidUpdate(() => {
		scrollRef.current?.scrollIntoView(/*{ behavior: 'smooth' }*/);
		if ('Page' in data) data.Page = 1;
		handleSubmit(onSubmit)();
		// debounceFilterChange();
	}, [data]);

	const handleAdvancedFiltersOnClick = () => {
		setAdvancedFilters((advancedFilters) => !advancedFilters);
	};

	return (
		<>
			<aside className={classes.filterContainer}>
				<Title order={3} className={cx(classes.marginB02)}>
					BASIC
				</Title>
				<AfInput attribute={'vehicle_type_cid'} location={'search'} />
				<AfInput {...categoryTree.make_cid} />
				<AfInput {...categoryTree.model_cid} />
				<AfInput {...categoryTree.variant_cid} />
				<AfInput attribute={'condition_type_cid'} />
				<AfInput attribute={'price_eurocent'} />
				<AfInput attribute={'registered_until'} />
				<AfInput attribute={'year'} />
				<AfInput attribute={'km'} />
				<AfInput attribute={'doors_num'} />
				<AfInput attribute={'seats_num'} />
				<Title order={4} className={cx(classes.marginB02)}>
					OWNERSHIP
				</Title>
				<AfInput attribute={'is_first_owner'} />
				<AfInput attribute={'is_service_book_available'} />
				<AfInput attribute={'is_vehicle_garaged'} />
				{advancedFilters && <AdvancedFilters />}
				<WithImage className={classes.marginT2} />
				<Button className={classes.marginT2} onClick={handleAdvancedFiltersOnClick}>
					{advancedFilters ? 'LESS FILTERS' : 'MORE FILTERS'}
				</Button>
				<Button type={'submit'}>SEARCH</Button>
			</aside>
		</>
	);
};

export default SideFilter;
