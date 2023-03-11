import { Attribute } from 'af-shared/lib/components/types/attribute-definitions';
import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';

export const useGetAfKey = () => {
	const { t } = useTranslation();
	const getAfKey = useCallback(
		(attribute: Attribute) => {
			return t<string>(`common:filter.${attribute}`);
		},
		[t],
	);

	return getAfKey;
};
