import { Section } from 'af-shared/lib/components';
import { Category, useFindAllCategoriesQuery } from 'af-shared/lib/graphql';
import Renault from './icons/renault.svg';
import Audi from './icons/audi.svg';
import BMW from './icons/bmw.svg';
import Mercedes from './icons/mercedes.svg';
import Ford from './icons/ford.svg';
import Opel from './icons/opel.svg';
import Volkswagen from './icons/volkswagen.svg';
import Peugeot from './icons/peugeot.svg';
import { useStyles } from './brands-section.styles';
import { Anchor, Title, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { formDataToQuery } from 'af-shared/lib/components/utils/form-data-to-query';

interface BrandProps {
	name: string;
	children: React.ReactNode;
}

const Brand: React.FC<BrandProps> = ({ children, name }) => {
	const { classes, cx } = useStyles();
	const { data } = useFindAllCategoriesQuery();
	const categories = data?.findAllCategories as Category[] | undefined;

	const categoryId = categories?.find((category) => category.name === name)?.category_id;

	const formData: SearchFormInputs = {
		AdAuto: {
			make_cid: Number(categoryId),
		},
	};

	return (
		<Link
			href={{
				pathname: '/listings/search',
				query: formDataToQuery(formData),
			}}
		>
			<UnstyledButton className={cx(classes.flexColumn, classes.flexAlignCenter, classes.gap1)}>
				{children}
				<Anchor underline>{name}</Anchor>
			</UnstyledButton>
		</Link>
	);
};

const DIMENSIONS = {
	width: 96,
	height: 96,
} as const;

const BrandSection = () => {
	const { classes, cx } = useStyles();
	return (
		<Section>
			<Title align={'center'}>BRANDS</Title>
			<div className={cx(classes.flexAlignCenter, classes.justifyBet)}>
				<Brand name={'Renault'}>
					<Renault {...DIMENSIONS} />
				</Brand>
				<Brand name={'Volkswagen'}>
					<Volkswagen {...DIMENSIONS} />
				</Brand>
				<Brand name={'Audi'}>
					<Audi {...DIMENSIONS} />
				</Brand>
				<Brand name={'Peugeot'}>
					<Peugeot {...DIMENSIONS} />
				</Brand>
				<Brand name={'Opel'}>
					<Opel {...DIMENSIONS} />
				</Brand>
				<Brand name={'Ford'}>
					<Ford {...DIMENSIONS} />
				</Brand>
				<Brand name={'Mercedes'}>
					<Mercedes {...DIMENSIONS} />
				</Brand>
				<Brand name={'BMW'}>
					<BMW {...DIMENSIONS} />
				</Brand>
			</div>
		</Section>
	);
};
export default BrandSection;
