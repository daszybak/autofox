import { useTranslation } from 'next-i18next';

export const useDashboardLinks = () => {
	const { t } = useTranslation();

	return {
		mainLinks: [
			{
				name: t<string>('common:header.nav.messages'),
				path: '/account/messages',
			},
			{
				name: t<string>('common:header.nav.analytics'),
				path: '/account/analytics',
			},
		],
		myAdLinks: [
			{
				name: t<string>('common:header.nav.favorites'),
				path: '/account/favorites',
			},
			{
				name: t<string>('common:header.nav.sell'),
				path: '/sell',
			},
			{
				name: t<string>('common:header.nav.my-ads'),
				path: '/account/my-ads',
			},
			{
				name: t<string>('common:header.nav.notifications'),
				path: '/account/notifications',
			},
			{
				name: t<string>('common:header.nav.promotion-plans'),
				path: '/account/promotions',
			},
			{
				name: t<string>('common:header.nav.my-searches'),
				path: '/account/saved-searches',
			},
		],
		accountLinks: [
			{
				name: t<string>('common:header.nav.settings'),
				path: '/account/settings',
			},
		],
	};
};
