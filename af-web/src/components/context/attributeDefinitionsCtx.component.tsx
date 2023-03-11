import { createContext, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import _ from 'lodash';

import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { getAttributeDefinitions } from '../api/get-attribute-definitions';

export const AttributeDefinitionsCtx = createContext<AttributeDefinition[]>([]);

interface AttributeDefinitionsCtxProviderProps {
	children: React.ReactNode;
	attributeDefinitions: AttributeDefinition[];
}

const AttributeDefinitionsCtxProvider: React.FC<AttributeDefinitionsCtxProviderProps> = ({ children, attributeDefinitions: PagePropsAttributeDefinitions }) => {
	const [AttributeDefinitions, setAttributeDefinitions] = useState<AttributeDefinition[]>(PagePropsAttributeDefinitions ?? []);

	useIsomorphicEffect(() => {
		if (!AttributeDefinitions) return;
		const _getAttributeDefinitions = _.once(async () => {
			const AttributeDefinitions = await getAttributeDefinitions();
			setAttributeDefinitions(AttributeDefinitions);
		});
		_getAttributeDefinitions();
	}, []);

	return <AttributeDefinitionsCtx.Provider value={AttributeDefinitions}>{children}</AttributeDefinitionsCtx.Provider>;
};

export default AttributeDefinitionsCtxProvider;
