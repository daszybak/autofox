import { InMemoryCacheConfig } from '@apollo/client';
import { StrictTypedTypePolicies } from '../generated/generated';

export const typePolicies: StrictTypedTypePolicies = {
	Ad: {
		keyFields: ['ad_id'],
	},
	AdAuto: {
		keyFields: ['ad_auto_id'],
	},
	Category: {
		keyFields: ['category_id'],
	},
	File: {
		keyFields: ['file_id'],
	},
	User: {
		keyFields: ['user_sub'],
	},
	List: {
		keyFields: ['list_id'],
	},
};

export const cacheConfig: InMemoryCacheConfig = {
	typePolicies,
};
