import { AdFieldsFragment, AdAutoFieldsFragment } from '../../graphql';
import { RangeTuple } from './range-tuple';
import { Sort } from './sort';

export type ExtendValue<T, SourceValue, TargetValue> = {
	[Key in keyof T]: T[Key] extends SourceValue ? SourceValue | TargetValue : T[Key];
};

export type AdFieldsFragmentExtended = ExtendValue<AdFieldsFragment, number | null | undefined, RangeTuple>;
export type AdAutoFieldsFragmentExtended = ExtendValue<AdAutoFieldsFragment, number | null | undefined, RangeTuple>;

export type SearchFormInputs = {
	Ad?: Partial<AdFieldsFragmentExtended>;
	AdAuto?: Partial<AdAutoFieldsFragmentExtended>;
	WithImage?: boolean | undefined;
	Sort?: Sort;
	Page?: number | undefined;
};
