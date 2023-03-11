import { Carousel } from '@mantine/carousel';
import { Title } from '@mantine/core';
import { Sort } from 'af-shared/lib/components/types/sort';
import { Ad as AdType, useFindAllAdsQuery } from 'af-shared/lib/graphql';
import AdCard from 'src/components/common/ad-card/ad-card.component';
import Section from 'src/components/common/section/section.component';

import { ADS_CAROUSEL_LENGTH_CLIENT } from '../../constants/ads-carousel';
import { useStyles } from './ads-carousel.styles';

interface Props {
	title: string;
	orderBy?: Sort;
}

const AdsCarousel: React.FC<Props> = ({ title, orderBy }) => {
	const { classes, cx, theme } = useStyles();
	// const [embla, setEmbla] = useState<Embla | null>(null);
	// const [currentPage, setCurrentPage] = useState<number>(1);
	const { data } = useFindAllAdsQuery({
		variables: {
			orderBy,
			take: ADS_CAROUSEL_LENGTH_CLIENT,
		},
	});
	const ads = (data?.findAllAds as AdType[] | undefined | null) ?? [];

	// const handleCarouselOnScroll = useCallback(() => {
	// 	if (!embla) return;
	// 	setCurrentPage(embla.selectedScrollSnap() + 1);
	// 	console.log(embla?.selectedScrollSnap(), 'embla selected scroll snap');
	// }, [embla, setCurrentPage]);

	// useEffect(() => {
	// 	if (embla) {
	// 		embla.on('scroll', handleCarouselOnScroll);
	// 		handleCarouselOnScroll();
	// 	}
	// }, [embla, handleCarouselOnScroll]);

	// const handlePaginationOnChange = (page: number) => {
	// 	embla?.scrollTo(page - 1);
	// };
	// console.log(slideSize, 'slide size', ads.length, 'ads lenght');

	const renderedAds = ads?.map((ad) => {
		return (
			<Carousel.Slide key={ad.ad_id} className={classes.slideContainer}>
				<AdCard ad={ad} variant={'vertical'} />
			</Carousel.Slide>
		);
	});

	return (
		<Section>
			<Title order={1} align={'center'}>
				{title}
			</Title>
			<Carousel
				className={classes.carouselContainer}
				/*getEmblaApi={setEmbla}*/
				inViewThreshold={1}
				slidesToScroll={3}
				slideSize={'33.33%'}
				withControls={true}
				align="start"
				styles={{
					control: {
						'&[data-inactive]': {
							opacity: 0,
							cursor: 'default',
						},
						boxShadow: theme.shadows.xs,
					},
				}}
			>
				{renderedAds}
			</Carousel>
			{/* <Container>
				<Pagination className={classes.paginationContainer} page={currentPage} total={Math.ceil((ads?.length ?? 0) / 3)} onChange={handlePaginationOnChange} />
			</Container> */}
		</Section>
	);
};
export default AdsCarousel;
