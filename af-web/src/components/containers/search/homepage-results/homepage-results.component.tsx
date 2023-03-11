import { Ad } from 'af-shared/lib/graphql';
import { ADS_PER_PAGE } from 'src/components/constants/ads-per-page';
import PriceEstimate from '../../price-estimate-section/price-estimate-section.component';
import SearchResults from '../search-results/search-results.component';

interface HomepageResultsProps {
	ads: Ad[];
	loading?: boolean;
}

const HomepageResults: React.FC<HomepageResultsProps> = ({ ads, loading }) => {
	return <SearchResults ads={ads} loading={loading} maxAds={ADS_PER_PAGE} rows={7} Section={PriceEstimate} />;
};

export default HomepageResults;
