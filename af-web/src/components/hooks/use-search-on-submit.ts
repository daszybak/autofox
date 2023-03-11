import { useCallback } from 'react';
import { SearchFormInputs } from 'af-shared/lib/components/types/form-inputs';
import { formDataToQuery } from 'af-shared/lib/components/utils/form-data-to-query';
import Router from 'next/router';
import { SubmitHandler } from 'react-hook-form';

export const useSearchOnSubmit = (): SubmitHandler<SearchFormInputs> =>
	useCallback(
		(data) =>
			Router.push(
				{
					query: formDataToQuery(data),
				},
				undefined,
				{ shallow: true },
			),
		[],
	);
