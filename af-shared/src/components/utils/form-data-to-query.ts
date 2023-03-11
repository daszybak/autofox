import { ParsedUrlQuery } from 'querystring';
import { stringify } from 'qs';
import _ from 'lodash';
import { SearchFormInputs } from '../types/form-inputs';
import { removeFalsyValues } from './remove-falsy-values';
import { queryDefaultValues } from '../constants/query-params';

export const formDataToQuery = (data: SearchFormInputs): ParsedUrlQuery => ({
	...(data.Ad && !_.isEmpty(removeFalsyValues(data.Ad)) && { Ad: stringify(removeFalsyValues(data.Ad)) }),
	...(data.AdAuto && !_.isEmpty(removeFalsyValues(data.AdAuto)) && { AdAuto: stringify(removeFalsyValues(data.AdAuto)) }),
	...(data.WithImage === true && { WithImage: data.WithImage.toString() }),
	...(data.Sort && !_.isEqual(data.Sort, queryDefaultValues.Sort) && { Sort: stringify(removeFalsyValues(data.Sort)) }),
	...(data.Page && data.Page !== 1 && { Page: data.Page?.toString() }),
});
