import { forwardRef } from 'react';
import { Text, TextProps } from '@mantine/core';

import { Attribute } from 'af-shared/lib/components/types/attribute-definitions';

import { useGetAfKey } from '../../hooks/use-get-af-key';

interface Props extends TextProps {
	attribute: Attribute;
}

const AfKey: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ attribute, ...other }, ref) => {
	const getAfKey = useGetAfKey();

	return (
		<Text ref={ref} {...other}>
			{getAfKey(attribute)}
		</Text>
	);
});

AfKey.displayName = 'AfKey';

export default AfKey;
