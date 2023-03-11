import { useEffect, useCallback, useMemo } from 'react';
import Router, { useRouter } from 'next/router';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { Pagination } from '@mantine/core';
import { skipItems } from 'af-shared/lib/components/utils/skip-items';
import { formDataToQuery } from 'af-shared/lib/components/utils/form-data-to-query';
import { sortMap } from 'af-shared/lib/components/constants/select-item-sort-map';
import { queryToFormData } from 'af-shared/lib/components/utils/query-to-form-data';
import AdCard from '../../../common/ad-card/ad-card.component';
import { Ad, AdWhereInput, FindAllAdsQueryVariables, useAggregateAdsWhereQuery, useFindAllAdsQuery } from 'af-shared/lib/graphql';
import { useStyles } from './ads-pagination.styles';

interface Props {
	adsPerPage?: number;
	where: AdWhereInput;
	path: string;
}

interface MyAdsFormData {
	Page?: number;
}

const defaultData: Partial<MyAdsFormData> = {
	Page: 1,
} as const;

const AdsPagination: React.FC<Props> = ({ where, path, adsPerPage = 6 }) => {
	const { classes } = useStyles();
	const { query } = useRouter();

	const formData: typeof defaultData = useMemo(
		() => ({
			...defaultData,
			...queryToFormData(query),
		}),
		[query],
	);

	const variables: FindAllAdsQueryVariables = useMemo(
		() => ({
			where,
			orderBy: sortMap.createdAtDesc,
			take: adsPerPage,
			skip: skipItems(adsPerPage, Number(formData.Page)),
		}),
		[formData, where, adsPerPage],
	);

	const { data: adsData, loading } = useFindAllAdsQuery({ variables });
	const { data: aggregateAdsData } = useAggregateAdsWhereQuery({
		variables,
	});
	const totalAds = aggregateAdsData?.aggregateAds._count?.ad_id;
	const ads: Ad[] = (adsData?.findAllAds as Ad[]) ?? [];
	const { handleSubmit, control, setValue } = useForm<MyAdsFormData>({
		defaultValues: formData,
		mode: 'onSubmit',
	});

	const currentFormData = useWatch({ control });

	const onSubmit: SubmitHandler<MyAdsFormData> = useCallback(
		(data) => {
			Router.push({
				pathname: path,
				query: formDataToQuery(data),
			});
		},
		[path],
	);

	useEffect(() => {
		handleSubmit(onSubmit)();
	}, [currentFormData, handleSubmit, onSubmit]);

	const handlePaginationOnChange = (page: number) => {
		setValue('Page', page);
	};

	const isAdsFound = totalAds && totalAds !== 0;

	const renderedAds = (ads ? ads : []).map((ad) => {
		return <AdCard key={ad.ad_id} ad={ad} variant={'horizontal'} />;
	});
	return (
		<div className={classes.adsContainer}>
			{renderedAds}
			{isAdsFound && !loading ? (
				<Pagination page={currentFormData.Page} onChange={handlePaginationOnChange} className={classes.pagination} total={Math.ceil((totalAds ?? adsPerPage) / adsPerPage)} />
			) : null}
		</div>
	);
};
export default AdsPagination;
