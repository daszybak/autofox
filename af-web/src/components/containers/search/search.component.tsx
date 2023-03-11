import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, CloseButton, Container, Flex, UnstyledButton } from '@mantine/core';
import _ from 'lodash';

import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { queryDefaultValues } from 'af-shared/lib/components/constants/query-params';
import { queryToFormData } from 'af-shared/lib/components/utils/query-to-form-data';
import { Ad, AdWhereInput, FindAllAdsQueryVariables, useAggregateAdsWhereQuery, useFindAllAdsQuery } from 'af-shared/lib/graphql';
import { searchFormInputsToAdWhereInput } from 'af-shared/lib/components/utils/search-form-input-to-ad-where-input';
import { skipItems } from 'af-shared/lib/components/utils/skip-items';

import { useStyles } from './search.styles';
import { useSearchOnSubmit } from '../../hooks/use-search-on-submit';
import AfInput from '../../common/af-input/af-input.component';
import AdvancedFilter from './advanced-filter/advanced-filter.component';
import { categoryTree } from '../../constants/category-tree';
import { AttributeDefinitionsCtx } from 'src/components/context/attributeDefinitionsCtx.component';
import SearchPageResults from './searchpage-results/searchpage-results.component';
import { ADS_PER_PAGE } from 'src/components/constants/ads-per-page';
import ResultsTitle from './results-title/results-title.component';
import HomepageResults from './homepage-results/homepage-results.component';
import { HOMEPAGE, SEARCH_PAGE } from 'src/components/constants/paths';
import ToggleButton from 'src/components/common/toggle-button/toggle-button.component';
import DebounceProgressBar from 'src/components/common/debounce-progress-bar/debounce-progress-bar.component';
import { randomId } from '@mantine/hooks';

const DEBOUNCE_TIME = 1000;

interface SearchProps {
	adsPerpage?: number;
}

const Search: React.FC<SearchProps> = ({ adsPerpage = ADS_PER_PAGE }) => {
	const { classes, cx } = useStyles();
	const { t } = useTranslation();

	const scrollRef = useRef<HTMLDivElement>(null);

	const { query, pathname } = useRouter();

	const formData: SearchFormInputs = useMemo(
		() => ({
			...queryDefaultValues,
			...queryToFormData(query),
		}),
		[query],
	);

	const attributeDefinitions = useContext(AttributeDefinitionsCtx);

	const where: AdWhereInput = useMemo(() => searchFormInputsToAdWhereInput(formData, attributeDefinitions), [formData, attributeDefinitions]);

	const variables: FindAllAdsQueryVariables = useMemo(
		() => ({
			where,
			orderBy: formData.Sort,
			take: ADS_PER_PAGE,
			skip: skipItems(ADS_PER_PAGE, Number(formData.Page)),
		}),
		[formData, where],
	);

	const methods = useForm<SearchFormInputs>({
		defaultValues: formData,
		mode: 'onSubmit',
	});

	const { handleSubmit, watch } = methods;
	const onSubmit = useSearchOnSubmit();

	const { data: adsData, loading: adsDataLoading } = useFindAllAdsQuery({ variables });

	const ads: Ad[] = (adsData?.findAllAds as Ad[]) ?? [];

	const { data: aggregateAdsData, loading: aggregateAdsDataLoading } = useAggregateAdsWhereQuery({
		variables: {
			where,
		},
	});
	const totalAdsValue = aggregateAdsData?.aggregateAds._count?.ad_id;

	const [advancedFilters, setAdvancedFilters] = useState<boolean>(false);
	const [debouncing, setDebouncing] = useState<boolean>(false);

	const handleAdvancedFilterButtonOnClick = () => {
		setAdvancedFilters((prevState) => !prevState);
	};

	const debouncedFunc = useRef<_.DebouncedFunc<(data: any) => void>>();
	const debounceKey = randomId();

	useEffect(() => {
		watch((data) => {
			if (debouncedFunc.current) {
				debouncedFunc.current?.cancel();
			} else {
				setDebouncing(true);
			}
			debouncedFunc.current = _.debounce((data) => {
				scrollRef.current?.scrollIntoView(/*{ behavior: 'smooth' }*/);
				if ('Page' in data) data.Page = 1;
				handleSubmit(onSubmit)();
				setDebouncing(false);
				debouncedFunc.current = undefined;
			}, DEBOUNCE_TIME);
			debouncedFunc.current(data);
		});
	}, [watch, handleSubmit, onSubmit]);

	const loading = adsDataLoading || aggregateAdsDataLoading;
	const isQueryEmpty = _.isEmpty(query);

	//const vehicleAttributes = useVehicleAttributes('Compare', HOME_PAGE_CHILDREN_VEHICLE_ATTRIBUTES) as Record<typeof HOME_PAGE_CHILDREN_VEHICLE_ATTRIBUTES[number], string[]> | null;

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Container fluid ref={scrollRef} className={classes.formContainer}>
					{!advancedFilters && (
						<div className={classes.filterContainer}>
							<AfInput attribute={'vehicle_type_cid'} />
							<AfInput {...categoryTree.make_cid} />
							<AfInput {...categoryTree.model_cid} />
							<AfInput attribute={'condition_type_cid'} />
							<AfInput attribute={'price_eurocent'} />
							<Link
								href={{
									pathname: SEARCH_PAGE,
									query,
								}}
							>
								<Button type="submit" className={cx(classes.width, { [classes.buttonLabel]: !isQueryEmpty })} loading={!isQueryEmpty && loading}>
									{isQueryEmpty ? t<string>('common:filter.search') : `${totalAdsValue !== undefined ? `${totalAdsValue} ` : ''}${t<string>('common:filter.results')}`}
								</Button>
							</Link>
							<ToggleButton onClick={handleAdvancedFilterButtonOnClick}>{t<string>('common:filter.advanced-search')}</ToggleButton>
						</div>
					)}
					{advancedFilters && (
						<div className={classes.relative}>
							<CloseButton className={classes.closeButton} onClick={handleAdvancedFilterButtonOnClick} />
							<AdvancedFilter className={classes.advancedFilter} />
						</div>
					)}
					{debouncing ? <DebounceProgressBar timer={DEBOUNCE_TIME} className={classes.debounceProgressBar} key={debounceKey} /> : null}
				</Container>
				<ResultsTitle />
				{pathname === HOMEPAGE ? <HomepageResults ads={ads} loading={loading} /> : <SearchPageResults ads={ads} loading={loading} where={where} totalAdsValue={totalAdsValue} />}
			</form>
		</FormProvider>
	);
};
export default Search;
