import React from 'react';
import _ from 'lodash';
import { Container } from '@mantine/core';

import { Ad, AdAdAutoFileFieldsFragment } from 'af-shared/lib/graphql';

import AdCard from 'src/components/common/ad-card/ad-card.component';
import AdVerticalSkeleton from 'src/components/common/ad-card/ad-vertical-skeleton/ad-vertical-skeleton.component';
import { ADS_PER_PAGE } from 'src/components/constants/ads-per-page';
import { useStyles } from './search-results.styles';

interface GridColProps {
	children: React.ReactNode;
}

interface SearchResultsProps {
	ads?: AdAdAutoFileFieldsFragment[] | undefined;
	loading?: boolean;
	maxAds?: number;
	rows?: number;
	columns?: number;
	Section?: React.ComponentType<{
		className?: string;
	}>;
}

const SearchResults: React.FC<SearchResultsProps> = ({ ads, loading, maxAds = ADS_PER_PAGE, rows, columns, Section }) => {
	const { classes } = useStyles({
		rows,
		columns,
	});

	let renderedAds: React.ReactNode = [];
	if (loading) {
		renderedAds = Array.from(new Array(maxAds)).map((_, i) => <AdVerticalSkeleton key={i} />);
	} else {
		renderedAds = ads?.map((ad) => <AdCard ad={ad as Ad} key={ad.ad_id} />);
	}
	return (
		<Container fluid className={classes.searchResultsContainer} key={ads?.length}>
			{renderedAds}
			{Section && <Section className={classes.section} />}
		</Container>
	);
};

export default SearchResults;
