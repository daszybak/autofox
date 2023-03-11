import Link from 'next/link';
import { SVGProps } from 'react';
import LogoSVG from 'public/icons/logo.svg';

interface LogoProps extends SVGProps<'svg'> {}

const Logo: React.FC<LogoProps> = (props) => (
	<Link href={'/'}>
		<a>
			<LogoSVG height={52} width={142} {...props} />
		</a>
	</Link>
);

export default Logo;
