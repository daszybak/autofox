import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Button as ButtonMantine } from '@mantine/core';

interface Props {
	className?: string;
	action: 'buy' | 'sell';
}

const Button: React.FC<Props> = ({ action, className }) => {
	const { t } = useTranslation();

	return (
		<Link href={`/${action}`}>
			<ButtonMantine className={className}>{t<string>(`common:header.nav.${action}`)}</ButtonMantine>
		</Link>
	);
};
export default Button;
