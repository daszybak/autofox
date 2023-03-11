import { Pagination } from '@mantine/core';
import { Ad, AdWhereInput, useAggregateAdsWhereQuery } from 'af-shared/lib/graphql';
import { useFormContext } from 'react-hook-form';
import { ADS_PER_PAGE } from 'src/components/constants/ads-per-page';
import SearchResults from '../search-results/search-results.component';
import useStyles from './searchpage-results.styles';

interface SearchPageResultsProps {
	ads: Ad[];
	maxAds?: number;
	where: AdWhereInput;
	loading?: boolean;
	totalAdsValue?: number;
}

const SearchPageResults: React.FC<SearchPageResultsProps> = ({ ads, maxAds = ADS_PER_PAGE, where, loading, totalAdsValue }) => {
	const { classes, cx } = useStyles();
	const { watch, setValue } = useFormContext();

	const handlePaginationOnChange = (page: number) => {
		setValue('Page', page);
	};

	return (
		<>
			<SearchResults ads={ads} maxAds={maxAds} loading={loading} />
			<div>
				{totalAdsValue && totalAdsValue !== 0 ? (
					<Pagination
						page={watch('Page')}
						onChange={handlePaginationOnChange}
						className={cx(classes.marginT4, classes.justifyCenter, classes.flexCenter)}
						total={Math.ceil((totalAdsValue ?? maxAds) / maxAds)}
					/>
				) : null}
			</div>
		</>
	);
};

export default SearchPageResults;
