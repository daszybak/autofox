import { ParsedUrlQuery } from 'querystring';
import { parse } from 'qs';
import _ from 'lodash';

import { SearchFormInputs } from '../types/form-inputs';
import { queryDefaultValues } from '../constants/query-params';

export const queryToFormData = (query: ParsedUrlQuery): SearchFormInputs => ({
	Ad: _.get(query, 'Ad') ? parse(_.get(query, 'Ad') as string) : {},
	AdAuto: _.get(query, 'AdAuto') ? parse(_.get(query, 'AdAuto') as string) : {},
	WithImage: _.get(query, 'WithImage') ? Boolean(_.get(query, 'WithImage')) : queryDefaultValues.WithImage,
	Sort: _.get(query, 'Sort') ? parse(_.get(query, 'Sort') as string) : queryDefaultValues.Sort,
	Page: _.get(query, 'Page') ? _.toNumber(_.get(query, 'Page')) : queryDefaultValues.Page,
});
