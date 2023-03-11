import { Container } from '@mantine/core';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { useFindAllCategoriesQuery, Category } from 'af-shared/lib/graphql/generated/generated';
import { useStyles } from './links.styles';
import { getVehicleTypeIds } from '../../utils/get-vehicle-type-ids';
import { ParsedUrlQueryInput } from 'querystring';
import Link from './link/link.component';
import FavoriteLink from './favorite-link/favorite-link.component';
import MySearchesLink from './my-searches-link/my-searches-link.component';
import CompareLink from './compare-link/compare-link.component';
import LinkContainer from './link-container/link-container.component';
import { formDataToQuery } from 'af-shared/lib/components/utils/form-data-to-query';
import { FAVORITES_PAGE, SAVED_SEARCHES_PAGE, SEARCH_PAGE } from 'src/components/constants/paths';

type NavbarNames = 'home' | 'favorites' | 'my-searches' | 'compare' | 'car' | 'moto' | 'commercial' | 'camper';

interface Props {
	position: 'navbar' | 'footer';
	className?: string;
}

const Links: React.FC<Props> = ({ position, className }) => {
	const { classes, cx } = useStyles();
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;

	const navbarLinks: {
		name: NavbarNames;
		url:
			| ((formData: SearchFormInputs) => {
					pathname: string;
					query: ParsedUrlQueryInput;
			  })
			| string;
	}[] = [
		{
			name: 'favorites',
			url: FAVORITES_PAGE,
		},
		{
			name: 'my-searches',
			url: SAVED_SEARCHES_PAGE,
		},
	];

	const footbarLinks = [
		{
			name: 'car',
			url: (formData: SearchFormInputs) => ({
				pathname: SEARCH_PAGE,
				query: formDataToQuery(formData),
			}),
		},
		{ name: 'news', url: '/' },
		{
			name: 'moto',
			url: (formData: SearchFormInputs) => ({
				pathname: SEARCH_PAGE,
				query: formDataToQuery(formData),
			}),
		},
		{ name: 'agents', url: '/' },
		{
			name: 'commercial',
			url: (formData: SearchFormInputs) => ({
				pathname: SEARCH_PAGE,
				query: formDataToQuery(formData),
			}),
		},
		navbarLinks[0],
		{
			name: 'camper',
			url: (formData: SearchFormInputs) => ({
				pathname: SEARCH_PAGE,
				query: formDataToQuery(formData),
			}),
		},
		navbarLinks[1],
	];

	const vehicleTypeIds = getVehicleTypeIds(categories);

	const renderedLinks = (position === 'navbar' ? navbarLinks : footbarLinks).map(({ name, url }) => {
		const formData: SearchFormInputs = {
			AdAuto: {
				vehicle_type_cid: Number(vehicleTypeIds[name]),
			},
		};

		if (name === 'favorites' && position === 'navbar')
			return (
				<LinkContainer key={name}>
					<FavoriteLink />
				</LinkContainer>
			);
		if (name === 'my-searches' && position === 'navbar')
			return (
				<LinkContainer key={name}>
					<MySearchesLink />
				</LinkContainer>
			);
		if (name === 'compare' && position === 'navbar') return <CompareLink key={name} />;

		return <Link href={typeof url === 'function' ? url(formData) : url} navName={name} key={name} />;
	});

	return <>{renderedLinks}</>;
};
export default Links;
