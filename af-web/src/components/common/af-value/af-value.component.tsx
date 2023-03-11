import { forwardRef } from 'react';
import { Text, TextProps } from '@mantine/core';
import _ from 'lodash';

import { Ad } from 'af-shared/lib/graphql';
import { Attribute } from 'af-shared/lib/components/types/attribute-definitions';

import { useGetAfValue } from '../../hooks/use-get-af-value';

interface Props extends TextProps {
	ad: Ad | null | undefined;
	attribute: Attribute;
	format?: (value: any) => string;
}

const AfValue: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ ad, attribute, format, ...other }, ref) => {
	const getAfValue = useGetAfValue();

	const afValue = getAfValue(ad, attribute, format);

	return (
		<Text ref={ref} {...other}>
			{afValue}
		</Text>
	);
});

AfValue.displayName = 'AfValue';

export default AfValue;
