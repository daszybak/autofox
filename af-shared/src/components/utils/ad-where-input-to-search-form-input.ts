import _ from 'lodash';

import { AdAutoWhereInput, AdWhereInput, InputMaybe } from '../../graphql';
import { SearchFormInputs } from '../types/form-inputs';
import { queryDefaultValues } from '../constants/query-params';
import { AttributeDefinition } from '../types/attribute-definitions';

export const adWhereInputToSearchFormInput = (where: AdWhereInput, attributeDefinitions: AttributeDefinition[]): SearchFormInputs => {
	const whereInputToFormInput = (data: InputMaybe<AdAutoWhereInput> | undefined | InputMaybe<AdWhereInput>) => {
		return _(data)
			.map((value, key) => {
				const attributeDefintion = attributeDefinitions.find((attributeDefintion) => attributeDefintion.attribute === key);
				if (!attributeDefintion) return;
				if (
					(attributeDefintion.dataType === 'boolean' ||
						(attributeDefintion.dataType === 'int' && attributeDefintion.inputType === 'select') ||
						attributeDefintion?.dataType === 'Category') &&
					value &&
					'equals' in value
				) {
					return {
						[key]: value?.equals,
					};
				}
				if (
					(attributeDefintion.dataType === 'int' || attributeDefintion.dataType === 'DateTime') &&
					attributeDefintion.inputType === 'range' &&
					value &&
					('lte' in value || 'gte' in value)
				) {
					return {
						[key]: [value.gte ?? '', value.lte ?? ''],
					};
				}
			})
			.reduce((memo, current) => _.assign(memo, current), {});
	};

	const AdAuto: SearchFormInputs['AdAuto'] = whereInputToFormInput(where.ad_auto?.is);

	const Ad: SearchFormInputs['Ad'] = whereInputToFormInput(where);

	console.log('adWhereInputToSearchFormInput');

	console.log('AdAuto', AdAuto);
	console.log('Ad', Ad);

	return { ...queryDefaultValues, Ad, AdAuto };
};
