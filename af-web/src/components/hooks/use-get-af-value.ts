import { useCallback, useContext } from 'react';
import _ from 'lodash';

import { Ad } from 'af-shared/lib/graphql';
import { Attribute } from 'af-shared/lib/components/types/attribute-definitions';

import { AttributeDefinitionsCtx } from '../context/attributeDefinitionsCtx.component';
import { useAttributeValueToAfValue } from './use-attribute-value-to-af-value';

export const useGetAfValue = () => {
	const attributeValueToAfValue = useAttributeValueToAfValue();
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);

	const getAfValue = useCallback(
		(ad: Ad | null | undefined, attribute: Attribute, format?: (value: any) => string) => {
			const attributeDefiniton = attributeDefinitions.find((a) => a.attribute === attribute);
			const value =
				ad && attributeDefiniton
					? attributeDefiniton?.model === 'AdAuto'
						? ad[_.snakeCase(attributeDefiniton.model) as keyof Ad][attributeDefiniton.attribute]
						: ad[attributeDefiniton.attribute as keyof Ad]
					: '';
			return attributeValueToAfValue(value, attributeDefiniton, format);
		},
		[attributeDefinitions, attributeValueToAfValue],
	);

	return getAfValue;
};
