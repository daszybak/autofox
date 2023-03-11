import NoRating from 'public/icons/no-rating.svg';
import HighPrice from 'public/icons/high-price.svg';
import IncreasedPrice from 'public/icons/increased-price.svg';
import OkPrice from 'public/icons/ok-price.svg';
import GoodPrice from 'public/icons/good-price.svg';
import ExcellentPrice from 'public/icons/excellent-price.svg';

export const RatingIcons = [
	{ rating: 0, icon: NoRating, label: 'No Rating' },
	{ rating: 1, icon: HighPrice, label: 'High Price' },
	{ rating: 2, icon: IncreasedPrice, label: 'Increased Price' },
	{ rating: 3, icon: OkPrice, label: 'Ok Price' },
	{ rating: 4, icon: GoodPrice, label: 'Good Price' },
	{ rating: 5, icon: ExcellentPrice, label: 'Excellent Price' },
] as const;
