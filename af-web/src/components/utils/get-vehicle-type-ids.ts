import { Category } from 'af-shared/lib/graphql';

export const getVehicleTypeIds = (categories: Category[] | undefined): Record<string, string> => ({
	car: categories?.find((category) => category.name === 'Car')?.category_id ?? '',
	moto: categories?.find((category) => category.name === 'Moto')?.category_id ?? '',
	commercial: categories?.find((category) => category.name === 'Commercial Vehicle')?.category_id ?? '',
	camper: categories?.find((category) => category.name === 'Camper')?.category_id ?? '',
});
