import { sortMap } from './select-item-sort-map';

export const queryDefaultValues = {
	WithImage: false,
	Page: 1,
	Sort: sortMap.createdAtDesc,
} as const;

export const QUERY_VALUE_SEPARATOR = ':';
