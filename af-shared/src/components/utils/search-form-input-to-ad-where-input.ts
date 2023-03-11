import _ from 'lodash';
import { AdAutoFieldsFragment, AdAutoWhereInput, AdFieldsFragment, AdWhereInput, InputMaybe } from '../../graphql';
import { FILE_CODES } from '../constants/file';
import { SearchFormInputs } from '../types/form-inputs';
import { RangeTuple } from '../types/range-tuple';
import { AttributeDefinition } from '../types/attribute-definitions';
import { ExtendValue } from '../types/form-inputs';

export const searchFormInputsToAdWhereInput = (data: SearchFormInputs, attributeDefinitions: AttributeDefinition[]): AdWhereInput => {
	console.log('attributeDefinitions', attributeDefinitions);

	const formInputToWhereInput = (
		data:
			| Partial<ExtendValue<AdFieldsFragment, number | null | undefined, RangeTuple>>
			| undefined
			| Partial<ExtendValue<AdAutoFieldsFragment, number | null | undefined, RangeTuple>>,
		attributeDefinitions: AttributeDefinition[],
	) => {
		return _(data)
			.pickBy(_.identity)
			.mapValues((value, key) => {
				const attributeDefintion = attributeDefinitions.find((attributeDefintion) => attributeDefintion.attribute === key);
				if (attributeDefintion?.dataType === 'boolean') return { equals: value === 'true' };
				if (attributeDefintion?.dataType === 'DateTime' && attributeDefintion.inputType === 'range') {
					return {
						...(value[0] ? { gte: value[0] } : {}),
						...(value[1] ? { lte: value[1] } : {}),
					};
				}
				if (attributeDefintion?.dataType === 'int' && attributeDefintion.inputType === 'range') {
					return {
						...(_.toNumber(value[0]) ? { gte: _.toNumber(value[0]) } : {}),
						...(_.toNumber(value[1]) ? { lte: _.toNumber(value[1]) } : {}),
					};
				}
				return { equals: _.toNumber(value) };
			})
			.value();
	};

	const adInput: InputMaybe<AdWhereInput> = formInputToWhereInput(data.Ad, attributeDefinitions);
	const adAutoInput: InputMaybe<AdAutoWhereInput> = formInputToWhereInput(data.AdAuto, attributeDefinitions);

	console.log('adauto', adAutoInput);
	console.log('ad', adInput);

	const WithImage: boolean = data.WithImage ?? false;

	return {
		...adInput,
		ad_auto: {
			is: adAutoInput,
		},
		...(WithImage && {
			files: {
				some: {
					code: {
						equals: FILE_CODES.IMAGE,
					},
				},
			},
		}),
	};
};
