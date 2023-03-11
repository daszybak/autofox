import React from 'react';
import Link from '../link/link.component';
import { useRouter } from 'next/router';

interface Link {
	label: string;
	path: string;
}

interface Props {
	data: Link[];
	className?: string;
}

const Links: React.FC<Props> = ({ data, className }) => {
	const router = useRouter();
	const renderedLinks = data.map(({ path, label }) => {
		return (
			<li key={label} className={className}>
				<Link label={label} href={path} active={router.asPath === path} />
			</li>
		);
	});

	return <ul>{renderedLinks}</ul>;
};
export default Links;
