import { Anchor } from '@mantine/core';
import { useTranslation } from 'next-i18next';
import { UrlObject } from 'url';
import NextLink, { LinkProps } from 'next/link';

interface Props extends LinkProps {
	navName: string;
	format?: (label: string) => string;
}

const Link: React.FC<Props> = ({ href, navName, format, ...other }) => {
	const nameLowerCase = navName.toLowerCase();
	const { t } = useTranslation();

	let formattedLabel;

	const label = t<string>(`common:header.nav.${nameLowerCase}`);
	formattedLabel = format ? format(label) : label;

	return (
		<NextLink href={href} key={nameLowerCase}>
			<Anchor {...other}>{formattedLabel}</Anchor>
		</NextLink>
	);
};
export default Link;
