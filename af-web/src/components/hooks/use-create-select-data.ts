import { useCallback } from 'react';
import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import { useTranslation } from 'next-i18next';
import { INFINITE } from '../constants/select-range';

export const useCreateSelectData = (attributeDefintion: AttributeDefinition, withTranslatedOption: boolean = false) => {
	const { t } = useTranslation();
	const options = attributeDefintion.options;
	const optionsLength = options?.length ?? 0;
	const hasOptions = options && optionsLength > 1;

	const createSelectData = useCallback(
		(second?: boolean) => {
			if (hasOptions) {
				return Array.from(new Array(withTranslatedOption ? optionsLength + 1 : optionsLength)).map((_, i) => {
					const value = options[withTranslatedOption ? i - 1 : i];
					if (withTranslatedOption && i === 0)
						return {
							value: '',
							label: t<string>(`common:filter.${attributeDefintion.attribute}`),
						};
					if (second && i === optionsLength)
						return {
							label: `${value}+`,
							value: INFINITE.toString(),
						};
					return { value: value.toString(), label: value.toString() };
				});
			}
		},
		[withTranslatedOption, t, attributeDefintion, hasOptions, optionsLength, options],
	);

	return createSelectData;
};
