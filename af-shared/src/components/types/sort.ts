import { AdAutoOrderByWithRelationInput, AdOrderByWithRelationInput, SortOrder, InputMaybe } from '../../graphql';

type PickByValue<T, ValueType> = Pick<T, { [Key in keyof T]-?: T[Key] extends ValueType ? Key : never }[keyof T]>;

export type Sort = PickByValue<AdOrderByWithRelationInput, InputMaybe<SortOrder> | undefined> & {
	ad_auto?: PickByValue<AdAutoOrderByWithRelationInput, InputMaybe<SortOrder> | undefined>;
};
