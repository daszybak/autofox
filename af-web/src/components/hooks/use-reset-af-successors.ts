import { useCallback, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { AttributeDefinitionsCtx } from '../context/attributeDefinitionsCtx.component';

export const useResetAfSuccessors = () => {
	const { setValue } = useFormContext();
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);

	const resetAfSuccessors = useCallback(
		(successors: (string | null)[] | undefined) => {
			if (!Array.isArray(successors)) return;
			successors.forEach((successor) => {
				const successorVocabulary = attributeDefinitions.find((attributeDefinition) => attributeDefinition.categoryCode === successor);
				if (successorVocabulary) {
					console.log('successorVocabulary', successorVocabulary);

					setValue(`${successorVocabulary.model}.${successorVocabulary.attribute}`, '');
				}
			});
		},
		[setValue, attributeDefinitions],
	);

	return resetAfSuccessors;
};
