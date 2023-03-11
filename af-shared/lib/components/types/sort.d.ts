import { AdAutoOrderByWithRelationInput, AdOrderByWithRelationInput, SortOrder, InputMaybe } from '../../graphql';
declare type PickByValue<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T]>;
export declare type Sort = PickByValue<AdOrderByWithRelationInput, InputMaybe<SortOrder> | undefined> & {
    ad_auto?: PickByValue<AdAutoOrderByWithRelationInput, InputMaybe<SortOrder> | undefined>;
};
export {};
