var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
var defaultOptions = {};
export var AdPromotionScalarFieldEnum;
(function (AdPromotionScalarFieldEnum) {
    AdPromotionScalarFieldEnum["AdId"] = "ad_id";
    AdPromotionScalarFieldEnum["PromotionPlanId"] = "promotion_plan_id";
    AdPromotionScalarFieldEnum["TransactionId"] = "transaction_id";
    AdPromotionScalarFieldEnum["UserSub"] = "user_sub";
    AdPromotionScalarFieldEnum["ValidFrom"] = "valid_from";
    AdPromotionScalarFieldEnum["ValidTo"] = "valid_to";
})(AdPromotionScalarFieldEnum || (AdPromotionScalarFieldEnum = {}));
export var AdScalarFieldEnum;
(function (AdScalarFieldEnum) {
    AdScalarFieldEnum["AdId"] = "ad_id";
    AdScalarFieldEnum["Address"] = "address";
    AdScalarFieldEnum["CoordsLatitude"] = "coords_latitude";
    AdScalarFieldEnum["CoordsLongitude"] = "coords_longitude";
    AdScalarFieldEnum["CoordsRadius"] = "coords_radius";
    AdScalarFieldEnum["CreatedAt"] = "created_at";
    AdScalarFieldEnum["DeletedAt"] = "deleted_at";
    AdScalarFieldEnum["IsSold"] = "is_sold";
    AdScalarFieldEnum["ModerationFlag"] = "moderation_flag";
    AdScalarFieldEnum["PriceEurocent"] = "price_eurocent";
    AdScalarFieldEnum["PriceRating"] = "price_rating";
    AdScalarFieldEnum["Text"] = "text";
    AdScalarFieldEnum["Title"] = "title";
    AdScalarFieldEnum["UpdatedAt"] = "updated_at";
    AdScalarFieldEnum["UserSub"] = "user_sub";
})(AdScalarFieldEnum || (AdScalarFieldEnum = {}));
export var BlogScalarFieldEnum;
(function (BlogScalarFieldEnum) {
    BlogScalarFieldEnum["BlogId"] = "blog_id";
    BlogScalarFieldEnum["CreatedAt"] = "created_at";
    BlogScalarFieldEnum["DeletedAt"] = "deleted_at";
    BlogScalarFieldEnum["LanguageCid"] = "language_cid";
    BlogScalarFieldEnum["ModerationFlag"] = "moderation_flag";
    BlogScalarFieldEnum["Slug"] = "slug";
    BlogScalarFieldEnum["Text"] = "text";
    BlogScalarFieldEnum["Title"] = "title";
    BlogScalarFieldEnum["UpdatedAt"] = "updated_at";
    BlogScalarFieldEnum["UserSub"] = "user_sub";
})(BlogScalarFieldEnum || (BlogScalarFieldEnum = {}));
export var CategoryScalarFieldEnum;
(function (CategoryScalarFieldEnum) {
    CategoryScalarFieldEnum["CategoryId"] = "category_id";
    CategoryScalarFieldEnum["Code"] = "code";
    CategoryScalarFieldEnum["CreatedAt"] = "created_at";
    CategoryScalarFieldEnum["DeletedAt"] = "deleted_at";
    CategoryScalarFieldEnum["Icon"] = "icon";
    CategoryScalarFieldEnum["Name"] = "name";
    CategoryScalarFieldEnum["ParentCategoryId"] = "parent_category_id";
    CategoryScalarFieldEnum["UpdatedAt"] = "updated_at";
    CategoryScalarFieldEnum["Weight"] = "weight";
})(CategoryScalarFieldEnum || (CategoryScalarFieldEnum = {}));
export var ListScalarFieldEnum;
(function (ListScalarFieldEnum) {
    ListScalarFieldEnum["IsNotifiableByEmail"] = "is_notifiable_by_email";
    ListScalarFieldEnum["IsNotifiableByPush"] = "is_notifiable_by_push";
    ListScalarFieldEnum["IsNotifiableBySms"] = "is_notifiable_by_sms";
    ListScalarFieldEnum["ListId"] = "list_id";
    ListScalarFieldEnum["ListType"] = "list_type";
    ListScalarFieldEnum["SearchParams"] = "search_params";
    ListScalarFieldEnum["Title"] = "title";
    ListScalarFieldEnum["UserSub"] = "user_sub";
})(ListScalarFieldEnum || (ListScalarFieldEnum = {}));
export var MessagingChannelScalarFieldEnum;
(function (MessagingChannelScalarFieldEnum) {
    MessagingChannelScalarFieldEnum["Address"] = "address";
    MessagingChannelScalarFieldEnum["CreatedAt"] = "created_at";
    MessagingChannelScalarFieldEnum["DeletedAt"] = "deleted_at";
    MessagingChannelScalarFieldEnum["DeviceType"] = "device_type";
    MessagingChannelScalarFieldEnum["MessagingChannelId"] = "messaging_channel_id";
    MessagingChannelScalarFieldEnum["Platform"] = "platform";
    MessagingChannelScalarFieldEnum["UpdatedAt"] = "updated_at";
    MessagingChannelScalarFieldEnum["UserSub"] = "user_sub";
})(MessagingChannelScalarFieldEnum || (MessagingChannelScalarFieldEnum = {}));
export var PromotionPlanScalarFieldEnum;
(function (PromotionPlanScalarFieldEnum) {
    PromotionPlanScalarFieldEnum["CreatedAt"] = "created_at";
    PromotionPlanScalarFieldEnum["DeletedAt"] = "deleted_at";
    PromotionPlanScalarFieldEnum["Price"] = "price";
    PromotionPlanScalarFieldEnum["PromotionPlanId"] = "promotion_plan_id";
    PromotionPlanScalarFieldEnum["PromotionPlanType"] = "promotion_plan_type";
    PromotionPlanScalarFieldEnum["PromotionRegionCid"] = "promotion_region_cid";
    PromotionPlanScalarFieldEnum["Text"] = "text";
    PromotionPlanScalarFieldEnum["Title"] = "title";
    PromotionPlanScalarFieldEnum["UpdatedAt"] = "updated_at";
    PromotionPlanScalarFieldEnum["ValidityPeriod"] = "validity_period";
})(PromotionPlanScalarFieldEnum || (PromotionPlanScalarFieldEnum = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["Asc"] = "asc";
    SortOrder["Desc"] = "desc";
})(SortOrder || (SortOrder = {}));
export var UserPromotionScalarFieldEnum;
(function (UserPromotionScalarFieldEnum) {
    UserPromotionScalarFieldEnum["PromotionPlanId"] = "promotion_plan_id";
    UserPromotionScalarFieldEnum["TransactionId"] = "transaction_id";
    UserPromotionScalarFieldEnum["UserSub"] = "user_sub";
    UserPromotionScalarFieldEnum["ValidFrom"] = "valid_from";
    UserPromotionScalarFieldEnum["ValidTo"] = "valid_to";
})(UserPromotionScalarFieldEnum || (UserPromotionScalarFieldEnum = {}));
export var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["ModerationFlag"] = "moderation_flag";
    UserScalarFieldEnum["Name"] = "name";
    UserScalarFieldEnum["UserSub"] = "user_sub";
})(UserScalarFieldEnum || (UserScalarFieldEnum = {}));
export var UserInfoFieldsFragmentDoc = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfragment userInfoFields on User {\n\t\tname\n\t\tuser_sub\n\t}\n"], ["\n\tfragment userInfoFields on User {\n\t\tname\n\t\tuser_sub\n\t}\n"])));
export var UserDefinedAdFieldsFragmentDoc = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfragment userDefinedAdFields on Ad {\n\t\ttitle\n\t\ttext\n\t\tcoords_latitude\n\t\tcoords_longitude\n\t\tcoords_radius\n\t\taddress\n\t\tprice_eurocent\n\t\tis_sold\n\t}\n"], ["\n\tfragment userDefinedAdFields on Ad {\n\t\ttitle\n\t\ttext\n\t\tcoords_latitude\n\t\tcoords_longitude\n\t\tcoords_radius\n\t\taddress\n\t\tprice_eurocent\n\t\tis_sold\n\t}\n"])));
export var AdminDefinedFieldFragmentDoc = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tfragment adminDefinedField on Ad {\n\t\tmoderation_flag\n\t}\n"], ["\n\tfragment adminDefinedField on Ad {\n\t\tmoderation_flag\n\t}\n"])));
export var AdFieldsFragmentDoc = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tfragment adFields on Ad {\n\t\tad_id\n\t\tcreated_at\n\t\tupdated_at\n\t\tdeleted_at\n\t\tprice_rating\n\t\tuser {\n\t\t\t...userInfoFields\n\t\t}\n\t\t...userDefinedAdFields\n\t\t...adminDefinedField\n\t}\n\t", "\n\t", "\n\t", "\n"], ["\n\tfragment adFields on Ad {\n\t\tad_id\n\t\tcreated_at\n\t\tupdated_at\n\t\tdeleted_at\n\t\tprice_rating\n\t\tuser {\n\t\t\t...userInfoFields\n\t\t}\n\t\t...userDefinedAdFields\n\t\t...adminDefinedField\n\t}\n\t", "\n\t", "\n\t", "\n"])), UserInfoFieldsFragmentDoc, UserDefinedAdFieldsFragmentDoc, AdminDefinedFieldFragmentDoc);
export var FileFieldsFragmentDoc = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tfragment fileFields on File {\n\t\tfile_id\n\t\tfilename\n\t\tfilesize\n\t\tcode\n\t\tpath\n\t}\n"], ["\n\tfragment fileFields on File {\n\t\tfile_id\n\t\tfilename\n\t\tfilesize\n\t\tcode\n\t\tpath\n\t}\n"])));
export var AdAutoFieldsFragmentDoc = gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfragment adAutoFields on AdAuto {\n\t\tad_auto_id\n\t\tcondition_type_cid\n\t\tvehicle_type_cid\n\t\tfuel_type_cid\n\t\ttransmission_type_cid\n\t\tmake_cid\n\t\tmodel_cid\n\t\tvariant_cid\n\t\tbody_type_cid\n\t\tcolor_interior_cid\n\t\tcolor_exterior_cid\n\t\temission_class_cid\n\t\tconditioning_cid\n\t\tyear\n\t\tkm\n\t\tpower_kw\n\t\tregistered_until\n\t\tdoors_num\n\t\tseats_num\n\t\tis_first_owner\n\t\tis_service_book_available\n\t\tis_vehicle_garaged\n\t\tengine_displacement_cm3\n\t\tbattery_capacity_kwh\n\t}\n"], ["\n\tfragment adAutoFields on AdAuto {\n\t\tad_auto_id\n\t\tcondition_type_cid\n\t\tvehicle_type_cid\n\t\tfuel_type_cid\n\t\ttransmission_type_cid\n\t\tmake_cid\n\t\tmodel_cid\n\t\tvariant_cid\n\t\tbody_type_cid\n\t\tcolor_interior_cid\n\t\tcolor_exterior_cid\n\t\temission_class_cid\n\t\tconditioning_cid\n\t\tyear\n\t\tkm\n\t\tpower_kw\n\t\tregistered_until\n\t\tdoors_num\n\t\tseats_num\n\t\tis_first_owner\n\t\tis_service_book_available\n\t\tis_vehicle_garaged\n\t\tengine_displacement_cm3\n\t\tbattery_capacity_kwh\n\t}\n"])));
export var AdPromotionFieldFragmentDoc = gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tfragment adPromotionField on AdPromotion {\n\t\tpromotion_plan_id\n\t}\n"], ["\n\tfragment adPromotionField on AdPromotion {\n\t\tpromotion_plan_id\n\t}\n"])));
export var AdAdAutoFileFieldsFragmentDoc = gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tfragment adAdAutoFileFields on Ad {\n\t\t...adFields\n\t\tfiles {\n\t\t\t...fileFields\n\t\t}\n\t\tad_auto {\n\t\t\t...adAutoFields\n\t\t}\n\t\tAdPromotion {\n\t\t\t...adPromotionField\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\tfragment adAdAutoFileFields on Ad {\n\t\t...adFields\n\t\tfiles {\n\t\t\t...fileFields\n\t\t}\n\t\tad_auto {\n\t\t\t...adAutoFields\n\t\t}\n\t\tAdPromotion {\n\t\t\t...adPromotionField\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n\t", "\n"])), AdFieldsFragmentDoc, FileFieldsFragmentDoc, AdAutoFieldsFragmentDoc, AdPromotionFieldFragmentDoc);
export var AdPromotionFieldsFragmentDoc = gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tfragment adPromotionFields on AdPromotion {\n\t\tvalid_from\n\t\tvalid_to\n\t\ttransaction_id\n\t}\n"], ["\n\tfragment adPromotionFields on AdPromotion {\n\t\tvalid_from\n\t\tvalid_to\n\t\ttransaction_id\n\t}\n"])));
export var BlogFieldsFragmentDoc = gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tfragment blogFields on Blog {\n\t\tblog_id\n\t\tcreated_at\n\t\tupdated_at\n\t\tdeleted_at\n\t\ttitle\n\t\tslug\n\t\ttext\n\t\tmoderation_flag\n\t}\n"], ["\n\tfragment blogFields on Blog {\n\t\tblog_id\n\t\tcreated_at\n\t\tupdated_at\n\t\tdeleted_at\n\t\ttitle\n\t\tslug\n\t\ttext\n\t\tmoderation_flag\n\t}\n"])));
export var UserInfoFragmentDoc = gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\tfragment userInfo on User {\n\t\tuser_sub\n\t\tname\n\t}\n"], ["\n\tfragment userInfo on User {\n\t\tuser_sub\n\t\tname\n\t}\n"])));
export var CategoryFieldsFragmentDoc = gql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\tfragment categoryFields on Category {\n\t\tcode\n\t\tname\n\t\tcategory_id\n\t\ticon\n\t\tparent_category_id\n\t\tweight\n\t\tcreated_at\n\t\tupdated_at\n\t}\n"], ["\n\tfragment categoryFields on Category {\n\t\tcode\n\t\tname\n\t\tcategory_id\n\t\ticon\n\t\tparent_category_id\n\t\tweight\n\t\tcreated_at\n\t\tupdated_at\n\t}\n"])));
export var ListAdFieldsFragmentDoc = gql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\tfragment listAdFields on ListAd {\n\t\tad_id\n\t\tlist_id\n\t}\n"], ["\n\tfragment listAdFields on ListAd {\n\t\tad_id\n\t\tlist_id\n\t}\n"])));
export var ListFieldsFragmentDoc = gql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\tfragment listFields on List {\n\t\tlist_id\n\t\tlist_type\n\t\ttitle\n\t\tsearch_params\n\t\tis_notifiable_by_email\n\t\tis_notifiable_by_push\n\t\tis_notifiable_by_sms\n\t\tuser_sub\n\t\tListAd {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tfragment listFields on List {\n\t\tlist_id\n\t\tlist_type\n\t\ttitle\n\t\tsearch_params\n\t\tis_notifiable_by_email\n\t\tis_notifiable_by_push\n\t\tis_notifiable_by_sms\n\t\tuser_sub\n\t\tListAd {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"])), ListAdFieldsFragmentDoc);
export var ParentChildFieldsFragmentDoc = gql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\tfragment ParentChildFields on PromotionPlanRelation {\n\t\tparent_promotion_plan_id\n\t\tchild_promotion_plan_id\n\t\tcount\n\t\treccurence\n\t}\n"], ["\n\tfragment ParentChildFields on PromotionPlanRelation {\n\t\tparent_promotion_plan_id\n\t\tchild_promotion_plan_id\n\t\tcount\n\t\treccurence\n\t}\n"])));
export var PromotionPlansFieldsFragmentDoc = gql(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\tfragment promotionPlansFields on PromotionPlan {\n\t\tpromotion_plan_id\n\t\tcreated_at\n\t\tupdated_at\n\t\tdeleted_at\n\t\ttitle\n\t\ttext\n\t\tprice\n\t\tvalidity_period\n\t\tpromotion_plan_type\n\t\tParentPromotionPlan {\n\t\t\t...ParentChildFields\n\t\t}\n\t\tChildPromotionPlan {\n\t\t\t...ParentChildFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tfragment promotionPlansFields on PromotionPlan {\n\t\tpromotion_plan_id\n\t\tcreated_at\n\t\tupdated_at\n\t\tdeleted_at\n\t\ttitle\n\t\ttext\n\t\tprice\n\t\tvalidity_period\n\t\tpromotion_plan_type\n\t\tParentPromotionPlan {\n\t\t\t...ParentChildFields\n\t\t}\n\t\tChildPromotionPlan {\n\t\t\t...ParentChildFields\n\t\t}\n\t}\n\t", "\n"])), ParentChildFieldsFragmentDoc);
export var CreateAdDocument = gql(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\tmutation CreateAd($data: AdCreateWithoutUserInput!) {\n\t\tcreateAd(data: $data) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation CreateAd($data: AdCreateWithoutUserInput!) {\n\t\tcreateAd(data: $data) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"])), AdAdAutoFileFieldsFragmentDoc);
/**
 * __useCreateAdMutation__
 *
 * To run a mutation, you first call `useCreateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdMutation, { data, loading, error }] = useCreateAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAdMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateAdDocument, options);
}
export var FindAllAdsDocument = gql(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n\tquery FindAllAds($where: AdWhereInput, $orderBy: [AdOrderByWithRelationInput!], $cursor: AdWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllAds(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery FindAllAds($where: AdWhereInput, $orderBy: [AdOrderByWithRelationInput!], $cursor: AdWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllAds(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"])), AdAdAutoFileFieldsFragmentDoc);
/**
 * __useFindAllAdsQuery__
 *
 * To run a query within a React component, call `useFindAllAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllAdsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useFindAllAdsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllAdsDocument, options);
}
export function useFindAllAdsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllAdsDocument, options);
}
export var FindUniqueAdWhereAdIdEqualsDocument = gql(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n\tquery FindUniqueAdWhereAdIdEquals($where: AdWhereUniqueInput!) {\n\t\tfindUniqueAd(where: $where) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery FindUniqueAdWhereAdIdEquals($where: AdWhereUniqueInput!) {\n\t\tfindUniqueAd(where: $where) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"])), AdAdAutoFileFieldsFragmentDoc);
/**
 * __useFindUniqueAdWhereAdIdEqualsQuery__
 *
 * To run a query within a React component, call `useFindUniqueAdWhereAdIdEqualsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueAdWhereAdIdEqualsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueAdWhereAdIdEqualsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueAdWhereAdIdEqualsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindUniqueAdWhereAdIdEqualsDocument, options);
}
export function useFindUniqueAdWhereAdIdEqualsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindUniqueAdWhereAdIdEqualsDocument, options);
}
export var AggregateAdsWhereDocument = gql(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n\tquery AggregateAdsWhere($where: AdWhereInput) {\n\t\taggregateAds(where: $where, _count: { ad_id: true }) {\n\t\t\t_count {\n\t\t\t\tad_id\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tquery AggregateAdsWhere($where: AdWhereInput) {\n\t\taggregateAds(where: $where, _count: { ad_id: true }) {\n\t\t\t_count {\n\t\t\t\tad_id\n\t\t\t}\n\t\t}\n\t}\n"])));
/**
 * __useAggregateAdsWhereQuery__
 *
 * To run a query within a React component, call `useAggregateAdsWhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useAggregateAdsWhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAggregateAdsWhereQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAggregateAdsWhereQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(AggregateAdsWhereDocument, options);
}
export function useAggregateAdsWhereLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(AggregateAdsWhereDocument, options);
}
export var RemoveAdDocument = gql(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n\tmutation removeAd($id: Int!) {\n\t\tremoveAd(where: { ad_id: $id }) {\n\t\t\tad_id\n\t\t}\n\t}\n"], ["\n\tmutation removeAd($id: Int!) {\n\t\tremoveAd(where: { ad_id: $id }) {\n\t\t\tad_id\n\t\t}\n\t}\n"])));
/**
 * __useRemoveAdMutation__
 *
 * To run a mutation, you first call `useRemoveAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAdMutation, { data, loading, error }] = useRemoveAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveAdMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemoveAdDocument, options);
}
export var UpdateAdDocument = gql(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n\tmutation updateAd($id: Int!, $data: AdUpdateInput!) {\n\t\tupdateAd(where: { ad_id: $id }, data: $data) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation updateAd($id: Int!, $data: AdUpdateInput!) {\n\t\tupdateAd(where: { ad_id: $id }, data: $data) {\n\t\t\t...adAdAutoFileFields\n\t\t}\n\t}\n\t", "\n"])), AdAdAutoFileFieldsFragmentDoc);
/**
 * __useUpdateAdMutation__
 *
 * To run a mutation, you first call `useUpdateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdMutation, { data, loading, error }] = useUpdateAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateAdDocument, options);
}
export var EstimateAdPriceDocument = gql(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n\tquery estimateAdPrice {\n\t\testimateAdPrice {\n\t\t\tprice_eurocent\n\t\t}\n\t}\n"], ["\n\tquery estimateAdPrice {\n\t\testimateAdPrice {\n\t\t\tprice_eurocent\n\t\t}\n\t}\n"])));
/**
 * __useEstimateAdPriceQuery__
 *
 * To run a query within a React component, call `useEstimateAdPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useEstimateAdPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEstimateAdPriceQuery({
 *   variables: {
 *   },
 * });
 */
export function useEstimateAdPriceQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(EstimateAdPriceDocument, options);
}
export function useEstimateAdPriceLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(EstimateAdPriceDocument, options);
}
export var CreateAdPromotionDocument = gql(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n\tmutation CreateAdPromotion($data: AdPromotionCreateInput!) {\n\t\tcreateAdPromotion(data: $data) {\n\t\t\t...adPromotionFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation CreateAdPromotion($data: AdPromotionCreateInput!) {\n\t\tcreateAdPromotion(data: $data) {\n\t\t\t...adPromotionFields\n\t\t}\n\t}\n\t", "\n"])), AdPromotionFieldsFragmentDoc);
/**
 * __useCreateAdPromotionMutation__
 *
 * To run a mutation, you first call `useCreateAdPromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdPromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdPromotionMutation, { data, loading, error }] = useCreateAdPromotionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAdPromotionMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateAdPromotionDocument, options);
}
export var FindAllBlogsDocument = gql(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n\tquery FindAllBlogs($where: BlogWhereInput, $orderBy: [BlogOrderByWithRelationInput!], $cursor: BlogWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllBlogs(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...blogFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery FindAllBlogs($where: BlogWhereInput, $orderBy: [BlogOrderByWithRelationInput!], $cursor: BlogWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllBlogs(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...blogFields\n\t\t}\n\t}\n\t", "\n"])), BlogFieldsFragmentDoc);
/**
 * __useFindAllBlogsQuery__
 *
 * To run a query within a React component, call `useFindAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllBlogsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useFindAllBlogsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllBlogsDocument, options);
}
export function useFindAllBlogsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllBlogsDocument, options);
}
export var CreateBlogDocument = gql(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n\tmutation CreateBlog($data: BlogCreateWithoutUserInput!) {\n\t\tcreateBlog(data: $data) {\n\t\t\t...blogFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation CreateBlog($data: BlogCreateWithoutUserInput!) {\n\t\tcreateBlog(data: $data) {\n\t\t\t...blogFields\n\t\t}\n\t}\n\t", "\n"])), BlogFieldsFragmentDoc);
/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateBlogDocument, options);
}
export var UpdateBlogDocument = gql(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n\tmutation UpdateBlog($data: BlogUpdateInput!, $id: Int!) {\n\t\tupdateBlog(data: $data, where: { blog_id: $id }) {\n\t\t\t...blogFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation UpdateBlog($data: BlogUpdateInput!, $id: Int!) {\n\t\tupdateBlog(data: $data, where: { blog_id: $id }) {\n\t\t\t...blogFields\n\t\t}\n\t}\n\t", "\n"])), BlogFieldsFragmentDoc);
/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateBlogDocument, options);
}
export var RemoveBlogDocument = gql(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n\tmutation removeBlog($id: Int!) {\n\t\tremoveBlog(where: { blog_id: $id }) {\n\t\t\tblog_id\n\t\t}\n\t}\n"], ["\n\tmutation removeBlog($id: Int!) {\n\t\tremoveBlog(where: { blog_id: $id }) {\n\t\t\tblog_id\n\t\t}\n\t}\n"])));
/**
 * __useRemoveBlogMutation__
 *
 * To run a mutation, you first call `useRemoveBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBlogMutation, { data, loading, error }] = useRemoveBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveBlogMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemoveBlogDocument, options);
}
export var FindAllCategoriesDocument = gql(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n\tquery findAllCategories(\n\t\t$where: CategoryWhereInput\n\t\t$orderBy: [CategoryOrderByWithRelationInput!]\n\t\t$cursor: CategoryWhereUniqueInput\n\t\t$take: Int\n\t\t$skip: Int\n\t\t$distinct: [CategoryScalarFieldEnum!]\n\t) {\n\t\tfindAllCategories(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery findAllCategories(\n\t\t$where: CategoryWhereInput\n\t\t$orderBy: [CategoryOrderByWithRelationInput!]\n\t\t$cursor: CategoryWhereUniqueInput\n\t\t$take: Int\n\t\t$skip: Int\n\t\t$distinct: [CategoryScalarFieldEnum!]\n\t) {\n\t\tfindAllCategories(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useFindAllCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useFindAllCategoriesQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllCategoriesDocument, options);
}
export function useFindAllCategoriesLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllCategoriesDocument, options);
}
export var FindAllCategoriesOrderByWeightDocument = gql(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n\tquery findAllCategoriesOrderByWeight($sortOrder: SortOrder!, $cat_code: String) {\n\t\tfindAllCategories(orderBy: [{ weight: $sortOrder }, { updated_at: desc }], where: { code: { equals: $cat_code } }) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery findAllCategoriesOrderByWeight($sortOrder: SortOrder!, $cat_code: String) {\n\t\tfindAllCategories(orderBy: [{ weight: $sortOrder }, { updated_at: desc }], where: { code: { equals: $cat_code } }) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useFindAllCategoriesOrderByWeightQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesOrderByWeightQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesOrderByWeightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesOrderByWeightQuery({
 *   variables: {
 *      sortOrder: // value for 'sortOrder'
 *      cat_code: // value for 'cat_code'
 *   },
 * });
 */
export function useFindAllCategoriesOrderByWeightQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllCategoriesOrderByWeightDocument, options);
}
export function useFindAllCategoriesOrderByWeightLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllCategoriesOrderByWeightDocument, options);
}
export var FindAllCategoriesWhereCodeEqualsDocument = gql(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n\tquery findAllCategoriesWhereCodeEquals($code: String!) {\n\t\tfindAllCategories(where: { code: { equals: $code } }) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery findAllCategoriesWhereCodeEquals($code: String!) {\n\t\tfindAllCategories(where: { code: { equals: $code } }) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useFindAllCategoriesWhereCodeEqualsQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesWhereCodeEqualsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesWhereCodeEqualsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesWhereCodeEqualsQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useFindAllCategoriesWhereCodeEqualsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllCategoriesWhereCodeEqualsDocument, options);
}
export function useFindAllCategoriesWhereCodeEqualsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllCategoriesWhereCodeEqualsDocument, options);
}
export var CreateCategoryDocument = gql(templateObject_32 || (templateObject_32 = __makeTemplateObject(["\n\tmutation createCategory($data: CategoryCreateInput!) {\n\t\tcreateCategory(data: $data) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation createCategory($data: CategoryCreateInput!) {\n\t\tcreateCategory(data: $data) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateCategoryDocument, options);
}
export var RemoveCategoryDocument = gql(templateObject_33 || (templateObject_33 = __makeTemplateObject(["\n\tmutation removeCategory($id: Int!) {\n\t\tremoveCategory(where: { category_id: $id }) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation removeCategory($id: Int!) {\n\t\tremoveCategory(where: { category_id: $id }) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useRemoveCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCategoryMutation, { data, loading, error }] = useRemoveCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCategoryMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemoveCategoryDocument, options);
}
export var UpdateCategoryDocument = gql(templateObject_34 || (templateObject_34 = __makeTemplateObject(["\n\tmutation updateCategory($id: Int!, $data: CategoryUpdateInput!) {\n\t\tupdateCategory(where: { category_id: $id }, data: $data) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation updateCategory($id: Int!, $data: CategoryUpdateInput!) {\n\t\tupdateCategory(where: { category_id: $id }, data: $data) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateCategoryDocument, options);
}
export var UpdateManyCategoriesDocument = gql(templateObject_35 || (templateObject_35 = __makeTemplateObject(["\n\tmutation updateManyCategories($data: [UpdateManyCategoriesInput!]!) {\n\t\tupdateManyCategories(items: $data) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation updateManyCategories($data: [UpdateManyCategoriesInput!]!) {\n\t\tupdateManyCategories(items: $data) {\n\t\t\t...categoryFields\n\t\t}\n\t}\n\t", "\n"])), CategoryFieldsFragmentDoc);
/**
 * __useUpdateManyCategoriesMutation__
 *
 * To run a mutation, you first call `useUpdateManyCategoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCategoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCategoriesMutation, { data, loading, error }] = useUpdateManyCategoriesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCategoriesMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateManyCategoriesDocument, options);
}
export var GetSasTokenDocument = gql(templateObject_36 || (templateObject_36 = __makeTemplateObject(["\n\tquery GetSASToken($filename: String!) {\n\t\tgetSASToken(data: { filename: $filename }) {\n\t\t\turl\n\t\t\tblobName\n\t\t\tstartsOn\n\t\t\texpiresOn\n\t\t}\n\t}\n"], ["\n\tquery GetSASToken($filename: String!) {\n\t\tgetSASToken(data: { filename: $filename }) {\n\t\t\turl\n\t\t\tblobName\n\t\t\tstartsOn\n\t\t\texpiresOn\n\t\t}\n\t}\n"])));
/**
 * __useGetSasTokenQuery__
 *
 * To run a query within a React component, call `useGetSasTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSasTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSasTokenQuery({
 *   variables: {
 *      filename: // value for 'filename'
 *   },
 * });
 */
export function useGetSasTokenQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(GetSasTokenDocument, options);
}
export function useGetSasTokenLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(GetSasTokenDocument, options);
}
export var AddToFavoritesDocument = gql(templateObject_37 || (templateObject_37 = __makeTemplateObject(["\n\tmutation addToFavorites($where: AdWhereUniqueInput!) {\n\t\taddToFavorites(where: $where) {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation addToFavorites($where: AdWhereUniqueInput!) {\n\t\taddToFavorites(where: $where) {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"])), ListAdFieldsFragmentDoc);
/**
 * __useAddToFavoritesMutation__
 *
 * To run a mutation, you first call `useAddToFavoritesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToFavoritesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToFavoritesMutation, { data, loading, error }] = useAddToFavoritesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAddToFavoritesMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(AddToFavoritesDocument, options);
}
export var CreateListAdDocument = gql(templateObject_38 || (templateObject_38 = __makeTemplateObject(["\n\tmutation createListAd($data: ListAdCreateInput!) {\n\t\tcreateListAd(data: $data) {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation createListAd($data: ListAdCreateInput!) {\n\t\tcreateListAd(data: $data) {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"])), ListAdFieldsFragmentDoc);
/**
 * __useCreateListAdMutation__
 *
 * To run a mutation, you first call `useCreateListAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListAdMutation, { data, loading, error }] = useCreateListAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateListAdMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateListAdDocument, options);
}
export var RemoveListDocument = gql(templateObject_39 || (templateObject_39 = __makeTemplateObject(["\n\tmutation removeList($where: ListWhereUniqueInput!) {\n\t\tremoveList(where: $where)\n\t}\n"], ["\n\tmutation removeList($where: ListWhereUniqueInput!) {\n\t\tremoveList(where: $where)\n\t}\n"])));
/**
 * __useRemoveListMutation__
 *
 * To run a mutation, you first call `useRemoveListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeListMutation, { data, loading, error }] = useRemoveListMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRemoveListMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemoveListDocument, options);
}
export var CreateListDocument = gql(templateObject_40 || (templateObject_40 = __makeTemplateObject(["\n\tmutation createList($data: ListCreateInput!) {\n\t\tcreateList(data: $data) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation createList($data: ListCreateInput!) {\n\t\tcreateList(data: $data) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"])), ListFieldsFragmentDoc);
/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreateListDocument, options);
}
export var UpdateListDocument = gql(templateObject_41 || (templateObject_41 = __makeTemplateObject(["\n\tmutation updateList($data: ListUpdateInput!, $where: ListWhereUniqueInput!) {\n\t\tupdateList(data: $data, where: $where) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation updateList($data: ListUpdateInput!, $where: ListWhereUniqueInput!) {\n\t\tupdateList(data: $data, where: $where) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"])), ListFieldsFragmentDoc);
/**
 * __useUpdateListMutation__
 *
 * To run a mutation, you first call `useUpdateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListMutation, { data, loading, error }] = useUpdateListMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateListMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdateListDocument, options);
}
export var FindMyListsDocument = gql(templateObject_42 || (templateObject_42 = __makeTemplateObject(["\n\tquery findMyLists($where: ListWhereInput, $orderBy: [ListOrderByWithRelationInput!], $cursor: ListWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ListScalarFieldEnum!]) {\n\t\tfindMyLists(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery findMyLists($where: ListWhereInput, $orderBy: [ListOrderByWithRelationInput!], $cursor: ListWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ListScalarFieldEnum!]) {\n\t\tfindMyLists(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"])), ListFieldsFragmentDoc);
/**
 * __useFindMyListsQuery__
 *
 * To run a query within a React component, call `useFindMyListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMyListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMyListsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useFindMyListsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindMyListsDocument, options);
}
export function useFindMyListsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindMyListsDocument, options);
}
export var FindOneListDocument = gql(templateObject_43 || (templateObject_43 = __makeTemplateObject(["\n\tquery findOneList($where: ListWhereInput, $orderBy: [ListOrderByWithRelationInput!], $cursor: ListWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ListScalarFieldEnum!]) {\n\t\tfindOneList(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery findOneList($where: ListWhereInput, $orderBy: [ListOrderByWithRelationInput!], $cursor: ListWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ListScalarFieldEnum!]) {\n\t\tfindOneList(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"])), ListFieldsFragmentDoc);
/**
 * __useFindOneListQuery__
 *
 * To run a query within a React component, call `useFindOneListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *      distinct: // value for 'distinct'
 *   },
 * });
 */
export function useFindOneListQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindOneListDocument, options);
}
export function useFindOneListLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindOneListDocument, options);
}
export var FindFavoritesDocument = gql(templateObject_44 || (templateObject_44 = __makeTemplateObject(["\n\tquery findFavorites {\n\t\tfindOneList(where: { list_type: { equals: 0 } }) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery findFavorites {\n\t\tfindOneList(where: { list_type: { equals: 0 } }) {\n\t\t\t...listFields\n\t\t}\n\t}\n\t", "\n"])), ListFieldsFragmentDoc);
/**
 * __useFindFavoritesQuery__
 *
 * To run a query within a React component, call `useFindFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFavoritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindFavoritesQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindFavoritesDocument, options);
}
export function useFindFavoritesLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindFavoritesDocument, options);
}
export var RemoveListAdDocument = gql(templateObject_45 || (templateObject_45 = __makeTemplateObject(["\n\tmutation removeListAd($ad_id: Int!, $list_id: Int!) {\n\t\tremoveListAd(where: { ad_id_list_id: { ad_id: $ad_id, list_id: $list_id } }) {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation removeListAd($ad_id: Int!, $list_id: Int!) {\n\t\tremoveListAd(where: { ad_id_list_id: { ad_id: $ad_id, list_id: $list_id } }) {\n\t\t\t...listAdFields\n\t\t}\n\t}\n\t", "\n"])), ListAdFieldsFragmentDoc);
/**
 * __useRemoveListAdMutation__
 *
 * To run a mutation, you first call `useRemoveListAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveListAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeListAdMutation, { data, loading, error }] = useRemoveListAdMutation({
 *   variables: {
 *      ad_id: // value for 'ad_id'
 *      list_id: // value for 'list_id'
 *   },
 * });
 */
export function useRemoveListAdMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemoveListAdDocument, options);
}
export var FindAllPromotionPlansDocument = gql(templateObject_46 || (templateObject_46 = __makeTemplateObject(["\n\tquery FindAllPromotionPlans($where: PromotionPlanWhereInput, $orderBy: [PromotionPlanOrderByWithRelationInput!], $cursor: PromotionPlanWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllPromotionPlans(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery FindAllPromotionPlans($where: PromotionPlanWhereInput, $orderBy: [PromotionPlanOrderByWithRelationInput!], $cursor: PromotionPlanWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllPromotionPlans(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"])), PromotionPlansFieldsFragmentDoc);
/**
 * __useFindAllPromotionPlansQuery__
 *
 * To run a query within a React component, call `useFindAllPromotionPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllPromotionPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllPromotionPlansQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useFindAllPromotionPlansQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllPromotionPlansDocument, options);
}
export function useFindAllPromotionPlansLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllPromotionPlansDocument, options);
}
export var FindUniquePromotionPlanDocument = gql(templateObject_47 || (templateObject_47 = __makeTemplateObject(["\n\tquery FindUniquePromotionPlan($where: PromotionPlanWhereUniqueInput!) {\n\t\tfindUniquePromotionPlan(where: $where) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tquery FindUniquePromotionPlan($where: PromotionPlanWhereUniqueInput!) {\n\t\tfindUniquePromotionPlan(where: $where) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"])), PromotionPlansFieldsFragmentDoc);
/**
 * __useFindUniquePromotionPlanQuery__
 *
 * To run a query within a React component, call `useFindUniquePromotionPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniquePromotionPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniquePromotionPlanQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniquePromotionPlanQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindUniquePromotionPlanDocument, options);
}
export function useFindUniquePromotionPlanLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindUniquePromotionPlanDocument, options);
}
export var CreatePromotionPlanDocument = gql(templateObject_48 || (templateObject_48 = __makeTemplateObject(["\n\tmutation CreatePromotionPlan($data: PromotionPlanCreateInput!) {\n\t\tcreatePromotionPlan(data: $data) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation CreatePromotionPlan($data: PromotionPlanCreateInput!) {\n\t\tcreatePromotionPlan(data: $data) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"])), PromotionPlansFieldsFragmentDoc);
/**
 * __useCreatePromotionPlanMutation__
 *
 * To run a mutation, you first call `useCreatePromotionPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePromotionPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPromotionPlanMutation, { data, loading, error }] = useCreatePromotionPlanMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePromotionPlanMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(CreatePromotionPlanDocument, options);
}
export var UpdatePromotionPlanDocument = gql(templateObject_49 || (templateObject_49 = __makeTemplateObject(["\n\tmutation UpdatePromotionPlan($data: PromotionPlanUpdateInput!, $id: Int!) {\n\t\tupdatePromotionPlan(data: $data, where: { promotion_plan_id: $id }) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"], ["\n\tmutation UpdatePromotionPlan($data: PromotionPlanUpdateInput!, $id: Int!) {\n\t\tupdatePromotionPlan(data: $data, where: { promotion_plan_id: $id }) {\n\t\t\t...promotionPlansFields\n\t\t}\n\t}\n\t", "\n"])), PromotionPlansFieldsFragmentDoc);
/**
 * __useUpdatePromotionPlanMutation__
 *
 * To run a mutation, you first call `useUpdatePromotionPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePromotionPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePromotionPlanMutation, { data, loading, error }] = useUpdatePromotionPlanMutation({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdatePromotionPlanMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(UpdatePromotionPlanDocument, options);
}
export var RemovePromotionPlanDocument = gql(templateObject_50 || (templateObject_50 = __makeTemplateObject(["\n\tmutation RemovePromotionPlan($id: Int!) {\n\t\tremovePromotionPlan(where: { promotion_plan_id: $id }) {\n\t\t\tpromotion_plan_id\n\t\t}\n\t}\n"], ["\n\tmutation RemovePromotionPlan($id: Int!) {\n\t\tremovePromotionPlan(where: { promotion_plan_id: $id }) {\n\t\t\tpromotion_plan_id\n\t\t}\n\t}\n"])));
/**
 * __useRemovePromotionPlanMutation__
 *
 * To run a mutation, you first call `useRemovePromotionPlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePromotionPlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePromotionPlanMutation, { data, loading, error }] = useRemovePromotionPlanMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePromotionPlanMutation(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useMutation(RemovePromotionPlanDocument, options);
}
export var FindUniqueUserWhereUserIdEqualsDocument = gql(templateObject_51 || (templateObject_51 = __makeTemplateObject(["\n\tquery FindUniqueUserWhereUserIdEquals($where: UserWhereUniqueInput!) {\n\t\tfindUniqueUser(where: $where) {\n\t\t\t...userInfoFields\n\t\t\tads {\n\t\t\t\t...adFields\n\t\t\t\tad_auto {\n\t\t\t\t\t...adAutoFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n"], ["\n\tquery FindUniqueUserWhereUserIdEquals($where: UserWhereUniqueInput!) {\n\t\tfindUniqueUser(where: $where) {\n\t\t\t...userInfoFields\n\t\t\tads {\n\t\t\t\t...adFields\n\t\t\t\tad_auto {\n\t\t\t\t\t...adAutoFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n"])), UserInfoFieldsFragmentDoc, AdFieldsFragmentDoc, AdAutoFieldsFragmentDoc);
/**
 * __useFindUniqueUserWhereUserIdEqualsQuery__
 *
 * To run a query within a React component, call `useFindUniqueUserWhereUserIdEqualsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueUserWhereUserIdEqualsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueUserWhereUserIdEqualsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindUniqueUserWhereUserIdEqualsQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindUniqueUserWhereUserIdEqualsDocument, options);
}
export function useFindUniqueUserWhereUserIdEqualsLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindUniqueUserWhereUserIdEqualsDocument, options);
}
export var FindAllUsersDocument = gql(templateObject_52 || (templateObject_52 = __makeTemplateObject(["\n\tquery FindAllUsers($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllUsers(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...userInfoFields\n\t\t\tads {\n\t\t\t\t...adFields\n\t\t\t\tad_auto {\n\t\t\t\t\t...adAutoFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n"], ["\n\tquery FindAllUsers($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int) {\n\t\tfindAllUsers(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {\n\t\t\t...userInfoFields\n\t\t\tads {\n\t\t\t\t...adFields\n\t\t\t\tad_auto {\n\t\t\t\t\t...adAutoFields\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t", "\n\t", "\n\t", "\n"])), UserInfoFieldsFragmentDoc, AdFieldsFragmentDoc, AdAutoFieldsFragmentDoc);
/**
 * __useFindAllUsersQuery__
 *
 * To run a query within a React component, call `useFindAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useFindAllUsersQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useQuery(FindAllUsersDocument, options);
}
export function useFindAllUsersLazyQuery(baseOptions) {
    var options = __assign(__assign({}, defaultOptions), baseOptions);
    return Apollo.useLazyQuery(FindAllUsersDocument, options);
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52;
//# sourceMappingURL=generated.js.map