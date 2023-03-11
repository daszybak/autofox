import React, { useContext, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Button, NativeSelect, Pagination, Switch, Text, Title, UnstyledButton } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { IoTrashOutline } from 'react-icons/io5';
import _ from 'lodash';

import {
	useFindMyListsQuery,
	List,
	useRemoveListMutation,
	FindMyListsDocument,
	useFindAllCategoriesQuery,
	Category,
	AdWhereInput,
	useUpdateListMutation,
	ListWhereInput,
} from 'af-shared/lib/graphql';
import { adWhereInputToSearchFormInput } from 'af-shared/lib/components/utils/ad-where-input-to-search-form-input';
import { skipItems } from 'af-shared/lib/components/utils/skip-items';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';

import { useStyles } from './saved-searches.styles';
import { useSearchOnSubmit } from '../../../hooks/use-search-on-submit';
import { findMyListsWhere } from '../../../constants/saved-searches';
import { AttributeDefinitionsCtx } from '../../../context/attributeDefinitionsCtx.component';

const SAVED_SEARCHES_PER_PAGE = 6;

type NotificationProcedures = 'is_notifiable_by_sms' | 'is_notifiable_by_email' | 'is_notifiable_by_push';

interface Notifications {
	savedSearch: List;
}

const Notifications: React.FC<Notifications> = ({ savedSearch }) => {
	const { classes, cx } = useStyles();
	const [notificationsSelectValue, setNotificationsSelectValue] = useState<NotificationProcedures>('is_notifiable_by_email');

	const [updateListFn] = useUpdateListMutation();

	const where: ListWhereInput = useMemo(
		() => ({
			list_id: {
				equals: _.toNumber(savedSearch.list_id),
			},
			list_type: {
				equals: 1,
			},
		}),
		[savedSearch.list_id],
	);

	const handleNotificationSwitchOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		await updateListFn({
			variables: {
				data: {
					[notificationsSelectValue]: {
						set: e.target.checked,
					},
				},
				where: {
					list_id: _.toNumber(savedSearch.list_id),
				},
			},
			refetchQueries: [{ query: FindMyListsDocument, variables: { where }, fetchPolicy: 'network-only' }],
		});
		showNotification({
			title: 'Notification settings updated',
			message: 'Your notification settings have been updated',
		});
	};

	const notificationsSelectData: {
		label: string;
		value: NotificationProcedures;
	}[] = [
		{ label: 'Via Email', value: 'is_notifiable_by_email' },
		{ label: 'Via SMS', value: 'is_notifiable_by_sms' },
		{ label: 'Via Push', value: 'is_notifiable_by_push' },
	];

	const handleNotificationsSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setNotificationsSelectValue(e.currentTarget.value as NotificationProcedures);
	};

	return (
		<div className={cx(classes.flex, classes.flexColumn, classes.spaceBetween, classes.height100)}>
			<Switch label={'RECEIVE NOTIFICATIONS'} checked={savedSearch[notificationsSelectValue]} onChange={handleNotificationSwitchOnChange} />
			<NativeSelect data={notificationsSelectData} value={notificationsSelectValue} onChange={handleNotificationsSelectOnChange} />
		</div>
	);
};

interface SearchParamProps {
	label: string;
	value: string;
}

const SearchParam: React.FC<SearchParamProps> = ({ label, value }) => {
	const { classes, cx } = useStyles();

	return (
		<div className={cx(classes.flex, classes.alignCenter, classes.gap025)}>
			<Text size="sm" className={classes.margin0}>
				{label}:&nbsp;
			</Text>
			<Text size="sm" className={classes.margin0}>
				{value}
			</Text>
		</div>
	);
};

interface SearchParamsProps {
	searchParams: SearchFormInputs;
}

const SearchParams: React.FC<SearchParamsProps> = ({ searchParams }) => {
	const { classes, cx } = useStyles();
	const { t } = useTranslation();
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);
	const { data: findAllCategoriesData } = useFindAllCategoriesQuery();
	const categories = (findAllCategoriesData?.findAllCategories as Category[] | undefined) ?? [];

	const renderedSearchParams = _(searchParams.AdAuto)
		.map((value, key) => {
			const attributeDefinition = attributeDefinitions.find((a) => a.attribute === key);
			if (!attributeDefinition || attributeDefinition.dataType !== 'Category') return;
			const category = categories.find((category) => category.category_id === value.toString());
			return <SearchParam label={attributeDefinition?.attribute ? t<string>(`common:filter.${attributeDefinition?.attribute}`) : ''} value={category?.name ?? ''} key={key} />;
		})
		.value()
		.slice(0, 3);

	return <div className={cx(classes.alignCenter, classes.flex, classes.gap1)}>{renderedSearchParams}</div>;
};

interface SavedSearchCardProps {
	savedSearch: List;
}

const SavedSearchCard: React.FC<SavedSearchCardProps> = ({ savedSearch }) => {
	const { classes, cx } = useStyles();
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);
	const onSubmit = useSearchOnSubmit();
	const [removeListFn] = useRemoveListMutation();
	const handleRemoveSavedSearchOnClick = async () => {
		await removeListFn({
			variables: {
				where: {
					list_id: _.toNumber(savedSearch.list_id),
				},
			},
			refetchQueries: [{ query: FindMyListsDocument, variables: { where: findMyListsWhere }, fetchPolicy: 'network-only' }],
		});
		showNotification({
			title: 'Saved search removed',
			message: 'Your saved search has been removed',
		});
	};

	const adWhereInput: AdWhereInput = useMemo(() => JSON.parse(savedSearch.search_params), [savedSearch.search_params]);
	const searchFormInputs: SearchFormInputs = useMemo(() => adWhereInputToSearchFormInput(adWhereInput, attributeDefinitions), [adWhereInput, attributeDefinitions]);

	const handleSearchOnClick = () => {
		onSubmit(searchFormInputs);
	};

	return (
		<article className={classes.cardRoot}>
			<div className={cx(classes.flex, classes.alignCenter, classes.spaceBetween, classes.height4)}>
				<header className={cx(classes.flex, classes.flexColumn, classes.spaceBetween, classes.height100)}>
					<Title className={classes.margin0} order={3}>
						{savedSearch.title}
					</Title>
					<SearchParams searchParams={searchFormInputs} />
				</header>
				<div className={cx(classes.flex, classes.alignCenter, classes.gap3, classes.height100)}>
					<Notifications savedSearch={savedSearch} />
					<div className={cx(classes.flex, classes.flexColumn, classes.alignCenter, classes.spaceBetween, classes.height100)}>
						<UnstyledButton onClick={handleRemoveSavedSearchOnClick}>
							<IoTrashOutline size={24} />
						</UnstyledButton>
						<Button onClick={handleSearchOnClick}>Search</Button>
					</div>
				</div>
			</div>
		</article>
	);
};

const SavedSearches = () => {
	const { classes } = useStyles();
	const { query, push } = useRouter();
	const [Page, setPage] = useState<number>(query.Page ? _.toNumber(query.Page) : 1);
	const { data: findMyListsData, loading } = useFindMyListsQuery({
		variables: {
			where: findMyListsWhere,
		},
	});
	const savedSearches = (findMyListsData?.findMyLists as List[] | null | undefined) ?? [];

	console.log('saved searches', savedSearches);

	const handlePaginationOnChange = (page: number) => {
		setPage(page);
		push({
			query:
				Page && Page !== 1
					? {
							Page,
					  }
					: {},
		});
	};

	const skippedItems = skipItems(SAVED_SEARCHES_PER_PAGE, Page);
	const renderedSavedSearchCards = savedSearches
		.slice(skippedItems, skippedItems + SAVED_SEARCHES_PER_PAGE)
		.map((savedSearch: List) => <SavedSearchCard savedSearch={savedSearch} key={savedSearch.list_id} />)
		.reverse();

	return (
		<div className={classes.savedSearchesContainer}>
			{renderedSavedSearchCards}
			{savedSearches && savedSearches.length !== 0 && !loading ? (
				<Pagination
					className={classes.pagination}
					page={Page}
					onChange={handlePaginationOnChange}
					total={Math.ceil((findMyListsData?.findMyLists.length ?? SAVED_SEARCHES_PER_PAGE) / SAVED_SEARCHES_PER_PAGE)}
				/>
			) : null}
		</div>
	);
};
export default SavedSearches;
