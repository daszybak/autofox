import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
	Decimal: any;
	JSON: any;
};

export type Ad = {
	__typename?: 'Ad';
	AdPromotion?: Maybe<Array<AdPromotion>>;
	ListAd?: Maybe<Array<ListAd>>;
	_count: AdCount;
	ad_auto?: Maybe<AdAuto>;
	ad_categories?: Maybe<Array<AdCategory>>;
	ad_house?: Maybe<AdHouse>;
	ad_id: Scalars['ID'];
	address?: Maybe<Scalars['String']>;
	coords_latitude?: Maybe<Scalars['Float']>;
	coords_longitude?: Maybe<Scalars['Float']>;
	coords_radius?: Maybe<Scalars['Int']>;
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	files?: Maybe<Array<File>>;
	is_sold: Scalars['Boolean'];
	/** 0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error */
	moderation_flag: Scalars['Int'];
	price_eurocent?: Maybe<Scalars['Int']>;
	price_rating?: Maybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at: Scalars['DateTime'];
	user?: Maybe<User>;
	user_sub: Scalars['String'];
};

export type AdAuto = {
	__typename?: 'AdAuto';
	ad: Ad;
	ad_auto_id: Scalars['ID'];
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: Maybe<Scalars['Int']>;
	body_type?: Maybe<Category>;
	body_type_cid?: Maybe<Scalars['Int']>;
	color_exterior?: Maybe<Category>;
	color_exterior_cid?: Maybe<Scalars['Int']>;
	color_interior?: Maybe<Category>;
	color_interior_cid?: Maybe<Scalars['Int']>;
	condition_type?: Maybe<Category>;
	condition_type_cid?: Maybe<Scalars['Int']>;
	conditioning?: Maybe<Category>;
	conditioning_cid?: Maybe<Scalars['Int']>;
	doors_num?: Maybe<Scalars['Int']>;
	emission_class?: Maybe<Category>;
	emission_class_cid?: Maybe<Scalars['Int']>;
	engine_displacement_cm3?: Maybe<Scalars['Int']>;
	fuel_type?: Maybe<Category>;
	fuel_type_cid?: Maybe<Scalars['Int']>;
	is_first_owner?: Maybe<Scalars['Boolean']>;
	is_service_book_available?: Maybe<Scalars['Boolean']>;
	is_vehicle_garaged?: Maybe<Scalars['Boolean']>;
	km?: Maybe<Scalars['Int']>;
	make?: Maybe<Category>;
	make_cid?: Maybe<Scalars['Int']>;
	model?: Maybe<Category>;
	model_cid?: Maybe<Scalars['Int']>;
	power_kw?: Maybe<Scalars['Int']>;
	registered_until?: Maybe<Scalars['DateTime']>;
	seats_num?: Maybe<Scalars['Int']>;
	transmission_type?: Maybe<Category>;
	transmission_type_cid?: Maybe<Scalars['Int']>;
	variant?: Maybe<Category>;
	variant_cid?: Maybe<Scalars['Int']>;
	vehicle_type?: Maybe<Category>;
	vehicle_type_cid?: Maybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyBody_TypeInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyBody_TypeInputEnvelope = {
	data: Array<AdAutoCreateManyBody_TypeInput>;
};

export type AdAutoCreateManyColor_ExteriorInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyColor_ExteriorInputEnvelope = {
	data: Array<AdAutoCreateManyColor_ExteriorInput>;
};

export type AdAutoCreateManyColor_InteriorInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyColor_InteriorInputEnvelope = {
	data: Array<AdAutoCreateManyColor_InteriorInput>;
};

export type AdAutoCreateManyCondition_TypeInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyCondition_TypeInputEnvelope = {
	data: Array<AdAutoCreateManyCondition_TypeInput>;
};

export type AdAutoCreateManyConditioningInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyConditioningInputEnvelope = {
	data: Array<AdAutoCreateManyConditioningInput>;
};

export type AdAutoCreateManyEmission_ClassInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyEmission_ClassInputEnvelope = {
	data: Array<AdAutoCreateManyEmission_ClassInput>;
};

export type AdAutoCreateManyFuel_TypeInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyFuel_TypeInputEnvelope = {
	data: Array<AdAutoCreateManyFuel_TypeInput>;
};

export type AdAutoCreateManyMakeInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyMakeInputEnvelope = {
	data: Array<AdAutoCreateManyMakeInput>;
};

export type AdAutoCreateManyModelInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyModelInputEnvelope = {
	data: Array<AdAutoCreateManyModelInput>;
};

export type AdAutoCreateManyTransmission_TypeInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyTransmission_TypeInputEnvelope = {
	data: Array<AdAutoCreateManyTransmission_TypeInput>;
};

export type AdAutoCreateManyVariantInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	vehicle_type_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyVariantInputEnvelope = {
	data: Array<AdAutoCreateManyVariantInput>;
};

export type AdAutoCreateManyVehicle_TypeInput = {
	ad_id: Scalars['Int'];
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type_cid?: InputMaybe<Scalars['Int']>;
	color_exterior_cid?: InputMaybe<Scalars['Int']>;
	color_interior_cid?: InputMaybe<Scalars['Int']>;
	condition_type_cid?: InputMaybe<Scalars['Int']>;
	conditioning_cid?: InputMaybe<Scalars['Int']>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class_cid?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type_cid?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make_cid?: InputMaybe<Scalars['Int']>;
	model_cid?: InputMaybe<Scalars['Int']>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type_cid?: InputMaybe<Scalars['Int']>;
	variant_cid?: InputMaybe<Scalars['Int']>;
	year: Scalars['Int'];
};

export type AdAutoCreateManyVehicle_TypeInputEnvelope = {
	data: Array<AdAutoCreateManyVehicle_TypeInput>;
};

export type AdAutoCreateNestedManyWithoutBody_TypeInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutBody_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutBody_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyBody_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutColor_ExteriorInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutColor_ExteriorInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutColor_ExteriorInput>>;
	createMany?: InputMaybe<AdAutoCreateManyColor_ExteriorInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutColor_InteriorInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutColor_InteriorInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutColor_InteriorInput>>;
	createMany?: InputMaybe<AdAutoCreateManyColor_InteriorInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutCondition_TypeInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutCondition_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutCondition_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyCondition_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutConditioningInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutConditioningInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutConditioningInput>>;
	createMany?: InputMaybe<AdAutoCreateManyConditioningInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutEmission_ClassInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutEmission_ClassInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutEmission_ClassInput>>;
	createMany?: InputMaybe<AdAutoCreateManyEmission_ClassInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutFuel_TypeInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutFuel_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutFuel_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyFuel_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutMakeInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutMakeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutMakeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyMakeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutModelInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutModelInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutModelInput>>;
	createMany?: InputMaybe<AdAutoCreateManyModelInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutTransmission_TypeInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutTransmission_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutTransmission_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyTransmission_TypeInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutVariantInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutVariantInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutVariantInput>>;
	createMany?: InputMaybe<AdAutoCreateManyVariantInputEnvelope>;
};

export type AdAutoCreateNestedManyWithoutVehicle_TypeInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutVehicle_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutVehicle_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyVehicle_TypeInputEnvelope>;
};

export type AdAutoCreateNestedOneWithoutAdInput = {
	connect?: InputMaybe<AdAutoWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdAutoCreateOrConnectWithoutAdInput>;
	create?: InputMaybe<AdAutoCreateWithoutAdInput>;
};

export type AdAutoCreateOrConnectWithoutAdInput = {
	create: AdAutoCreateWithoutAdInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutBody_TypeInput = {
	create: AdAutoCreateWithoutBody_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutColor_ExteriorInput = {
	create: AdAutoCreateWithoutColor_ExteriorInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutColor_InteriorInput = {
	create: AdAutoCreateWithoutColor_InteriorInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutCondition_TypeInput = {
	create: AdAutoCreateWithoutCondition_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutConditioningInput = {
	create: AdAutoCreateWithoutConditioningInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutEmission_ClassInput = {
	create: AdAutoCreateWithoutEmission_ClassInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutFuel_TypeInput = {
	create: AdAutoCreateWithoutFuel_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutMakeInput = {
	create: AdAutoCreateWithoutMakeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutModelInput = {
	create: AdAutoCreateWithoutModelInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutTransmission_TypeInput = {
	create: AdAutoCreateWithoutTransmission_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutVariantInput = {
	create: AdAutoCreateWithoutVariantInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateOrConnectWithoutVehicle_TypeInput = {
	create: AdAutoCreateWithoutVehicle_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoCreateWithoutAdInput = {
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutBody_TypeInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutColor_ExteriorInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutColor_InteriorInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutCondition_TypeInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutConditioningInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutEmission_ClassInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutFuel_TypeInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutMakeInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutModelInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutTransmission_TypeInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutVariantInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	vehicle_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput>;
	year: Scalars['Int'];
};

export type AdAutoCreateWithoutVehicle_TypeInput = {
	ad: AdCreateNestedOneWithoutAd_AutoInput;
	battery_capacity_kwh?: InputMaybe<Scalars['Int']>;
	body_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoBodyTypeInput>;
	color_exterior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorExteriorInput>;
	color_interior?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoColorInteriorInput>;
	condition_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditionTypeInput>;
	conditioning?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoConditioningInput>;
	doors_num?: InputMaybe<Scalars['Int']>;
	emission_class?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoEmissionClassInput>;
	engine_displacement_cm3?: InputMaybe<Scalars['Int']>;
	fuel_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoFuelTypeInput>;
	is_first_owner?: InputMaybe<Scalars['Boolean']>;
	is_service_book_available?: InputMaybe<Scalars['Boolean']>;
	is_vehicle_garaged?: InputMaybe<Scalars['Boolean']>;
	km?: InputMaybe<Scalars['Int']>;
	make?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoMakeInput>;
	model?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoModelInput>;
	power_kw?: InputMaybe<Scalars['Int']>;
	registered_until?: InputMaybe<Scalars['DateTime']>;
	seats_num?: InputMaybe<Scalars['Int']>;
	transmission_type?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput>;
	variant?: InputMaybe<CategoryCreateNestedOneWithoutAdAutoVariantInput>;
	year: Scalars['Int'];
};

export type AdAutoListRelationFilter = {
	every?: InputMaybe<AdAutoWhereInput>;
	none?: InputMaybe<AdAutoWhereInput>;
	some?: InputMaybe<AdAutoWhereInput>;
};

export type AdAutoOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type AdAutoOrderByWithRelationInput = {
	ad?: InputMaybe<AdOrderByWithRelationInput>;
	ad_auto_id?: InputMaybe<SortOrder>;
	ad_id?: InputMaybe<SortOrder>;
	battery_capacity_kwh?: InputMaybe<SortOrder>;
	body_type?: InputMaybe<CategoryOrderByWithRelationInput>;
	body_type_cid?: InputMaybe<SortOrder>;
	color_exterior?: InputMaybe<CategoryOrderByWithRelationInput>;
	color_exterior_cid?: InputMaybe<SortOrder>;
	color_interior?: InputMaybe<CategoryOrderByWithRelationInput>;
	color_interior_cid?: InputMaybe<SortOrder>;
	condition_type?: InputMaybe<CategoryOrderByWithRelationInput>;
	condition_type_cid?: InputMaybe<SortOrder>;
	conditioning?: InputMaybe<CategoryOrderByWithRelationInput>;
	conditioning_cid?: InputMaybe<SortOrder>;
	doors_num?: InputMaybe<SortOrder>;
	emission_class?: InputMaybe<CategoryOrderByWithRelationInput>;
	emission_class_cid?: InputMaybe<SortOrder>;
	engine_displacement_cm3?: InputMaybe<SortOrder>;
	fuel_type?: InputMaybe<CategoryOrderByWithRelationInput>;
	fuel_type_cid?: InputMaybe<SortOrder>;
	is_first_owner?: InputMaybe<SortOrder>;
	is_service_book_available?: InputMaybe<SortOrder>;
	is_vehicle_garaged?: InputMaybe<SortOrder>;
	km?: InputMaybe<SortOrder>;
	make?: InputMaybe<CategoryOrderByWithRelationInput>;
	make_cid?: InputMaybe<SortOrder>;
	model?: InputMaybe<CategoryOrderByWithRelationInput>;
	model_cid?: InputMaybe<SortOrder>;
	power_kw?: InputMaybe<SortOrder>;
	registered_until?: InputMaybe<SortOrder>;
	seats_num?: InputMaybe<SortOrder>;
	transmission_type?: InputMaybe<CategoryOrderByWithRelationInput>;
	transmission_type_cid?: InputMaybe<SortOrder>;
	variant?: InputMaybe<CategoryOrderByWithRelationInput>;
	variant_cid?: InputMaybe<SortOrder>;
	vehicle_type?: InputMaybe<CategoryOrderByWithRelationInput>;
	vehicle_type_cid?: InputMaybe<SortOrder>;
	year?: InputMaybe<SortOrder>;
};

export type AdAutoRelationFilter = {
	is?: InputMaybe<AdAutoWhereInput>;
	isNot?: InputMaybe<AdAutoWhereInput>;
};

export type AdAutoScalarWhereInput = {
	AND?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	NOT?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	OR?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	ad_auto_id?: InputMaybe<IntFilter>;
	ad_id?: InputMaybe<IntFilter>;
	battery_capacity_kwh?: InputMaybe<IntNullableFilter>;
	body_type_cid?: InputMaybe<IntNullableFilter>;
	color_exterior_cid?: InputMaybe<IntNullableFilter>;
	color_interior_cid?: InputMaybe<IntNullableFilter>;
	condition_type_cid?: InputMaybe<IntNullableFilter>;
	conditioning_cid?: InputMaybe<IntNullableFilter>;
	doors_num?: InputMaybe<IntNullableFilter>;
	emission_class_cid?: InputMaybe<IntNullableFilter>;
	engine_displacement_cm3?: InputMaybe<IntNullableFilter>;
	fuel_type_cid?: InputMaybe<IntNullableFilter>;
	is_first_owner?: InputMaybe<BoolNullableFilter>;
	is_service_book_available?: InputMaybe<BoolNullableFilter>;
	is_vehicle_garaged?: InputMaybe<BoolNullableFilter>;
	km?: InputMaybe<IntNullableFilter>;
	make_cid?: InputMaybe<IntNullableFilter>;
	model_cid?: InputMaybe<IntNullableFilter>;
	power_kw?: InputMaybe<IntNullableFilter>;
	registered_until?: InputMaybe<DateTimeNullableFilter>;
	seats_num?: InputMaybe<IntNullableFilter>;
	transmission_type_cid?: InputMaybe<IntNullableFilter>;
	variant_cid?: InputMaybe<IntNullableFilter>;
	vehicle_type_cid?: InputMaybe<IntNullableFilter>;
	year?: InputMaybe<IntFilter>;
};

export type AdAutoUpdateManyMutationInput = {
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateManyWithWhereWithoutBody_TypeInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutColor_ExteriorInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutColor_InteriorInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutCondition_TypeInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutConditioningInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutEmission_ClassInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutFuel_TypeInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutMakeInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutModelInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutTransmission_TypeInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutVariantInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithWhereWithoutVehicle_TypeInput = {
	data: AdAutoUpdateManyMutationInput;
	where: AdAutoScalarWhereInput;
};

export type AdAutoUpdateManyWithoutBody_TypeNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutBody_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutBody_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyBody_TypeInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutBody_TypeInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutBody_TypeInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutBody_TypeInput>>;
};

export type AdAutoUpdateManyWithoutColor_ExteriorNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutColor_ExteriorInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutColor_ExteriorInput>>;
	createMany?: InputMaybe<AdAutoCreateManyColor_ExteriorInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutColor_ExteriorInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutColor_ExteriorInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutColor_ExteriorInput>>;
};

export type AdAutoUpdateManyWithoutColor_InteriorNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutColor_InteriorInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutColor_InteriorInput>>;
	createMany?: InputMaybe<AdAutoCreateManyColor_InteriorInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutColor_InteriorInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutColor_InteriorInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutColor_InteriorInput>>;
};

export type AdAutoUpdateManyWithoutCondition_TypeNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutCondition_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutCondition_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyCondition_TypeInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutCondition_TypeInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutCondition_TypeInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutCondition_TypeInput>>;
};

export type AdAutoUpdateManyWithoutConditioningNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutConditioningInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutConditioningInput>>;
	createMany?: InputMaybe<AdAutoCreateManyConditioningInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutConditioningInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutConditioningInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutConditioningInput>>;
};

export type AdAutoUpdateManyWithoutEmission_ClassNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutEmission_ClassInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutEmission_ClassInput>>;
	createMany?: InputMaybe<AdAutoCreateManyEmission_ClassInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutEmission_ClassInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutEmission_ClassInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutEmission_ClassInput>>;
};

export type AdAutoUpdateManyWithoutFuel_TypeNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutFuel_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutFuel_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyFuel_TypeInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutFuel_TypeInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutFuel_TypeInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutFuel_TypeInput>>;
};

export type AdAutoUpdateManyWithoutMakeNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutMakeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutMakeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyMakeInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutMakeInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutMakeInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutMakeInput>>;
};

export type AdAutoUpdateManyWithoutModelNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutModelInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutModelInput>>;
	createMany?: InputMaybe<AdAutoCreateManyModelInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutModelInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutModelInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutModelInput>>;
};

export type AdAutoUpdateManyWithoutTransmission_TypeNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutTransmission_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutTransmission_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyTransmission_TypeInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutTransmission_TypeInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutTransmission_TypeInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutTransmission_TypeInput>>;
};

export type AdAutoUpdateManyWithoutVariantNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutVariantInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutVariantInput>>;
	createMany?: InputMaybe<AdAutoCreateManyVariantInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutVariantInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutVariantInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutVariantInput>>;
};

export type AdAutoUpdateManyWithoutVehicle_TypeNestedInput = {
	connect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdAutoCreateOrConnectWithoutVehicle_TypeInput>>;
	create?: InputMaybe<Array<AdAutoCreateWithoutVehicle_TypeInput>>;
	createMany?: InputMaybe<AdAutoCreateManyVehicle_TypeInputEnvelope>;
	delete?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdAutoScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	set?: InputMaybe<Array<AdAutoWhereUniqueInput>>;
	update?: InputMaybe<Array<AdAutoUpdateWithWhereUniqueWithoutVehicle_TypeInput>>;
	updateMany?: InputMaybe<Array<AdAutoUpdateManyWithWhereWithoutVehicle_TypeInput>>;
	upsert?: InputMaybe<Array<AdAutoUpsertWithWhereUniqueWithoutVehicle_TypeInput>>;
};

export type AdAutoUpdateOneWithoutAdNestedInput = {
	connect?: InputMaybe<AdAutoWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdAutoCreateOrConnectWithoutAdInput>;
	create?: InputMaybe<AdAutoCreateWithoutAdInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<AdAutoUpdateWithoutAdInput>;
	upsert?: InputMaybe<AdAutoUpsertWithoutAdInput>;
};

export type AdAutoUpdateWithWhereUniqueWithoutBody_TypeInput = {
	data: AdAutoUpdateWithoutBody_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutColor_ExteriorInput = {
	data: AdAutoUpdateWithoutColor_ExteriorInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutColor_InteriorInput = {
	data: AdAutoUpdateWithoutColor_InteriorInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutCondition_TypeInput = {
	data: AdAutoUpdateWithoutCondition_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutConditioningInput = {
	data: AdAutoUpdateWithoutConditioningInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutEmission_ClassInput = {
	data: AdAutoUpdateWithoutEmission_ClassInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutFuel_TypeInput = {
	data: AdAutoUpdateWithoutFuel_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutMakeInput = {
	data: AdAutoUpdateWithoutMakeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutModelInput = {
	data: AdAutoUpdateWithoutModelInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutTransmission_TypeInput = {
	data: AdAutoUpdateWithoutTransmission_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutVariantInput = {
	data: AdAutoUpdateWithoutVariantInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithWhereUniqueWithoutVehicle_TypeInput = {
	data: AdAutoUpdateWithoutVehicle_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpdateWithoutAdInput = {
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutBody_TypeInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutColor_ExteriorInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutColor_InteriorInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutCondition_TypeInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutConditioningInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutEmission_ClassInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutFuel_TypeInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutMakeInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutModelInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutTransmission_TypeInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutVariantInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	vehicle_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpdateWithoutVehicle_TypeInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_AutoNestedInput>;
	battery_capacity_kwh?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	body_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput>;
	color_exterior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput>;
	color_interior?: InputMaybe<CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput>;
	condition_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput>;
	conditioning?: InputMaybe<CategoryUpdateOneWithoutAdAutoConditioningNestedInput>;
	doors_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	emission_class?: InputMaybe<CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput>;
	engine_displacement_cm3?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	fuel_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput>;
	is_first_owner?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_service_book_available?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	is_vehicle_garaged?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
	km?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	make?: InputMaybe<CategoryUpdateOneWithoutAdAutoMakeNestedInput>;
	model?: InputMaybe<CategoryUpdateOneWithoutAdAutoModelNestedInput>;
	power_kw?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	registered_until?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	seats_num?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	transmission_type?: InputMaybe<CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput>;
	variant?: InputMaybe<CategoryUpdateOneWithoutAdAutoVariantNestedInput>;
	year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdAutoUpsertWithWhereUniqueWithoutBody_TypeInput = {
	create: AdAutoCreateWithoutBody_TypeInput;
	update: AdAutoUpdateWithoutBody_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutColor_ExteriorInput = {
	create: AdAutoCreateWithoutColor_ExteriorInput;
	update: AdAutoUpdateWithoutColor_ExteriorInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutColor_InteriorInput = {
	create: AdAutoCreateWithoutColor_InteriorInput;
	update: AdAutoUpdateWithoutColor_InteriorInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutCondition_TypeInput = {
	create: AdAutoCreateWithoutCondition_TypeInput;
	update: AdAutoUpdateWithoutCondition_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutConditioningInput = {
	create: AdAutoCreateWithoutConditioningInput;
	update: AdAutoUpdateWithoutConditioningInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutEmission_ClassInput = {
	create: AdAutoCreateWithoutEmission_ClassInput;
	update: AdAutoUpdateWithoutEmission_ClassInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutFuel_TypeInput = {
	create: AdAutoCreateWithoutFuel_TypeInput;
	update: AdAutoUpdateWithoutFuel_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutMakeInput = {
	create: AdAutoCreateWithoutMakeInput;
	update: AdAutoUpdateWithoutMakeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutModelInput = {
	create: AdAutoCreateWithoutModelInput;
	update: AdAutoUpdateWithoutModelInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutTransmission_TypeInput = {
	create: AdAutoCreateWithoutTransmission_TypeInput;
	update: AdAutoUpdateWithoutTransmission_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutVariantInput = {
	create: AdAutoCreateWithoutVariantInput;
	update: AdAutoUpdateWithoutVariantInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithWhereUniqueWithoutVehicle_TypeInput = {
	create: AdAutoCreateWithoutVehicle_TypeInput;
	update: AdAutoUpdateWithoutVehicle_TypeInput;
	where: AdAutoWhereUniqueInput;
};

export type AdAutoUpsertWithoutAdInput = {
	create: AdAutoCreateWithoutAdInput;
	update: AdAutoUpdateWithoutAdInput;
};

export type AdAutoWhereInput = {
	AND?: InputMaybe<Array<AdAutoWhereInput>>;
	NOT?: InputMaybe<Array<AdAutoWhereInput>>;
	OR?: InputMaybe<Array<AdAutoWhereInput>>;
	ad?: InputMaybe<AdRelationFilter>;
	ad_auto_id?: InputMaybe<IntFilter>;
	ad_id?: InputMaybe<IntFilter>;
	battery_capacity_kwh?: InputMaybe<IntNullableFilter>;
	body_type?: InputMaybe<CategoryRelationFilter>;
	body_type_cid?: InputMaybe<IntNullableFilter>;
	color_exterior?: InputMaybe<CategoryRelationFilter>;
	color_exterior_cid?: InputMaybe<IntNullableFilter>;
	color_interior?: InputMaybe<CategoryRelationFilter>;
	color_interior_cid?: InputMaybe<IntNullableFilter>;
	condition_type?: InputMaybe<CategoryRelationFilter>;
	condition_type_cid?: InputMaybe<IntNullableFilter>;
	conditioning?: InputMaybe<CategoryRelationFilter>;
	conditioning_cid?: InputMaybe<IntNullableFilter>;
	doors_num?: InputMaybe<IntNullableFilter>;
	emission_class?: InputMaybe<CategoryRelationFilter>;
	emission_class_cid?: InputMaybe<IntNullableFilter>;
	engine_displacement_cm3?: InputMaybe<IntNullableFilter>;
	fuel_type?: InputMaybe<CategoryRelationFilter>;
	fuel_type_cid?: InputMaybe<IntNullableFilter>;
	is_first_owner?: InputMaybe<BoolNullableFilter>;
	is_service_book_available?: InputMaybe<BoolNullableFilter>;
	is_vehicle_garaged?: InputMaybe<BoolNullableFilter>;
	km?: InputMaybe<IntNullableFilter>;
	make?: InputMaybe<CategoryRelationFilter>;
	make_cid?: InputMaybe<IntNullableFilter>;
	model?: InputMaybe<CategoryRelationFilter>;
	model_cid?: InputMaybe<IntNullableFilter>;
	power_kw?: InputMaybe<IntNullableFilter>;
	registered_until?: InputMaybe<DateTimeNullableFilter>;
	seats_num?: InputMaybe<IntNullableFilter>;
	transmission_type?: InputMaybe<CategoryRelationFilter>;
	transmission_type_cid?: InputMaybe<IntNullableFilter>;
	variant?: InputMaybe<CategoryRelationFilter>;
	variant_cid?: InputMaybe<IntNullableFilter>;
	vehicle_type?: InputMaybe<CategoryRelationFilter>;
	vehicle_type_cid?: InputMaybe<IntNullableFilter>;
	year?: InputMaybe<IntFilter>;
};

export type AdAutoWhereUniqueInput = {
	ad_auto_id?: InputMaybe<Scalars['Int']>;
	ad_id?: InputMaybe<Scalars['Int']>;
};

export type AdAvgAggregate = {
	__typename?: 'AdAvgAggregate';
	ad_id?: Maybe<Scalars['Float']>;
	coords_latitude?: Maybe<Scalars['Float']>;
	coords_longitude?: Maybe<Scalars['Float']>;
	coords_radius?: Maybe<Scalars['Float']>;
	moderation_flag?: Maybe<Scalars['Float']>;
	price_eurocent?: Maybe<Scalars['Float']>;
	price_rating?: Maybe<Scalars['Decimal']>;
};

export type AdAvgAggregateInput = {
	ad_id?: InputMaybe<Scalars['Boolean']>;
	coords_latitude?: InputMaybe<Scalars['Boolean']>;
	coords_longitude?: InputMaybe<Scalars['Boolean']>;
	coords_radius?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Boolean']>;
	price_rating?: InputMaybe<Scalars['Boolean']>;
};

export type AdAvgOrderByAggregateInput = {
	ad_id?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
};

export type AdCategory = {
	__typename?: 'AdCategory';
	ad: Ad;
	ad_id: Scalars['Int'];
	category: Category;
	category_id: Scalars['Int'];
};

export type AdCategoryAd_IdCategory_IdCompoundUniqueInput = {
	ad_id: Scalars['Int'];
	category_id: Scalars['Int'];
};

export type AdCategoryCreateManyAdInput = {
	category_id: Scalars['Int'];
};

export type AdCategoryCreateManyAdInputEnvelope = {
	data: Array<AdCategoryCreateManyAdInput>;
};

export type AdCategoryCreateManyCategoryInput = {
	ad_id: Scalars['Int'];
};

export type AdCategoryCreateManyCategoryInputEnvelope = {
	data: Array<AdCategoryCreateManyCategoryInput>;
};

export type AdCategoryCreateNestedManyWithoutAdInput = {
	connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<AdCategoryCreateWithoutAdInput>>;
	createMany?: InputMaybe<AdCategoryCreateManyAdInputEnvelope>;
};

export type AdCategoryCreateNestedManyWithoutCategoryInput = {
	connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutCategoryInput>>;
	create?: InputMaybe<Array<AdCategoryCreateWithoutCategoryInput>>;
	createMany?: InputMaybe<AdCategoryCreateManyCategoryInputEnvelope>;
};

export type AdCategoryCreateOrConnectWithoutAdInput = {
	create: AdCategoryCreateWithoutAdInput;
	where: AdCategoryWhereUniqueInput;
};

export type AdCategoryCreateOrConnectWithoutCategoryInput = {
	create: AdCategoryCreateWithoutCategoryInput;
	where: AdCategoryWhereUniqueInput;
};

export type AdCategoryCreateWithoutAdInput = {
	category: CategoryCreateNestedOneWithoutAd_CategoriesInput;
};

export type AdCategoryCreateWithoutCategoryInput = {
	ad: AdCreateNestedOneWithoutAd_CategoriesInput;
};

export type AdCategoryListRelationFilter = {
	every?: InputMaybe<AdCategoryWhereInput>;
	none?: InputMaybe<AdCategoryWhereInput>;
	some?: InputMaybe<AdCategoryWhereInput>;
};

export type AdCategoryOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type AdCategoryScalarWhereInput = {
	AND?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
	NOT?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
	OR?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
	ad_id?: InputMaybe<IntFilter>;
	category_id?: InputMaybe<IntFilter>;
};

export type AdCategoryUncheckedUpdateManyWithoutAd_CategoriesInput = {
	ad_id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type AdCategoryUpdateManyWithWhereWithoutAdInput = {
	data: AdCategoryUncheckedUpdateManyWithoutAd_CategoriesInput;
	where: AdCategoryScalarWhereInput;
};

export type AdCategoryUpdateManyWithWhereWithoutCategoryInput = {
	data: AdCategoryUncheckedUpdateManyWithoutAd_CategoriesInput;
	where: AdCategoryScalarWhereInput;
};

export type AdCategoryUpdateManyWithoutAdNestedInput = {
	connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<AdCategoryCreateWithoutAdInput>>;
	createMany?: InputMaybe<AdCategoryCreateManyAdInputEnvelope>;
	delete?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	set?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	update?: InputMaybe<Array<AdCategoryUpdateWithWhereUniqueWithoutAdInput>>;
	updateMany?: InputMaybe<Array<AdCategoryUpdateManyWithWhereWithoutAdInput>>;
	upsert?: InputMaybe<Array<AdCategoryUpsertWithWhereUniqueWithoutAdInput>>;
};

export type AdCategoryUpdateManyWithoutCategoryNestedInput = {
	connect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdCategoryCreateOrConnectWithoutCategoryInput>>;
	create?: InputMaybe<Array<AdCategoryCreateWithoutCategoryInput>>;
	createMany?: InputMaybe<AdCategoryCreateManyCategoryInputEnvelope>;
	delete?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdCategoryScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	set?: InputMaybe<Array<AdCategoryWhereUniqueInput>>;
	update?: InputMaybe<Array<AdCategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
	updateMany?: InputMaybe<Array<AdCategoryUpdateManyWithWhereWithoutCategoryInput>>;
	upsert?: InputMaybe<Array<AdCategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type AdCategoryUpdateWithWhereUniqueWithoutAdInput = {
	data: AdCategoryUpdateWithoutAdInput;
	where: AdCategoryWhereUniqueInput;
};

export type AdCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
	data: AdCategoryUpdateWithoutCategoryInput;
	where: AdCategoryWhereUniqueInput;
};

export type AdCategoryUpdateWithoutAdInput = {
	category?: InputMaybe<CategoryUpdateOneRequiredWithoutAd_CategoriesNestedInput>;
};

export type AdCategoryUpdateWithoutCategoryInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAd_CategoriesNestedInput>;
};

export type AdCategoryUpsertWithWhereUniqueWithoutAdInput = {
	create: AdCategoryCreateWithoutAdInput;
	update: AdCategoryUpdateWithoutAdInput;
	where: AdCategoryWhereUniqueInput;
};

export type AdCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
	create: AdCategoryCreateWithoutCategoryInput;
	update: AdCategoryUpdateWithoutCategoryInput;
	where: AdCategoryWhereUniqueInput;
};

export type AdCategoryWhereInput = {
	AND?: InputMaybe<Array<AdCategoryWhereInput>>;
	NOT?: InputMaybe<Array<AdCategoryWhereInput>>;
	OR?: InputMaybe<Array<AdCategoryWhereInput>>;
	ad?: InputMaybe<AdRelationFilter>;
	ad_id?: InputMaybe<IntFilter>;
	category?: InputMaybe<CategoryRelationFilter>;
	category_id?: InputMaybe<IntFilter>;
};

export type AdCategoryWhereUniqueInput = {
	ad_id_category_id?: InputMaybe<AdCategoryAd_IdCategory_IdCompoundUniqueInput>;
};

export type AdCount = {
	__typename?: 'AdCount';
	AdPromotion: Scalars['Int'];
	ListAd: Scalars['Int'];
	ad_categories: Scalars['Int'];
	files: Scalars['Int'];
};

export type AdCountAggregate = {
	__typename?: 'AdCountAggregate';
	_all: Scalars['Int'];
	ad_id: Scalars['Int'];
	address: Scalars['Int'];
	coords_latitude: Scalars['Int'];
	coords_longitude: Scalars['Int'];
	coords_radius: Scalars['Int'];
	created_at: Scalars['Int'];
	deleted_at: Scalars['Int'];
	is_sold: Scalars['Int'];
	moderation_flag: Scalars['Int'];
	price_eurocent: Scalars['Int'];
	price_rating: Scalars['Int'];
	text: Scalars['Int'];
	title: Scalars['Int'];
	updated_at: Scalars['Int'];
	user_sub: Scalars['Int'];
};

export type AdCountAggregateInput = {
	_all?: InputMaybe<Scalars['Boolean']>;
	ad_id?: InputMaybe<Scalars['Boolean']>;
	address?: InputMaybe<Scalars['Boolean']>;
	coords_latitude?: InputMaybe<Scalars['Boolean']>;
	coords_longitude?: InputMaybe<Scalars['Boolean']>;
	coords_radius?: InputMaybe<Scalars['Boolean']>;
	created_at?: InputMaybe<Scalars['Boolean']>;
	deleted_at?: InputMaybe<Scalars['Boolean']>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Boolean']>;
	price_rating?: InputMaybe<Scalars['Boolean']>;
	text?: InputMaybe<Scalars['Boolean']>;
	title?: InputMaybe<Scalars['Boolean']>;
	updated_at?: InputMaybe<Scalars['Boolean']>;
	user_sub?: InputMaybe<Scalars['Boolean']>;
};

export type AdCountOrderByAggregateInput = {
	ad_id?: InputMaybe<SortOrder>;
	address?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	is_sold?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user_sub?: InputMaybe<SortOrder>;
};

export type AdCreateManyUserInput = {
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type AdCreateManyUserInputEnvelope = {
	data: Array<AdCreateManyUserInput>;
};

export type AdCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<AdWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<AdCreateWithoutUserInput>>;
	createMany?: InputMaybe<AdCreateManyUserInputEnvelope>;
};

export type AdCreateNestedOneWithoutAdPromotionInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAdPromotionInput>;
	create?: InputMaybe<AdCreateWithoutAdPromotionInput>;
};

export type AdCreateNestedOneWithoutAd_AutoInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_AutoInput>;
	create?: InputMaybe<AdCreateWithoutAd_AutoInput>;
};

export type AdCreateNestedOneWithoutAd_CategoriesInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_CategoriesInput>;
	create?: InputMaybe<AdCreateWithoutAd_CategoriesInput>;
};

export type AdCreateNestedOneWithoutFilesInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutFilesInput>;
	create?: InputMaybe<AdCreateWithoutFilesInput>;
};

export type AdCreateNestedOneWithoutListAdInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutListAdInput>;
	create?: InputMaybe<AdCreateWithoutListAdInput>;
};

export type AdCreateOrConnectWithoutAdPromotionInput = {
	create: AdCreateWithoutAdPromotionInput;
	where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutAd_AutoInput = {
	create: AdCreateWithoutAd_AutoInput;
	where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutAd_CategoriesInput = {
	create: AdCreateWithoutAd_CategoriesInput;
	where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutFilesInput = {
	create: AdCreateWithoutFilesInput;
	where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutListAdInput = {
	create: AdCreateWithoutListAdInput;
	where: AdWhereUniqueInput;
};

export type AdCreateOrConnectWithoutUserInput = {
	create: AdCreateWithoutUserInput;
	where: AdWhereUniqueInput;
};

export type AdCreateWithoutAdPromotionInput = {
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutAdInput>;
	ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
	ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	files?: InputMaybe<FileCreateNestedManyWithoutAdInput>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutAd_AutoInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutAdInput>;
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutAdInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
	ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	files?: InputMaybe<FileCreateNestedManyWithoutAdInput>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutAd_CategoriesInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutAdInput>;
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutAdInput>;
	ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
	ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	files?: InputMaybe<FileCreateNestedManyWithoutAdInput>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutFilesInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutAdInput>;
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutAdInput>;
	ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
	ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutListAdInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutAdInput>;
	ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
	ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	files?: InputMaybe<FileCreateNestedManyWithoutAdInput>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	user?: InputMaybe<UserCreateNestedOneWithoutAdsInput>;
};

export type AdCreateWithoutUserInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutAdInput>;
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutAdInput>;
	ad_auto?: InputMaybe<AdAutoCreateNestedOneWithoutAdInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutAdInput>;
	ad_house?: InputMaybe<AdHouseCreateNestedOneWithoutAdInput>;
	address?: InputMaybe<Scalars['String']>;
	coords_latitude?: InputMaybe<Scalars['Float']>;
	coords_longitude?: InputMaybe<Scalars['Float']>;
	coords_radius?: InputMaybe<Scalars['Int']>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	files?: InputMaybe<FileCreateNestedManyWithoutAdInput>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Int']>;
	price_rating?: InputMaybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type AdGroupBy = {
	__typename?: 'AdGroupBy';
	_avg?: Maybe<AdAvgAggregate>;
	_count?: Maybe<AdCountAggregate>;
	_max?: Maybe<AdMaxAggregate>;
	_min?: Maybe<AdMinAggregate>;
	_sum?: Maybe<AdSumAggregate>;
	ad_id: Scalars['Int'];
	address?: Maybe<Scalars['String']>;
	coords_latitude?: Maybe<Scalars['Float']>;
	coords_longitude?: Maybe<Scalars['Float']>;
	coords_radius?: Maybe<Scalars['Int']>;
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	is_sold: Scalars['Boolean'];
	moderation_flag: Scalars['Int'];
	price_eurocent?: Maybe<Scalars['Int']>;
	price_rating?: Maybe<Scalars['Decimal']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at: Scalars['DateTime'];
	user_sub: Scalars['String'];
};

export type AdHouse = {
	__typename?: 'AdHouse';
	ad: Ad;
	ad_house_id: Scalars['ID'];
	ad_id: Scalars['Int'];
	meters?: Maybe<Scalars['Int']>;
};

export type AdHouseCreateNestedOneWithoutAdInput = {
	connect?: InputMaybe<AdHouseWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdHouseCreateOrConnectWithoutAdInput>;
	create?: InputMaybe<AdHouseCreateWithoutAdInput>;
};

export type AdHouseCreateOrConnectWithoutAdInput = {
	create: AdHouseCreateWithoutAdInput;
	where: AdHouseWhereUniqueInput;
};

export type AdHouseCreateWithoutAdInput = {
	meters?: InputMaybe<Scalars['Int']>;
};

export type AdHouseOrderByWithRelationInput = {
	ad?: InputMaybe<AdOrderByWithRelationInput>;
	ad_house_id?: InputMaybe<SortOrder>;
	ad_id?: InputMaybe<SortOrder>;
	meters?: InputMaybe<SortOrder>;
};

export type AdHouseRelationFilter = {
	is?: InputMaybe<AdHouseWhereInput>;
	isNot?: InputMaybe<AdHouseWhereInput>;
};

export type AdHouseUpdateOneWithoutAdNestedInput = {
	connect?: InputMaybe<AdHouseWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdHouseCreateOrConnectWithoutAdInput>;
	create?: InputMaybe<AdHouseCreateWithoutAdInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<AdHouseUpdateWithoutAdInput>;
	upsert?: InputMaybe<AdHouseUpsertWithoutAdInput>;
};

export type AdHouseUpdateWithoutAdInput = {
	meters?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type AdHouseUpsertWithoutAdInput = {
	create: AdHouseCreateWithoutAdInput;
	update: AdHouseUpdateWithoutAdInput;
};

export type AdHouseWhereInput = {
	AND?: InputMaybe<Array<AdHouseWhereInput>>;
	NOT?: InputMaybe<Array<AdHouseWhereInput>>;
	OR?: InputMaybe<Array<AdHouseWhereInput>>;
	ad?: InputMaybe<AdRelationFilter>;
	ad_house_id?: InputMaybe<IntFilter>;
	ad_id?: InputMaybe<IntFilter>;
	meters?: InputMaybe<IntNullableFilter>;
};

export type AdHouseWhereUniqueInput = {
	ad_house_id?: InputMaybe<Scalars['Int']>;
	ad_id?: InputMaybe<Scalars['Int']>;
};

export type AdListRelationFilter = {
	every?: InputMaybe<AdWhereInput>;
	none?: InputMaybe<AdWhereInput>;
	some?: InputMaybe<AdWhereInput>;
};

export type AdMaxAggregate = {
	__typename?: 'AdMaxAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	address?: Maybe<Scalars['String']>;
	coords_latitude?: Maybe<Scalars['Float']>;
	coords_longitude?: Maybe<Scalars['Float']>;
	coords_radius?: Maybe<Scalars['Int']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	is_sold?: Maybe<Scalars['Boolean']>;
	moderation_flag?: Maybe<Scalars['Int']>;
	price_eurocent?: Maybe<Scalars['Int']>;
	price_rating?: Maybe<Scalars['Decimal']>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type AdMaxAggregateInput = {
	ad_id?: InputMaybe<Scalars['Boolean']>;
	address?: InputMaybe<Scalars['Boolean']>;
	coords_latitude?: InputMaybe<Scalars['Boolean']>;
	coords_longitude?: InputMaybe<Scalars['Boolean']>;
	coords_radius?: InputMaybe<Scalars['Boolean']>;
	created_at?: InputMaybe<Scalars['Boolean']>;
	deleted_at?: InputMaybe<Scalars['Boolean']>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Boolean']>;
	price_rating?: InputMaybe<Scalars['Boolean']>;
	text?: InputMaybe<Scalars['Boolean']>;
	title?: InputMaybe<Scalars['Boolean']>;
	updated_at?: InputMaybe<Scalars['Boolean']>;
	user_sub?: InputMaybe<Scalars['Boolean']>;
};

export type AdMaxOrderByAggregateInput = {
	ad_id?: InputMaybe<SortOrder>;
	address?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	is_sold?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user_sub?: InputMaybe<SortOrder>;
};

export type AdMinAggregate = {
	__typename?: 'AdMinAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	address?: Maybe<Scalars['String']>;
	coords_latitude?: Maybe<Scalars['Float']>;
	coords_longitude?: Maybe<Scalars['Float']>;
	coords_radius?: Maybe<Scalars['Int']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	is_sold?: Maybe<Scalars['Boolean']>;
	moderation_flag?: Maybe<Scalars['Int']>;
	price_eurocent?: Maybe<Scalars['Int']>;
	price_rating?: Maybe<Scalars['Decimal']>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type AdMinAggregateInput = {
	ad_id?: InputMaybe<Scalars['Boolean']>;
	address?: InputMaybe<Scalars['Boolean']>;
	coords_latitude?: InputMaybe<Scalars['Boolean']>;
	coords_longitude?: InputMaybe<Scalars['Boolean']>;
	coords_radius?: InputMaybe<Scalars['Boolean']>;
	created_at?: InputMaybe<Scalars['Boolean']>;
	deleted_at?: InputMaybe<Scalars['Boolean']>;
	is_sold?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Boolean']>;
	price_rating?: InputMaybe<Scalars['Boolean']>;
	text?: InputMaybe<Scalars['Boolean']>;
	title?: InputMaybe<Scalars['Boolean']>;
	updated_at?: InputMaybe<Scalars['Boolean']>;
	user_sub?: InputMaybe<Scalars['Boolean']>;
};

export type AdMinOrderByAggregateInput = {
	ad_id?: InputMaybe<SortOrder>;
	address?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	is_sold?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user_sub?: InputMaybe<SortOrder>;
};

export type AdOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type AdOrderByWithAggregationInput = {
	_avg?: InputMaybe<AdAvgOrderByAggregateInput>;
	_count?: InputMaybe<AdCountOrderByAggregateInput>;
	_max?: InputMaybe<AdMaxOrderByAggregateInput>;
	_min?: InputMaybe<AdMinOrderByAggregateInput>;
	_sum?: InputMaybe<AdSumOrderByAggregateInput>;
	ad_id?: InputMaybe<SortOrder>;
	address?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	is_sold?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user_sub?: InputMaybe<SortOrder>;
};

export type AdOrderByWithRelationInput = {
	AdPromotion?: InputMaybe<AdPromotionOrderByRelationAggregateInput>;
	ListAd?: InputMaybe<ListAdOrderByRelationAggregateInput>;
	ad_auto?: InputMaybe<AdAutoOrderByWithRelationInput>;
	ad_categories?: InputMaybe<AdCategoryOrderByRelationAggregateInput>;
	ad_house?: InputMaybe<AdHouseOrderByWithRelationInput>;
	ad_id?: InputMaybe<SortOrder>;
	address?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	files?: InputMaybe<FileOrderByRelationAggregateInput>;
	is_sold?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
	user_sub?: InputMaybe<SortOrder>;
};

export type AdPrice = {
	__typename?: 'AdPrice';
	price_eurocent?: Maybe<Scalars['Int']>;
};

export type AdPromotion = {
	__typename?: 'AdPromotion';
	ad: Ad;
	ad_id: Scalars['Int'];
	promotion_plan: PromotionPlan;
	promotion_plan_id: Scalars['Int'];
	transaction_id?: Maybe<Scalars['String']>;
	user: User;
	user_sub: Scalars['String'];
	valid_from?: Maybe<Scalars['DateTime']>;
	valid_to?: Maybe<Scalars['DateTime']>;
};

export type AdPromotionAvgAggregate = {
	__typename?: 'AdPromotionAvgAggregate';
	ad_id?: Maybe<Scalars['Float']>;
	promotion_plan_id?: Maybe<Scalars['Float']>;
};

export type AdPromotionCountAggregate = {
	__typename?: 'AdPromotionCountAggregate';
	_all: Scalars['Int'];
	ad_id: Scalars['Int'];
	promotion_plan_id: Scalars['Int'];
	transaction_id: Scalars['Int'];
	user_sub: Scalars['Int'];
	valid_from: Scalars['Int'];
	valid_to: Scalars['Int'];
};

export type AdPromotionCreateInput = {
	ad: AdCreateNestedOneWithoutAdPromotionInput;
	promotion_plan: PromotionPlanCreateNestedOneWithoutAdPromotionInput;
	transaction_id?: InputMaybe<Scalars['String']>;
	user: UserCreateNestedOneWithoutAdPromotionInput;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionCreateManyAdInput = {
	promotion_plan_id: Scalars['Int'];
	transaction_id?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionCreateManyAdInputEnvelope = {
	data: Array<AdPromotionCreateManyAdInput>;
};

export type AdPromotionCreateManyPromotion_PlanInput = {
	ad_id: Scalars['Int'];
	transaction_id?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionCreateManyPromotion_PlanInputEnvelope = {
	data: Array<AdPromotionCreateManyPromotion_PlanInput>;
};

export type AdPromotionCreateManyUserInput = {
	ad_id: Scalars['Int'];
	promotion_plan_id: Scalars['Int'];
	transaction_id?: InputMaybe<Scalars['String']>;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionCreateManyUserInputEnvelope = {
	data: Array<AdPromotionCreateManyUserInput>;
};

export type AdPromotionCreateNestedManyWithoutAdInput = {
	connect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdPromotionCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<AdPromotionCreateWithoutAdInput>>;
	createMany?: InputMaybe<AdPromotionCreateManyAdInputEnvelope>;
};

export type AdPromotionCreateNestedManyWithoutPromotion_PlanInput = {
	connect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdPromotionCreateOrConnectWithoutPromotion_PlanInput>>;
	create?: InputMaybe<Array<AdPromotionCreateWithoutPromotion_PlanInput>>;
	createMany?: InputMaybe<AdPromotionCreateManyPromotion_PlanInputEnvelope>;
};

export type AdPromotionCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdPromotionCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<AdPromotionCreateWithoutUserInput>>;
	createMany?: InputMaybe<AdPromotionCreateManyUserInputEnvelope>;
};

export type AdPromotionCreateOrConnectWithoutAdInput = {
	create: AdPromotionCreateWithoutAdInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionCreateOrConnectWithoutPromotion_PlanInput = {
	create: AdPromotionCreateWithoutPromotion_PlanInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionCreateOrConnectWithoutUserInput = {
	create: AdPromotionCreateWithoutUserInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionCreateWithoutAdInput = {
	promotion_plan: PromotionPlanCreateNestedOneWithoutAdPromotionInput;
	transaction_id?: InputMaybe<Scalars['String']>;
	user: UserCreateNestedOneWithoutAdPromotionInput;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionCreateWithoutPromotion_PlanInput = {
	ad: AdCreateNestedOneWithoutAdPromotionInput;
	transaction_id?: InputMaybe<Scalars['String']>;
	user: UserCreateNestedOneWithoutAdPromotionInput;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionCreateWithoutUserInput = {
	ad: AdCreateNestedOneWithoutAdPromotionInput;
	promotion_plan: PromotionPlanCreateNestedOneWithoutAdPromotionInput;
	transaction_id?: InputMaybe<Scalars['String']>;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type AdPromotionListRelationFilter = {
	every?: InputMaybe<AdPromotionWhereInput>;
	none?: InputMaybe<AdPromotionWhereInput>;
	some?: InputMaybe<AdPromotionWhereInput>;
};

export type AdPromotionMaxAggregate = {
	__typename?: 'AdPromotionMaxAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	promotion_plan_id?: Maybe<Scalars['Int']>;
	transaction_id?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
	valid_from?: Maybe<Scalars['DateTime']>;
	valid_to?: Maybe<Scalars['DateTime']>;
};

export type AdPromotionMinAggregate = {
	__typename?: 'AdPromotionMinAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	promotion_plan_id?: Maybe<Scalars['Int']>;
	transaction_id?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
	valid_from?: Maybe<Scalars['DateTime']>;
	valid_to?: Maybe<Scalars['DateTime']>;
};

export type AdPromotionOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type AdPromotionOrderByWithRelationInput = {
	ad?: InputMaybe<AdOrderByWithRelationInput>;
	ad_id?: InputMaybe<SortOrder>;
	promotion_plan?: InputMaybe<PromotionPlanOrderByWithRelationInput>;
	promotion_plan_id?: InputMaybe<SortOrder>;
	transaction_id?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
	user_sub?: InputMaybe<SortOrder>;
	valid_from?: InputMaybe<SortOrder>;
	valid_to?: InputMaybe<SortOrder>;
};

export type AdPromotionPromotion_Plan_IdAd_IdUser_SubCompoundUniqueInput = {
	ad_id: Scalars['Int'];
	promotion_plan_id: Scalars['Int'];
	user_sub: Scalars['String'];
};

export enum AdPromotionScalarFieldEnum {
	AdId = 'ad_id',
	PromotionPlanId = 'promotion_plan_id',
	TransactionId = 'transaction_id',
	UserSub = 'user_sub',
	ValidFrom = 'valid_from',
	ValidTo = 'valid_to',
}

export type AdPromotionScalarWhereInput = {
	AND?: InputMaybe<Array<AdPromotionScalarWhereInput>>;
	NOT?: InputMaybe<Array<AdPromotionScalarWhereInput>>;
	OR?: InputMaybe<Array<AdPromotionScalarWhereInput>>;
	ad_id?: InputMaybe<IntFilter>;
	promotion_plan_id?: InputMaybe<IntFilter>;
	transaction_id?: InputMaybe<StringNullableFilter>;
	user_sub?: InputMaybe<StringFilter>;
	valid_from?: InputMaybe<DateTimeNullableFilter>;
	valid_to?: InputMaybe<DateTimeNullableFilter>;
};

export type AdPromotionSumAggregate = {
	__typename?: 'AdPromotionSumAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	promotion_plan_id?: Maybe<Scalars['Int']>;
};

export type AdPromotionUpdateManyMutationInput = {
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type AdPromotionUpdateManyWithWhereWithoutAdInput = {
	data: AdPromotionUpdateManyMutationInput;
	where: AdPromotionScalarWhereInput;
};

export type AdPromotionUpdateManyWithWhereWithoutPromotion_PlanInput = {
	data: AdPromotionUpdateManyMutationInput;
	where: AdPromotionScalarWhereInput;
};

export type AdPromotionUpdateManyWithWhereWithoutUserInput = {
	data: AdPromotionUpdateManyMutationInput;
	where: AdPromotionScalarWhereInput;
};

export type AdPromotionUpdateManyWithoutAdNestedInput = {
	connect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdPromotionCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<AdPromotionCreateWithoutAdInput>>;
	createMany?: InputMaybe<AdPromotionCreateManyAdInputEnvelope>;
	delete?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdPromotionScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	set?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	update?: InputMaybe<Array<AdPromotionUpdateWithWhereUniqueWithoutAdInput>>;
	updateMany?: InputMaybe<Array<AdPromotionUpdateManyWithWhereWithoutAdInput>>;
	upsert?: InputMaybe<Array<AdPromotionUpsertWithWhereUniqueWithoutAdInput>>;
};

export type AdPromotionUpdateManyWithoutPromotion_PlanNestedInput = {
	connect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdPromotionCreateOrConnectWithoutPromotion_PlanInput>>;
	create?: InputMaybe<Array<AdPromotionCreateWithoutPromotion_PlanInput>>;
	createMany?: InputMaybe<AdPromotionCreateManyPromotion_PlanInputEnvelope>;
	delete?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdPromotionScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	set?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	update?: InputMaybe<Array<AdPromotionUpdateWithWhereUniqueWithoutPromotion_PlanInput>>;
	updateMany?: InputMaybe<Array<AdPromotionUpdateManyWithWhereWithoutPromotion_PlanInput>>;
	upsert?: InputMaybe<Array<AdPromotionUpsertWithWhereUniqueWithoutPromotion_PlanInput>>;
};

export type AdPromotionUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdPromotionCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<AdPromotionCreateWithoutUserInput>>;
	createMany?: InputMaybe<AdPromotionCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdPromotionScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	set?: InputMaybe<Array<AdPromotionWhereUniqueInput>>;
	update?: InputMaybe<Array<AdPromotionUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<AdPromotionUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<AdPromotionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AdPromotionUpdateWithWhereUniqueWithoutAdInput = {
	data: AdPromotionUpdateWithoutAdInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionUpdateWithWhereUniqueWithoutPromotion_PlanInput = {
	data: AdPromotionUpdateWithoutPromotion_PlanInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionUpdateWithWhereUniqueWithoutUserInput = {
	data: AdPromotionUpdateWithoutUserInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionUpdateWithoutAdInput = {
	promotion_plan?: InputMaybe<PromotionPlanUpdateOneRequiredWithoutAdPromotionNestedInput>;
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutAdPromotionNestedInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type AdPromotionUpdateWithoutPromotion_PlanInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAdPromotionNestedInput>;
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutAdPromotionNestedInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type AdPromotionUpdateWithoutUserInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutAdPromotionNestedInput>;
	promotion_plan?: InputMaybe<PromotionPlanUpdateOneRequiredWithoutAdPromotionNestedInput>;
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type AdPromotionUpsertWithWhereUniqueWithoutAdInput = {
	create: AdPromotionCreateWithoutAdInput;
	update: AdPromotionUpdateWithoutAdInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionUpsertWithWhereUniqueWithoutPromotion_PlanInput = {
	create: AdPromotionCreateWithoutPromotion_PlanInput;
	update: AdPromotionUpdateWithoutPromotion_PlanInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionUpsertWithWhereUniqueWithoutUserInput = {
	create: AdPromotionCreateWithoutUserInput;
	update: AdPromotionUpdateWithoutUserInput;
	where: AdPromotionWhereUniqueInput;
};

export type AdPromotionWhereInput = {
	AND?: InputMaybe<Array<AdPromotionWhereInput>>;
	NOT?: InputMaybe<Array<AdPromotionWhereInput>>;
	OR?: InputMaybe<Array<AdPromotionWhereInput>>;
	ad?: InputMaybe<AdRelationFilter>;
	ad_id?: InputMaybe<IntFilter>;
	promotion_plan?: InputMaybe<PromotionPlanRelationFilter>;
	promotion_plan_id?: InputMaybe<IntFilter>;
	transaction_id?: InputMaybe<StringNullableFilter>;
	user?: InputMaybe<UserRelationFilter>;
	user_sub?: InputMaybe<StringFilter>;
	valid_from?: InputMaybe<DateTimeNullableFilter>;
	valid_to?: InputMaybe<DateTimeNullableFilter>;
};

export type AdPromotionWhereUniqueInput = {
	promotion_plan_id_ad_id_user_sub?: InputMaybe<AdPromotionPromotion_Plan_IdAd_IdUser_SubCompoundUniqueInput>;
};

export type AdRelationFilter = {
	is?: InputMaybe<AdWhereInput>;
	isNot?: InputMaybe<AdWhereInput>;
};

export enum AdScalarFieldEnum {
	AdId = 'ad_id',
	Address = 'address',
	CoordsLatitude = 'coords_latitude',
	CoordsLongitude = 'coords_longitude',
	CoordsRadius = 'coords_radius',
	CreatedAt = 'created_at',
	DeletedAt = 'deleted_at',
	IsSold = 'is_sold',
	ModerationFlag = 'moderation_flag',
	PriceEurocent = 'price_eurocent',
	PriceRating = 'price_rating',
	Text = 'text',
	Title = 'title',
	UpdatedAt = 'updated_at',
	UserSub = 'user_sub',
}

export type AdScalarWhereInput = {
	AND?: InputMaybe<Array<AdScalarWhereInput>>;
	NOT?: InputMaybe<Array<AdScalarWhereInput>>;
	OR?: InputMaybe<Array<AdScalarWhereInput>>;
	ad_id?: InputMaybe<IntFilter>;
	address?: InputMaybe<StringNullableFilter>;
	coords_latitude?: InputMaybe<FloatNullableFilter>;
	coords_longitude?: InputMaybe<FloatNullableFilter>;
	coords_radius?: InputMaybe<IntNullableFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	is_sold?: InputMaybe<BoolFilter>;
	price_eurocent?: InputMaybe<IntNullableFilter>;
	price_rating?: InputMaybe<DecimalNullableFilter>;
	text?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	user_sub?: InputMaybe<StringFilter>;
};

export type AdScalarWhereWithAggregatesInput = {
	AND?: InputMaybe<Array<AdScalarWhereWithAggregatesInput>>;
	NOT?: InputMaybe<Array<AdScalarWhereWithAggregatesInput>>;
	OR?: InputMaybe<Array<AdScalarWhereWithAggregatesInput>>;
	ad_id?: InputMaybe<IntWithAggregatesFilter>;
	address?: InputMaybe<StringNullableWithAggregatesFilter>;
	coords_latitude?: InputMaybe<FloatNullableWithAggregatesFilter>;
	coords_longitude?: InputMaybe<FloatNullableWithAggregatesFilter>;
	coords_radius?: InputMaybe<IntNullableWithAggregatesFilter>;
	created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
	deleted_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
	is_sold?: InputMaybe<BoolWithAggregatesFilter>;
	price_eurocent?: InputMaybe<IntNullableWithAggregatesFilter>;
	price_rating?: InputMaybe<DecimalNullableWithAggregatesFilter>;
	text?: InputMaybe<StringWithAggregatesFilter>;
	title?: InputMaybe<StringWithAggregatesFilter>;
	updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
	user_sub?: InputMaybe<StringWithAggregatesFilter>;
};

export type AdSumAggregate = {
	__typename?: 'AdSumAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	coords_latitude?: Maybe<Scalars['Float']>;
	coords_longitude?: Maybe<Scalars['Float']>;
	coords_radius?: Maybe<Scalars['Int']>;
	moderation_flag?: Maybe<Scalars['Int']>;
	price_eurocent?: Maybe<Scalars['Int']>;
	price_rating?: Maybe<Scalars['Decimal']>;
};

export type AdSumAggregateInput = {
	ad_id?: InputMaybe<Scalars['Boolean']>;
	coords_latitude?: InputMaybe<Scalars['Boolean']>;
	coords_longitude?: InputMaybe<Scalars['Boolean']>;
	coords_radius?: InputMaybe<Scalars['Boolean']>;
	price_eurocent?: InputMaybe<Scalars['Boolean']>;
	price_rating?: InputMaybe<Scalars['Boolean']>;
};

export type AdSumOrderByAggregateInput = {
	ad_id?: InputMaybe<SortOrder>;
	coords_latitude?: InputMaybe<SortOrder>;
	coords_longitude?: InputMaybe<SortOrder>;
	coords_radius?: InputMaybe<SortOrder>;
	price_eurocent?: InputMaybe<SortOrder>;
	price_rating?: InputMaybe<SortOrder>;
};

export type AdUpdateInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateManyMutationInput = {
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdUpdateManyWithWhereWithoutUserInput = {
	data: AdUpdateManyMutationInput;
	where: AdScalarWhereInput;
};

export type AdUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<AdWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<AdCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<AdCreateWithoutUserInput>>;
	createMany?: InputMaybe<AdCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<AdWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<AdScalarWhereInput>>;
	disconnect?: InputMaybe<Array<AdWhereUniqueInput>>;
	set?: InputMaybe<Array<AdWhereUniqueInput>>;
	update?: InputMaybe<Array<AdUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<AdUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<AdUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AdUpdateModerationInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	moderation_flag?: InputMaybe<IntFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateOneRequiredWithoutAdPromotionNestedInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAdPromotionInput>;
	create?: InputMaybe<AdCreateWithoutAdPromotionInput>;
	update?: InputMaybe<AdUpdateWithoutAdPromotionInput>;
	upsert?: InputMaybe<AdUpsertWithoutAdPromotionInput>;
};

export type AdUpdateOneRequiredWithoutAd_AutoNestedInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_AutoInput>;
	create?: InputMaybe<AdCreateWithoutAd_AutoInput>;
	update?: InputMaybe<AdUpdateWithoutAd_AutoInput>;
	upsert?: InputMaybe<AdUpsertWithoutAd_AutoInput>;
};

export type AdUpdateOneRequiredWithoutAd_CategoriesNestedInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutAd_CategoriesInput>;
	create?: InputMaybe<AdCreateWithoutAd_CategoriesInput>;
	update?: InputMaybe<AdUpdateWithoutAd_CategoriesInput>;
	upsert?: InputMaybe<AdUpsertWithoutAd_CategoriesInput>;
};

export type AdUpdateOneRequiredWithoutFilesNestedInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutFilesInput>;
	create?: InputMaybe<AdCreateWithoutFilesInput>;
	update?: InputMaybe<AdUpdateWithoutFilesInput>;
	upsert?: InputMaybe<AdUpsertWithoutFilesInput>;
};

export type AdUpdateOneRequiredWithoutListAdNestedInput = {
	connect?: InputMaybe<AdWhereUniqueInput>;
	connectOrCreate?: InputMaybe<AdCreateOrConnectWithoutListAdInput>;
	create?: InputMaybe<AdCreateWithoutListAdInput>;
	update?: InputMaybe<AdUpdateWithoutListAdInput>;
	upsert?: InputMaybe<AdUpsertWithoutListAdInput>;
};

export type AdUpdateWithWhereUniqueWithoutUserInput = {
	data: AdUpdateWithoutUserInput;
	where: AdWhereUniqueInput;
};

export type AdUpdateWithoutAdPromotionInput = {
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutAd_AutoInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutAd_CategoriesInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutFilesInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutListAdInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutAdsNestedInput>;
};

export type AdUpdateWithoutUserInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutAdNestedInput>;
	ListAd?: InputMaybe<ListAdUpdateManyWithoutAdNestedInput>;
	ad_auto?: InputMaybe<AdAutoUpdateOneWithoutAdNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutAdNestedInput>;
	ad_house?: InputMaybe<AdHouseUpdateOneWithoutAdNestedInput>;
	address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	coords_latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
	coords_radius?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	files?: InputMaybe<FileUpdateManyWithoutAdNestedInput>;
	is_sold?: InputMaybe<BoolFieldUpdateOperationsInput>;
	price_eurocent?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
	price_rating?: InputMaybe<NullableDecimalFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AdUpsertWithWhereUniqueWithoutUserInput = {
	create: AdCreateWithoutUserInput;
	update: AdUpdateWithoutUserInput;
	where: AdWhereUniqueInput;
};

export type AdUpsertWithoutAdPromotionInput = {
	create: AdCreateWithoutAdPromotionInput;
	update: AdUpdateWithoutAdPromotionInput;
};

export type AdUpsertWithoutAd_AutoInput = {
	create: AdCreateWithoutAd_AutoInput;
	update: AdUpdateWithoutAd_AutoInput;
};

export type AdUpsertWithoutAd_CategoriesInput = {
	create: AdCreateWithoutAd_CategoriesInput;
	update: AdUpdateWithoutAd_CategoriesInput;
};

export type AdUpsertWithoutFilesInput = {
	create: AdCreateWithoutFilesInput;
	update: AdUpdateWithoutFilesInput;
};

export type AdUpsertWithoutListAdInput = {
	create: AdCreateWithoutListAdInput;
	update: AdUpdateWithoutListAdInput;
};

export type AdWhereInput = {
	AND?: InputMaybe<Array<AdWhereInput>>;
	AdPromotion?: InputMaybe<AdPromotionListRelationFilter>;
	ListAd?: InputMaybe<ListAdListRelationFilter>;
	NOT?: InputMaybe<Array<AdWhereInput>>;
	OR?: InputMaybe<Array<AdWhereInput>>;
	ad_auto?: InputMaybe<AdAutoRelationFilter>;
	ad_categories?: InputMaybe<AdCategoryListRelationFilter>;
	ad_house?: InputMaybe<AdHouseRelationFilter>;
	ad_id?: InputMaybe<IntFilter>;
	address?: InputMaybe<StringNullableFilter>;
	coords_latitude?: InputMaybe<FloatNullableFilter>;
	coords_longitude?: InputMaybe<FloatNullableFilter>;
	coords_radius?: InputMaybe<IntNullableFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	files?: InputMaybe<FileListRelationFilter>;
	is_sold?: InputMaybe<BoolFilter>;
	price_eurocent?: InputMaybe<IntNullableFilter>;
	price_rating?: InputMaybe<DecimalNullableFilter>;
	text?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	user?: InputMaybe<UserRelationFilter>;
	user_sub?: InputMaybe<StringFilter>;
};

export type AdWhereUniqueInput = {
	ad_id?: InputMaybe<Scalars['Int']>;
};

export type AggregateAd = {
	__typename?: 'AggregateAd';
	_avg?: Maybe<AdAvgAggregate>;
	_count?: Maybe<AdCountAggregate>;
	_max?: Maybe<AdMaxAggregate>;
	_min?: Maybe<AdMinAggregate>;
	_sum?: Maybe<AdSumAggregate>;
};

export type AggregateCategory = {
	__typename?: 'AggregateCategory';
	_avg?: Maybe<CategoryAvgAggregate>;
	_count?: Maybe<CategoryCountAggregate>;
	_max?: Maybe<CategoryMaxAggregate>;
	_min?: Maybe<CategoryMinAggregate>;
	_sum?: Maybe<CategorySumAggregate>;
};

export type Blog = {
	__typename?: 'Blog';
	blog_id: Scalars['ID'];
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	language?: Maybe<Category>;
	language_cid?: Maybe<Scalars['Int']>;
	/** 0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error */
	moderation_flag: Scalars['Int'];
	slug: Scalars['String'];
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at: Scalars['DateTime'];
	user: User;
	user_sub: Scalars['String'];
};

export type BlogAvgAggregate = {
	__typename?: 'BlogAvgAggregate';
	blog_id?: Maybe<Scalars['Float']>;
	language_cid?: Maybe<Scalars['Float']>;
	moderation_flag?: Maybe<Scalars['Float']>;
};

export type BlogCountAggregate = {
	__typename?: 'BlogCountAggregate';
	_all: Scalars['Int'];
	blog_id: Scalars['Int'];
	created_at: Scalars['Int'];
	deleted_at: Scalars['Int'];
	language_cid: Scalars['Int'];
	moderation_flag: Scalars['Int'];
	slug: Scalars['Int'];
	text: Scalars['Int'];
	title: Scalars['Int'];
	updated_at: Scalars['Int'];
	user_sub: Scalars['Int'];
};

export type BlogCreateManyLanguageInput = {
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateManyLanguageInputEnvelope = {
	data: Array<BlogCreateManyLanguageInput>;
};

export type BlogCreateManyUserInput = {
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	language_cid?: InputMaybe<Scalars['Int']>;
	slug: Scalars['String'];
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateManyUserInputEnvelope = {
	data: Array<BlogCreateManyUserInput>;
};

export type BlogCreateNestedManyWithoutLanguageInput = {
	connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutLanguageInput>>;
	create?: InputMaybe<Array<BlogCreateWithoutLanguageInput>>;
	createMany?: InputMaybe<BlogCreateManyLanguageInputEnvelope>;
};

export type BlogCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<BlogCreateWithoutUserInput>>;
	createMany?: InputMaybe<BlogCreateManyUserInputEnvelope>;
};

export type BlogCreateOrConnectWithoutLanguageInput = {
	create: BlogCreateWithoutLanguageInput;
	where: BlogWhereUniqueInput;
};

export type BlogCreateOrConnectWithoutUserInput = {
	create: BlogCreateWithoutUserInput;
	where: BlogWhereUniqueInput;
};

export type BlogCreateWithoutLanguageInput = {
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	slug: Scalars['String'];
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	user: UserCreateNestedOneWithoutBlogsInput;
};

export type BlogCreateWithoutUserInput = {
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	language?: InputMaybe<CategoryCreateNestedOneWithoutLanguageInput>;
	slug: Scalars['String'];
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type BlogListRelationFilter = {
	every?: InputMaybe<BlogWhereInput>;
	none?: InputMaybe<BlogWhereInput>;
	some?: InputMaybe<BlogWhereInput>;
};

export type BlogMaxAggregate = {
	__typename?: 'BlogMaxAggregate';
	blog_id?: Maybe<Scalars['Int']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	language_cid?: Maybe<Scalars['Int']>;
	moderation_flag?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type BlogMinAggregate = {
	__typename?: 'BlogMinAggregate';
	blog_id?: Maybe<Scalars['Int']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	language_cid?: Maybe<Scalars['Int']>;
	moderation_flag?: Maybe<Scalars['Int']>;
	slug?: Maybe<Scalars['String']>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type BlogOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type BlogOrderByWithRelationInput = {
	blog_id?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	language?: InputMaybe<CategoryOrderByWithRelationInput>;
	language_cid?: InputMaybe<SortOrder>;
	slug?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum BlogScalarFieldEnum {
	BlogId = 'blog_id',
	CreatedAt = 'created_at',
	DeletedAt = 'deleted_at',
	LanguageCid = 'language_cid',
	ModerationFlag = 'moderation_flag',
	Slug = 'slug',
	Text = 'text',
	Title = 'title',
	UpdatedAt = 'updated_at',
	UserSub = 'user_sub',
}

export type BlogScalarWhereInput = {
	AND?: InputMaybe<Array<BlogScalarWhereInput>>;
	NOT?: InputMaybe<Array<BlogScalarWhereInput>>;
	OR?: InputMaybe<Array<BlogScalarWhereInput>>;
	blog_id?: InputMaybe<IntFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	language_cid?: InputMaybe<IntNullableFilter>;
	slug?: InputMaybe<StringFilter>;
	text?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
};

export type BlogSumAggregate = {
	__typename?: 'BlogSumAggregate';
	blog_id?: Maybe<Scalars['Int']>;
	language_cid?: Maybe<Scalars['Int']>;
	moderation_flag?: Maybe<Scalars['Int']>;
};

export type BlogUpdateInput = {
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	language?: InputMaybe<CategoryUpdateOneWithoutLanguageNestedInput>;
	slug?: InputMaybe<StringFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutBlogsNestedInput>;
};

export type BlogUpdateManyMutationInput = {
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	slug?: InputMaybe<StringFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpdateManyWithWhereWithoutLanguageInput = {
	data: BlogUpdateManyMutationInput;
	where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithWhereWithoutUserInput = {
	data: BlogUpdateManyMutationInput;
	where: BlogScalarWhereInput;
};

export type BlogUpdateManyWithoutLanguageNestedInput = {
	connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutLanguageInput>>;
	create?: InputMaybe<Array<BlogCreateWithoutLanguageInput>>;
	createMany?: InputMaybe<BlogCreateManyLanguageInputEnvelope>;
	delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
	disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
	set?: InputMaybe<Array<BlogWhereUniqueInput>>;
	update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutLanguageInput>>;
	updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutLanguageInput>>;
	upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutLanguageInput>>;
};

export type BlogUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<BlogCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<BlogCreateWithoutUserInput>>;
	createMany?: InputMaybe<BlogCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<BlogScalarWhereInput>>;
	disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
	set?: InputMaybe<Array<BlogWhereUniqueInput>>;
	update?: InputMaybe<Array<BlogUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<BlogUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<BlogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BlogUpdateWithWhereUniqueWithoutLanguageInput = {
	data: BlogUpdateWithoutLanguageInput;
	where: BlogWhereUniqueInput;
};

export type BlogUpdateWithWhereUniqueWithoutUserInput = {
	data: BlogUpdateWithoutUserInput;
	where: BlogWhereUniqueInput;
};

export type BlogUpdateWithoutLanguageInput = {
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	slug?: InputMaybe<StringFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutBlogsNestedInput>;
};

export type BlogUpdateWithoutUserInput = {
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	language?: InputMaybe<CategoryUpdateOneWithoutLanguageNestedInput>;
	slug?: InputMaybe<StringFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BlogUpsertWithWhereUniqueWithoutLanguageInput = {
	create: BlogCreateWithoutLanguageInput;
	update: BlogUpdateWithoutLanguageInput;
	where: BlogWhereUniqueInput;
};

export type BlogUpsertWithWhereUniqueWithoutUserInput = {
	create: BlogCreateWithoutUserInput;
	update: BlogUpdateWithoutUserInput;
	where: BlogWhereUniqueInput;
};

export type BlogWhereInput = {
	AND?: InputMaybe<Array<BlogWhereInput>>;
	NOT?: InputMaybe<Array<BlogWhereInput>>;
	OR?: InputMaybe<Array<BlogWhereInput>>;
	blog_id?: InputMaybe<IntFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	language?: InputMaybe<CategoryRelationFilter>;
	language_cid?: InputMaybe<IntNullableFilter>;
	slug?: InputMaybe<StringFilter>;
	text?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	user?: InputMaybe<UserRelationFilter>;
};

export type BlogWhereUniqueInput = {
	blog_id?: InputMaybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedBoolFilter>;
	_min?: InputMaybe<NestedBoolFilter>;
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
	__typename?: 'Category';
	AdAutoBodyType?: Maybe<Array<AdAuto>>;
	AdAutoColorExterior?: Maybe<Array<AdAuto>>;
	AdAutoColorInterior?: Maybe<Array<AdAuto>>;
	AdAutoConditionType?: Maybe<Array<AdAuto>>;
	AdAutoConditioning?: Maybe<Array<AdAuto>>;
	AdAutoEmissionClass?: Maybe<Array<AdAuto>>;
	AdAutoFuelType?: Maybe<Array<AdAuto>>;
	AdAutoMake?: Maybe<Array<AdAuto>>;
	AdAutoModel?: Maybe<Array<AdAuto>>;
	AdAutoTransmissionType?: Maybe<Array<AdAuto>>;
	AdAutoVariant?: Maybe<Array<AdAuto>>;
	AdAutoVehicleType?: Maybe<Array<AdAuto>>;
	Language?: Maybe<Array<Blog>>;
	PromotionRegion?: Maybe<Array<PromotionPlan>>;
	_count: CategoryCount;
	ad_categories?: Maybe<Array<AdCategory>>;
	category_id: Scalars['ID'];
	children?: Maybe<Array<Category>>;
	code: Scalars['String'];
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	icon?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: Maybe<Category>;
	parent_category_id?: Maybe<Scalars['Int']>;
	updated_at: Scalars['DateTime'];
	weight?: Maybe<Scalars['Int']>;
};

export type CategoryAvgAggregate = {
	__typename?: 'CategoryAvgAggregate';
	category_id?: Maybe<Scalars['Float']>;
	parent_category_id?: Maybe<Scalars['Float']>;
	weight?: Maybe<Scalars['Float']>;
};

export type CategoryAvgAggregateInput = {
	category_id?: InputMaybe<Scalars['Boolean']>;
	parent_category_id?: InputMaybe<Scalars['Boolean']>;
	weight?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryAvgOrderByAggregateInput = {
	category_id?: InputMaybe<SortOrder>;
	parent_category_id?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryCount = {
	__typename?: 'CategoryCount';
	AdAutoBodyType: Scalars['Int'];
	AdAutoColorExterior: Scalars['Int'];
	AdAutoColorInterior: Scalars['Int'];
	AdAutoConditionType: Scalars['Int'];
	AdAutoConditioning: Scalars['Int'];
	AdAutoEmissionClass: Scalars['Int'];
	AdAutoFuelType: Scalars['Int'];
	AdAutoMake: Scalars['Int'];
	AdAutoModel: Scalars['Int'];
	AdAutoTransmissionType: Scalars['Int'];
	AdAutoVariant: Scalars['Int'];
	AdAutoVehicleType: Scalars['Int'];
	Language: Scalars['Int'];
	PromotionRegion: Scalars['Int'];
	ad_categories: Scalars['Int'];
	children: Scalars['Int'];
};

export type CategoryCountAggregate = {
	__typename?: 'CategoryCountAggregate';
	_all: Scalars['Int'];
	category_id: Scalars['Int'];
	code: Scalars['Int'];
	created_at: Scalars['Int'];
	deleted_at: Scalars['Int'];
	icon: Scalars['Int'];
	name: Scalars['Int'];
	parent_category_id: Scalars['Int'];
	updated_at: Scalars['Int'];
	weight: Scalars['Int'];
};

export type CategoryCountAggregateInput = {
	_all?: InputMaybe<Scalars['Boolean']>;
	category_id?: InputMaybe<Scalars['Boolean']>;
	code?: InputMaybe<Scalars['Boolean']>;
	created_at?: InputMaybe<Scalars['Boolean']>;
	deleted_at?: InputMaybe<Scalars['Boolean']>;
	icon?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['Boolean']>;
	parent_category_id?: InputMaybe<Scalars['Boolean']>;
	updated_at?: InputMaybe<Scalars['Boolean']>;
	weight?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryCountOrderByAggregateInput = {
	category_id?: InputMaybe<SortOrder>;
	code?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	icon?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	parent_category_id?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateManyParentInput = {
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateManyParentInputEnvelope = {
	data: Array<CategoryCreateManyParentInput>;
};

export type CategoryCreateNestedManyWithoutParentInput = {
	connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
	create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
	createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutAdAutoBodyTypeInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoBodyTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoBodyTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoColorExteriorInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoColorExteriorInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoColorExteriorInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoColorInteriorInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoColorInteriorInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoColorInteriorInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoConditionTypeInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoConditionTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoConditionTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoConditioningInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoConditioningInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoConditioningInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoEmissionClassInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoEmissionClassInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoEmissionClassInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoFuelTypeInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoFuelTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoFuelTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoMakeInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoMakeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoMakeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoModelInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoModelInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoModelInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoTransmissionTypeInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoVariantInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoVariantInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoVariantInput>;
};

export type CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoVehicleTypeInput>;
};

export type CategoryCreateNestedOneWithoutAd_CategoriesInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAd_CategoriesInput>;
	create?: InputMaybe<CategoryCreateWithoutAd_CategoriesInput>;
};

export type CategoryCreateNestedOneWithoutChildrenInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
	create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
};

export type CategoryCreateNestedOneWithoutLanguageInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutLanguageInput>;
	create?: InputMaybe<CategoryCreateWithoutLanguageInput>;
};

export type CategoryCreateNestedOneWithoutPromotionRegionInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutPromotionRegionInput>;
	create?: InputMaybe<CategoryCreateWithoutPromotionRegionInput>;
};

export type CategoryCreateOrConnectWithoutAdAutoBodyTypeInput = {
	create: CategoryCreateWithoutAdAutoBodyTypeInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoColorExteriorInput = {
	create: CategoryCreateWithoutAdAutoColorExteriorInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoColorInteriorInput = {
	create: CategoryCreateWithoutAdAutoColorInteriorInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoConditionTypeInput = {
	create: CategoryCreateWithoutAdAutoConditionTypeInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoConditioningInput = {
	create: CategoryCreateWithoutAdAutoConditioningInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoEmissionClassInput = {
	create: CategoryCreateWithoutAdAutoEmissionClassInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoFuelTypeInput = {
	create: CategoryCreateWithoutAdAutoFuelTypeInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoMakeInput = {
	create: CategoryCreateWithoutAdAutoMakeInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoModelInput = {
	create: CategoryCreateWithoutAdAutoModelInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput = {
	create: CategoryCreateWithoutAdAutoTransmissionTypeInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoVariantInput = {
	create: CategoryCreateWithoutAdAutoVariantInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput = {
	create: CategoryCreateWithoutAdAutoVehicleTypeInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutAd_CategoriesInput = {
	create: CategoryCreateWithoutAd_CategoriesInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutChildrenInput = {
	create: CategoryCreateWithoutChildrenInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutLanguageInput = {
	create: CategoryCreateWithoutLanguageInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutParentInput = {
	create: CategoryCreateWithoutParentInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutPromotionRegionInput = {
	create: CategoryCreateWithoutPromotionRegionInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutAdAutoBodyTypeInput = {
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoColorExteriorInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoColorInteriorInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoConditionTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoConditioningInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoEmissionClassInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoFuelTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoMakeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoModelInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoTransmissionTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoVariantInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAdAutoVehicleTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutAd_CategoriesInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutChildrenInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutLanguageInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutParentInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	PromotionRegion?: InputMaybe<PromotionPlanCreateNestedManyWithoutPromotion_RegionInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryCreateWithoutPromotionRegionInput = {
	AdAutoBodyType?: InputMaybe<AdAutoCreateNestedManyWithoutBody_TypeInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_ExteriorInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoCreateNestedManyWithoutColor_InteriorInput>;
	AdAutoConditionType?: InputMaybe<AdAutoCreateNestedManyWithoutCondition_TypeInput>;
	AdAutoConditioning?: InputMaybe<AdAutoCreateNestedManyWithoutConditioningInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoCreateNestedManyWithoutEmission_ClassInput>;
	AdAutoFuelType?: InputMaybe<AdAutoCreateNestedManyWithoutFuel_TypeInput>;
	AdAutoMake?: InputMaybe<AdAutoCreateNestedManyWithoutMakeInput>;
	AdAutoModel?: InputMaybe<AdAutoCreateNestedManyWithoutModelInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoCreateNestedManyWithoutTransmission_TypeInput>;
	AdAutoVariant?: InputMaybe<AdAutoCreateNestedManyWithoutVariantInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoCreateNestedManyWithoutVehicle_TypeInput>;
	Language?: InputMaybe<BlogCreateNestedManyWithoutLanguageInput>;
	ad_categories?: InputMaybe<AdCategoryCreateNestedManyWithoutCategoryInput>;
	children?: InputMaybe<CategoryCreateNestedManyWithoutParentInput>;
	code: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	parent?: InputMaybe<CategoryCreateNestedOneWithoutChildrenInput>;
	updated_at?: InputMaybe<Scalars['DateTime']>;
	weight?: InputMaybe<Scalars['Int']>;
};

export type CategoryGroupBy = {
	__typename?: 'CategoryGroupBy';
	_avg?: Maybe<CategoryAvgAggregate>;
	_count?: Maybe<CategoryCountAggregate>;
	_max?: Maybe<CategoryMaxAggregate>;
	_min?: Maybe<CategoryMinAggregate>;
	_sum?: Maybe<CategorySumAggregate>;
	category_id: Scalars['Int'];
	code: Scalars['String'];
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	icon?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	parent_category_id?: Maybe<Scalars['Int']>;
	updated_at: Scalars['DateTime'];
	weight?: Maybe<Scalars['Int']>;
};

export type CategoryListRelationFilter = {
	every?: InputMaybe<CategoryWhereInput>;
	none?: InputMaybe<CategoryWhereInput>;
	some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
	__typename?: 'CategoryMaxAggregate';
	category_id?: Maybe<Scalars['Int']>;
	code?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	icon?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	parent_category_id?: Maybe<Scalars['Int']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	weight?: Maybe<Scalars['Int']>;
};

export type CategoryMaxAggregateInput = {
	category_id?: InputMaybe<Scalars['Boolean']>;
	code?: InputMaybe<Scalars['Boolean']>;
	created_at?: InputMaybe<Scalars['Boolean']>;
	deleted_at?: InputMaybe<Scalars['Boolean']>;
	icon?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['Boolean']>;
	parent_category_id?: InputMaybe<Scalars['Boolean']>;
	updated_at?: InputMaybe<Scalars['Boolean']>;
	weight?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryMaxOrderByAggregateInput = {
	category_id?: InputMaybe<SortOrder>;
	code?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	icon?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	parent_category_id?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
	__typename?: 'CategoryMinAggregate';
	category_id?: Maybe<Scalars['Int']>;
	code?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	icon?: Maybe<Scalars['String']>;
	name?: Maybe<Scalars['String']>;
	parent_category_id?: Maybe<Scalars['Int']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	weight?: Maybe<Scalars['Int']>;
};

export type CategoryMinAggregateInput = {
	category_id?: InputMaybe<Scalars['Boolean']>;
	code?: InputMaybe<Scalars['Boolean']>;
	created_at?: InputMaybe<Scalars['Boolean']>;
	deleted_at?: InputMaybe<Scalars['Boolean']>;
	icon?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['Boolean']>;
	parent_category_id?: InputMaybe<Scalars['Boolean']>;
	updated_at?: InputMaybe<Scalars['Boolean']>;
	weight?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryMinOrderByAggregateInput = {
	category_id?: InputMaybe<SortOrder>;
	code?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	icon?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	parent_category_id?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
	_avg?: InputMaybe<CategoryAvgOrderByAggregateInput>;
	_count?: InputMaybe<CategoryCountOrderByAggregateInput>;
	_max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
	_min?: InputMaybe<CategoryMinOrderByAggregateInput>;
	_sum?: InputMaybe<CategorySumOrderByAggregateInput>;
	category_id?: InputMaybe<SortOrder>;
	code?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	icon?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	parent_category_id?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
	AdAutoBodyType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoConditionType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoConditioning?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoFuelType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoMake?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoModel?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoVariant?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoOrderByRelationAggregateInput>;
	Language?: InputMaybe<BlogOrderByRelationAggregateInput>;
	PromotionRegion?: InputMaybe<PromotionPlanOrderByRelationAggregateInput>;
	ad_categories?: InputMaybe<AdCategoryOrderByRelationAggregateInput>;
	category_id?: InputMaybe<SortOrder>;
	children?: InputMaybe<CategoryOrderByRelationAggregateInput>;
	code?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	icon?: InputMaybe<SortOrder>;
	name?: InputMaybe<SortOrder>;
	parent?: InputMaybe<CategoryOrderByWithRelationInput>;
	parent_category_id?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
	is?: InputMaybe<CategoryWhereInput>;
	isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
	CategoryId = 'category_id',
	Code = 'code',
	CreatedAt = 'created_at',
	DeletedAt = 'deleted_at',
	Icon = 'icon',
	Name = 'name',
	ParentCategoryId = 'parent_category_id',
	UpdatedAt = 'updated_at',
	Weight = 'weight',
}

export type CategoryScalarWhereInput = {
	AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
	NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
	OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
	category_id?: InputMaybe<IntFilter>;
	code?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	icon?: InputMaybe<StringNullableFilter>;
	name?: InputMaybe<StringFilter>;
	parent_category_id?: InputMaybe<IntNullableFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	weight?: InputMaybe<IntNullableFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
	AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
	NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
	OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
	category_id?: InputMaybe<IntWithAggregatesFilter>;
	code?: InputMaybe<StringWithAggregatesFilter>;
	created_at?: InputMaybe<DateTimeWithAggregatesFilter>;
	deleted_at?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
	icon?: InputMaybe<StringNullableWithAggregatesFilter>;
	name?: InputMaybe<StringWithAggregatesFilter>;
	parent_category_id?: InputMaybe<IntNullableWithAggregatesFilter>;
	updated_at?: InputMaybe<DateTimeWithAggregatesFilter>;
	weight?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type CategorySumAggregate = {
	__typename?: 'CategorySumAggregate';
	category_id?: Maybe<Scalars['Int']>;
	parent_category_id?: Maybe<Scalars['Int']>;
	weight?: Maybe<Scalars['Int']>;
};

export type CategorySumAggregateInput = {
	category_id?: InputMaybe<Scalars['Boolean']>;
	parent_category_id?: InputMaybe<Scalars['Boolean']>;
	weight?: InputMaybe<Scalars['Boolean']>;
};

export type CategorySumOrderByAggregateInput = {
	category_id?: InputMaybe<SortOrder>;
	parent_category_id?: InputMaybe<SortOrder>;
	weight?: InputMaybe<SortOrder>;
};

export type CategoryUpdateInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutParentInput = {
	data: CategoryUpdateManyMutationInput;
	where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutParentNestedInput = {
	connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutParentInput>>;
	create?: InputMaybe<Array<CategoryCreateWithoutParentInput>>;
	createMany?: InputMaybe<CategoryCreateManyParentInputEnvelope>;
	delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
	disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
	update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutParentInput>>;
	updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutParentInput>>;
	upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutParentInput>>;
};

export type CategoryUpdateOneRequiredWithoutAd_CategoriesNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAd_CategoriesInput>;
	create?: InputMaybe<CategoryCreateWithoutAd_CategoriesInput>;
	update?: InputMaybe<CategoryUpdateWithoutAd_CategoriesInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAd_CategoriesInput>;
};

export type CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoBodyTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoBodyTypeInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoBodyTypeInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoBodyTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoColorExteriorInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoColorExteriorInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoColorExteriorInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoColorExteriorInput>;
};

export type CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoColorInteriorInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoColorInteriorInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoColorInteriorInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoColorInteriorInput>;
};

export type CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoConditionTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoConditionTypeInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoConditionTypeInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoConditionTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoConditioningNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoConditioningInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoConditioningInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoConditioningInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoConditioningInput>;
};

export type CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoEmissionClassInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoEmissionClassInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoEmissionClassInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoEmissionClassInput>;
};

export type CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoFuelTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoFuelTypeInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoFuelTypeInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoFuelTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoMakeNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoMakeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoMakeInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoMakeInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoMakeInput>;
};

export type CategoryUpdateOneWithoutAdAutoModelNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoModelInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoModelInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoModelInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoModelInput>;
};

export type CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoTransmissionTypeInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoTransmissionTypeInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoTransmissionTypeInput>;
};

export type CategoryUpdateOneWithoutAdAutoVariantNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoVariantInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoVariantInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoVariantInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoVariantInput>;
};

export type CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput>;
	create?: InputMaybe<CategoryCreateWithoutAdAutoVehicleTypeInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutAdAutoVehicleTypeInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutAdAutoVehicleTypeInput>;
};

export type CategoryUpdateOneWithoutChildrenNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutChildrenInput>;
	create?: InputMaybe<CategoryCreateWithoutChildrenInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutChildrenInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutChildrenInput>;
};

export type CategoryUpdateOneWithoutLanguageNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutLanguageInput>;
	create?: InputMaybe<CategoryCreateWithoutLanguageInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutLanguageInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutLanguageInput>;
};

export type CategoryUpdateOneWithoutPromotionRegionNestedInput = {
	connect?: InputMaybe<CategoryWhereUniqueInput>;
	connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutPromotionRegionInput>;
	create?: InputMaybe<CategoryCreateWithoutPromotionRegionInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<CategoryUpdateWithoutPromotionRegionInput>;
	upsert?: InputMaybe<CategoryUpsertWithoutPromotionRegionInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
	data: CategoryUpdateWithoutParentInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutAdAutoBodyTypeInput = {
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoColorExteriorInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoColorInteriorInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoConditionTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoConditioningInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoEmissionClassInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoFuelTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoMakeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoModelInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoTransmissionTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoVariantInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAdAutoVehicleTypeInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutAd_CategoriesInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutChildrenInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutLanguageInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutParentInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	PromotionRegion?: InputMaybe<PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutPromotionRegionInput = {
	AdAutoBodyType?: InputMaybe<AdAutoUpdateManyWithoutBody_TypeNestedInput>;
	AdAutoColorExterior?: InputMaybe<AdAutoUpdateManyWithoutColor_ExteriorNestedInput>;
	AdAutoColorInterior?: InputMaybe<AdAutoUpdateManyWithoutColor_InteriorNestedInput>;
	AdAutoConditionType?: InputMaybe<AdAutoUpdateManyWithoutCondition_TypeNestedInput>;
	AdAutoConditioning?: InputMaybe<AdAutoUpdateManyWithoutConditioningNestedInput>;
	AdAutoEmissionClass?: InputMaybe<AdAutoUpdateManyWithoutEmission_ClassNestedInput>;
	AdAutoFuelType?: InputMaybe<AdAutoUpdateManyWithoutFuel_TypeNestedInput>;
	AdAutoMake?: InputMaybe<AdAutoUpdateManyWithoutMakeNestedInput>;
	AdAutoModel?: InputMaybe<AdAutoUpdateManyWithoutModelNestedInput>;
	AdAutoTransmissionType?: InputMaybe<AdAutoUpdateManyWithoutTransmission_TypeNestedInput>;
	AdAutoVariant?: InputMaybe<AdAutoUpdateManyWithoutVariantNestedInput>;
	AdAutoVehicleType?: InputMaybe<AdAutoUpdateManyWithoutVehicle_TypeNestedInput>;
	Language?: InputMaybe<BlogUpdateManyWithoutLanguageNestedInput>;
	ad_categories?: InputMaybe<AdCategoryUpdateManyWithoutCategoryNestedInput>;
	children?: InputMaybe<CategoryUpdateManyWithoutParentNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	name?: InputMaybe<StringFieldUpdateOperationsInput>;
	parent?: InputMaybe<CategoryUpdateOneWithoutChildrenNestedInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	weight?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
	create: CategoryCreateWithoutParentInput;
	update: CategoryUpdateWithoutParentInput;
	where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutAdAutoBodyTypeInput = {
	create: CategoryCreateWithoutAdAutoBodyTypeInput;
	update: CategoryUpdateWithoutAdAutoBodyTypeInput;
};

export type CategoryUpsertWithoutAdAutoColorExteriorInput = {
	create: CategoryCreateWithoutAdAutoColorExteriorInput;
	update: CategoryUpdateWithoutAdAutoColorExteriorInput;
};

export type CategoryUpsertWithoutAdAutoColorInteriorInput = {
	create: CategoryCreateWithoutAdAutoColorInteriorInput;
	update: CategoryUpdateWithoutAdAutoColorInteriorInput;
};

export type CategoryUpsertWithoutAdAutoConditionTypeInput = {
	create: CategoryCreateWithoutAdAutoConditionTypeInput;
	update: CategoryUpdateWithoutAdAutoConditionTypeInput;
};

export type CategoryUpsertWithoutAdAutoConditioningInput = {
	create: CategoryCreateWithoutAdAutoConditioningInput;
	update: CategoryUpdateWithoutAdAutoConditioningInput;
};

export type CategoryUpsertWithoutAdAutoEmissionClassInput = {
	create: CategoryCreateWithoutAdAutoEmissionClassInput;
	update: CategoryUpdateWithoutAdAutoEmissionClassInput;
};

export type CategoryUpsertWithoutAdAutoFuelTypeInput = {
	create: CategoryCreateWithoutAdAutoFuelTypeInput;
	update: CategoryUpdateWithoutAdAutoFuelTypeInput;
};

export type CategoryUpsertWithoutAdAutoMakeInput = {
	create: CategoryCreateWithoutAdAutoMakeInput;
	update: CategoryUpdateWithoutAdAutoMakeInput;
};

export type CategoryUpsertWithoutAdAutoModelInput = {
	create: CategoryCreateWithoutAdAutoModelInput;
	update: CategoryUpdateWithoutAdAutoModelInput;
};

export type CategoryUpsertWithoutAdAutoTransmissionTypeInput = {
	create: CategoryCreateWithoutAdAutoTransmissionTypeInput;
	update: CategoryUpdateWithoutAdAutoTransmissionTypeInput;
};

export type CategoryUpsertWithoutAdAutoVariantInput = {
	create: CategoryCreateWithoutAdAutoVariantInput;
	update: CategoryUpdateWithoutAdAutoVariantInput;
};

export type CategoryUpsertWithoutAdAutoVehicleTypeInput = {
	create: CategoryCreateWithoutAdAutoVehicleTypeInput;
	update: CategoryUpdateWithoutAdAutoVehicleTypeInput;
};

export type CategoryUpsertWithoutAd_CategoriesInput = {
	create: CategoryCreateWithoutAd_CategoriesInput;
	update: CategoryUpdateWithoutAd_CategoriesInput;
};

export type CategoryUpsertWithoutChildrenInput = {
	create: CategoryCreateWithoutChildrenInput;
	update: CategoryUpdateWithoutChildrenInput;
};

export type CategoryUpsertWithoutLanguageInput = {
	create: CategoryCreateWithoutLanguageInput;
	update: CategoryUpdateWithoutLanguageInput;
};

export type CategoryUpsertWithoutPromotionRegionInput = {
	create: CategoryCreateWithoutPromotionRegionInput;
	update: CategoryUpdateWithoutPromotionRegionInput;
};

export type CategoryWhereInput = {
	AND?: InputMaybe<Array<CategoryWhereInput>>;
	AdAutoBodyType?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoColorExterior?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoColorInterior?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoConditionType?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoConditioning?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoEmissionClass?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoFuelType?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoMake?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoModel?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoTransmissionType?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoVariant?: InputMaybe<AdAutoListRelationFilter>;
	AdAutoVehicleType?: InputMaybe<AdAutoListRelationFilter>;
	Language?: InputMaybe<BlogListRelationFilter>;
	NOT?: InputMaybe<Array<CategoryWhereInput>>;
	OR?: InputMaybe<Array<CategoryWhereInput>>;
	PromotionRegion?: InputMaybe<PromotionPlanListRelationFilter>;
	ad_categories?: InputMaybe<AdCategoryListRelationFilter>;
	category_id?: InputMaybe<IntFilter>;
	children?: InputMaybe<CategoryListRelationFilter>;
	code?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	icon?: InputMaybe<StringNullableFilter>;
	name?: InputMaybe<StringFilter>;
	parent?: InputMaybe<CategoryRelationFilter>;
	parent_category_id?: InputMaybe<IntNullableFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	weight?: InputMaybe<IntNullableFilter>;
};

export type CategoryWhereUniqueInput = {
	category_id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedDateTimeNullableFilter>;
	_min?: InputMaybe<NestedDateTimeNullableFilter>;
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedDateTimeFilter>;
	_min?: InputMaybe<NestedDateTimeFilter>;
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
	decrement?: InputMaybe<Scalars['Decimal']>;
	divide?: InputMaybe<Scalars['Decimal']>;
	increment?: InputMaybe<Scalars['Decimal']>;
	multiply?: InputMaybe<Scalars['Decimal']>;
	set?: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
	equals?: InputMaybe<Scalars['Decimal']>;
	gt?: InputMaybe<Scalars['Decimal']>;
	gte?: InputMaybe<Scalars['Decimal']>;
	in?: InputMaybe<Array<Scalars['Decimal']>>;
	lt?: InputMaybe<Scalars['Decimal']>;
	lte?: InputMaybe<Scalars['Decimal']>;
	not?: InputMaybe<NestedDecimalFilter>;
	notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableFilter = {
	equals?: InputMaybe<Scalars['Decimal']>;
	gt?: InputMaybe<Scalars['Decimal']>;
	gte?: InputMaybe<Scalars['Decimal']>;
	in?: InputMaybe<Array<Scalars['Decimal']>>;
	lt?: InputMaybe<Scalars['Decimal']>;
	lte?: InputMaybe<Scalars['Decimal']>;
	not?: InputMaybe<NestedDecimalNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalNullableWithAggregatesFilter = {
	_avg?: InputMaybe<NestedDecimalNullableFilter>;
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedDecimalNullableFilter>;
	_min?: InputMaybe<NestedDecimalNullableFilter>;
	_sum?: InputMaybe<NestedDecimalNullableFilter>;
	equals?: InputMaybe<Scalars['Decimal']>;
	gt?: InputMaybe<Scalars['Decimal']>;
	gte?: InputMaybe<Scalars['Decimal']>;
	in?: InputMaybe<Array<Scalars['Decimal']>>;
	lt?: InputMaybe<Scalars['Decimal']>;
	lte?: InputMaybe<Scalars['Decimal']>;
	not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type File = {
	__typename?: 'File';
	ad: Ad;
	ad_id: Scalars['Int'];
	code: Scalars['String'];
	file_id: Scalars['ID'];
	filename: Scalars['String'];
	filesize: Scalars['Int'];
	path: Scalars['String'];
	user?: Maybe<User>;
	user_sub: Scalars['String'];
};

export type FileAvgAggregate = {
	__typename?: 'FileAvgAggregate';
	ad_id?: Maybe<Scalars['Float']>;
	file_id?: Maybe<Scalars['Float']>;
	filesize?: Maybe<Scalars['Float']>;
};

export type FileCountAggregate = {
	__typename?: 'FileCountAggregate';
	_all: Scalars['Int'];
	ad_id: Scalars['Int'];
	code: Scalars['Int'];
	file_id: Scalars['Int'];
	filename: Scalars['Int'];
	filesize: Scalars['Int'];
	path: Scalars['Int'];
	user_sub: Scalars['Int'];
};

export type FileCreateManyAdInput = {
	code: Scalars['String'];
	filename: Scalars['String'];
	filesize: Scalars['Int'];
	path: Scalars['String'];
};

export type FileCreateManyAdInputEnvelope = {
	data: Array<FileCreateManyAdInput>;
};

export type FileCreateManyUserInput = {
	ad_id: Scalars['Int'];
	code: Scalars['String'];
	filename: Scalars['String'];
	filesize: Scalars['Int'];
	path: Scalars['String'];
};

export type FileCreateManyUserInputEnvelope = {
	data: Array<FileCreateManyUserInput>;
};

export type FileCreateNestedManyWithoutAdInput = {
	connect?: InputMaybe<Array<FileWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<FileCreateWithoutAdInput>>;
	createMany?: InputMaybe<FileCreateManyAdInputEnvelope>;
};

export type FileCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<FileWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
	createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
};

export type FileCreateOrConnectWithoutAdInput = {
	create: FileCreateWithoutAdInput;
	where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserInput = {
	create: FileCreateWithoutUserInput;
	where: FileWhereUniqueInput;
};

export type FileCreateWithoutAdInput = {
	code: Scalars['String'];
	filename: Scalars['String'];
	filesize: Scalars['Int'];
	path: Scalars['String'];
	user?: InputMaybe<UserCreateNestedOneWithoutFilesInput>;
};

export type FileCreateWithoutUserInput = {
	ad: AdCreateNestedOneWithoutFilesInput;
	code: Scalars['String'];
	filename: Scalars['String'];
	filesize: Scalars['Int'];
	path: Scalars['String'];
};

export type FileListRelationFilter = {
	every?: InputMaybe<FileWhereInput>;
	none?: InputMaybe<FileWhereInput>;
	some?: InputMaybe<FileWhereInput>;
};

export type FileMaxAggregate = {
	__typename?: 'FileMaxAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	code?: Maybe<Scalars['String']>;
	file_id?: Maybe<Scalars['Int']>;
	filename?: Maybe<Scalars['String']>;
	filesize?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type FileMinAggregate = {
	__typename?: 'FileMinAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	code?: Maybe<Scalars['String']>;
	file_id?: Maybe<Scalars['Int']>;
	filename?: Maybe<Scalars['String']>;
	filesize?: Maybe<Scalars['Int']>;
	path?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type FileOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type FileScalarWhereInput = {
	AND?: InputMaybe<Array<FileScalarWhereInput>>;
	NOT?: InputMaybe<Array<FileScalarWhereInput>>;
	OR?: InputMaybe<Array<FileScalarWhereInput>>;
	ad_id?: InputMaybe<IntFilter>;
	code?: InputMaybe<StringFilter>;
	file_id?: InputMaybe<IntFilter>;
	filename?: InputMaybe<StringFilter>;
	filesize?: InputMaybe<IntFilter>;
	path?: InputMaybe<StringFilter>;
};

export type FileSumAggregate = {
	__typename?: 'FileSumAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	file_id?: Maybe<Scalars['Int']>;
	filesize?: Maybe<Scalars['Int']>;
};

export type FileUpdateManyMutationInput = {
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	filename?: InputMaybe<StringFieldUpdateOperationsInput>;
	filesize?: InputMaybe<IntFieldUpdateOperationsInput>;
	path?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpdateManyWithWhereWithoutAdInput = {
	data: FileUpdateManyMutationInput;
	where: FileScalarWhereInput;
};

export type FileUpdateManyWithWhereWithoutUserInput = {
	data: FileUpdateManyMutationInput;
	where: FileScalarWhereInput;
};

export type FileUpdateManyWithoutAdNestedInput = {
	connect?: InputMaybe<Array<FileWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<FileCreateWithoutAdInput>>;
	createMany?: InputMaybe<FileCreateManyAdInputEnvelope>;
	delete?: InputMaybe<Array<FileWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
	disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
	set?: InputMaybe<Array<FileWhereUniqueInput>>;
	update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutAdInput>>;
	updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutAdInput>>;
	upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutAdInput>>;
};

export type FileUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<FileWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<FileCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<FileCreateWithoutUserInput>>;
	createMany?: InputMaybe<FileCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<FileWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<FileScalarWhereInput>>;
	disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
	set?: InputMaybe<Array<FileWhereUniqueInput>>;
	update?: InputMaybe<Array<FileUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<FileUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<FileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FileUpdateWithWhereUniqueWithoutAdInput = {
	data: FileUpdateWithoutAdInput;
	where: FileWhereUniqueInput;
};

export type FileUpdateWithWhereUniqueWithoutUserInput = {
	data: FileUpdateWithoutUserInput;
	where: FileWhereUniqueInput;
};

export type FileUpdateWithoutAdInput = {
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	filename?: InputMaybe<StringFieldUpdateOperationsInput>;
	filesize?: InputMaybe<IntFieldUpdateOperationsInput>;
	path?: InputMaybe<StringFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneWithoutFilesNestedInput>;
};

export type FileUpdateWithoutUserInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutFilesNestedInput>;
	code?: InputMaybe<StringFieldUpdateOperationsInput>;
	filename?: InputMaybe<StringFieldUpdateOperationsInput>;
	filesize?: InputMaybe<IntFieldUpdateOperationsInput>;
	path?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FileUpsertWithWhereUniqueWithoutAdInput = {
	create: FileCreateWithoutAdInput;
	update: FileUpdateWithoutAdInput;
	where: FileWhereUniqueInput;
};

export type FileUpsertWithWhereUniqueWithoutUserInput = {
	create: FileCreateWithoutUserInput;
	update: FileUpdateWithoutUserInput;
	where: FileWhereUniqueInput;
};

export type FileWhereInput = {
	AND?: InputMaybe<Array<FileWhereInput>>;
	NOT?: InputMaybe<Array<FileWhereInput>>;
	OR?: InputMaybe<Array<FileWhereInput>>;
	ad?: InputMaybe<AdRelationFilter>;
	ad_id?: InputMaybe<IntFilter>;
	code?: InputMaybe<StringFilter>;
	file_id?: InputMaybe<IntFilter>;
	filename?: InputMaybe<StringFilter>;
	filesize?: InputMaybe<IntFilter>;
	path?: InputMaybe<StringFilter>;
	user?: InputMaybe<UserRelationFilter>;
};

export type FileWhereUniqueInput = {
	file_id?: InputMaybe<Scalars['Int']>;
};

export type FloatNullableFilter = {
	equals?: InputMaybe<Scalars['Float']>;
	gt?: InputMaybe<Scalars['Float']>;
	gte?: InputMaybe<Scalars['Float']>;
	in?: InputMaybe<Array<Scalars['Float']>>;
	lt?: InputMaybe<Scalars['Float']>;
	lte?: InputMaybe<Scalars['Float']>;
	not?: InputMaybe<NestedFloatNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
	_avg?: InputMaybe<NestedFloatNullableFilter>;
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedFloatNullableFilter>;
	_min?: InputMaybe<NestedFloatNullableFilter>;
	_sum?: InputMaybe<NestedFloatNullableFilter>;
	equals?: InputMaybe<Scalars['Float']>;
	gt?: InputMaybe<Scalars['Float']>;
	gte?: InputMaybe<Scalars['Float']>;
	in?: InputMaybe<Array<Scalars['Float']>>;
	lt?: InputMaybe<Scalars['Float']>;
	lte?: InputMaybe<Scalars['Float']>;
	not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type GetSasTokenInput = {
	filename: Scalars['String'];
};

export type IntFieldUpdateOperationsInput = {
	decrement?: InputMaybe<Scalars['Int']>;
	divide?: InputMaybe<Scalars['Int']>;
	increment?: InputMaybe<Scalars['Int']>;
	multiply?: InputMaybe<Scalars['Int']>;
	set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
	_avg?: InputMaybe<NestedFloatNullableFilter>;
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedIntNullableFilter>;
	_min?: InputMaybe<NestedIntNullableFilter>;
	_sum?: InputMaybe<NestedIntNullableFilter>;
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
	_avg?: InputMaybe<NestedFloatFilter>;
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedIntFilter>;
	_min?: InputMaybe<NestedIntFilter>;
	_sum?: InputMaybe<NestedIntFilter>;
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type List = {
	__typename?: 'List';
	ListAd?: Maybe<Array<ListAd>>;
	_count: ListCount;
	is_notifiable_by_email: Scalars['Boolean'];
	is_notifiable_by_push: Scalars['Boolean'];
	is_notifiable_by_sms: Scalars['Boolean'];
	list_id: Scalars['ID'];
	/** 0 - Favorites, 1 - Saved Search */
	list_type: Scalars['Int'];
	search_params: Scalars['String'];
	title: Scalars['String'];
	user: User;
	user_sub: Scalars['String'];
};

export type ListAd = {
	__typename?: 'ListAd';
	ad: Ad;
	ad_id: Scalars['Int'];
	list: List;
	list_id: Scalars['Int'];
};

export type ListAdAd_IdList_IdCompoundUniqueInput = {
	ad_id: Scalars['Int'];
	list_id: Scalars['Int'];
};

export type ListAdAvgAggregate = {
	__typename?: 'ListAdAvgAggregate';
	ad_id?: Maybe<Scalars['Float']>;
	list_id?: Maybe<Scalars['Float']>;
};

export type ListAdCountAggregate = {
	__typename?: 'ListAdCountAggregate';
	_all: Scalars['Int'];
	ad_id: Scalars['Int'];
	list_id: Scalars['Int'];
};

export type ListAdCreateInput = {
	ad: AdCreateNestedOneWithoutListAdInput;
	list: ListCreateNestedOneWithoutListAdInput;
};

export type ListAdCreateManyAdInput = {
	list_id: Scalars['Int'];
};

export type ListAdCreateManyAdInputEnvelope = {
	data: Array<ListAdCreateManyAdInput>;
};

export type ListAdCreateManyListInput = {
	ad_id: Scalars['Int'];
};

export type ListAdCreateManyListInputEnvelope = {
	data: Array<ListAdCreateManyListInput>;
};

export type ListAdCreateNestedManyWithoutAdInput = {
	connect?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<ListAdCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<ListAdCreateWithoutAdInput>>;
	createMany?: InputMaybe<ListAdCreateManyAdInputEnvelope>;
};

export type ListAdCreateNestedManyWithoutListInput = {
	connect?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<ListAdCreateOrConnectWithoutListInput>>;
	create?: InputMaybe<Array<ListAdCreateWithoutListInput>>;
	createMany?: InputMaybe<ListAdCreateManyListInputEnvelope>;
};

export type ListAdCreateOrConnectWithoutAdInput = {
	create: ListAdCreateWithoutAdInput;
	where: ListAdWhereUniqueInput;
};

export type ListAdCreateOrConnectWithoutListInput = {
	create: ListAdCreateWithoutListInput;
	where: ListAdWhereUniqueInput;
};

export type ListAdCreateWithoutAdInput = {
	list: ListCreateNestedOneWithoutListAdInput;
};

export type ListAdCreateWithoutListInput = {
	ad: AdCreateNestedOneWithoutListAdInput;
};

export type ListAdListRelationFilter = {
	every?: InputMaybe<ListAdWhereInput>;
	none?: InputMaybe<ListAdWhereInput>;
	some?: InputMaybe<ListAdWhereInput>;
};

export type ListAdMaxAggregate = {
	__typename?: 'ListAdMaxAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	list_id?: Maybe<Scalars['Int']>;
};

export type ListAdMinAggregate = {
	__typename?: 'ListAdMinAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	list_id?: Maybe<Scalars['Int']>;
};

export type ListAdOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type ListAdScalarWhereInput = {
	AND?: InputMaybe<Array<ListAdScalarWhereInput>>;
	NOT?: InputMaybe<Array<ListAdScalarWhereInput>>;
	OR?: InputMaybe<Array<ListAdScalarWhereInput>>;
	ad_id?: InputMaybe<IntFilter>;
	list_id?: InputMaybe<IntFilter>;
};

export type ListAdSumAggregate = {
	__typename?: 'ListAdSumAggregate';
	ad_id?: Maybe<Scalars['Int']>;
	list_id?: Maybe<Scalars['Int']>;
};

export type ListAdUncheckedUpdateManyWithoutListAdInput = {
	list_id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ListAdUpdateManyWithWhereWithoutAdInput = {
	data: ListAdUncheckedUpdateManyWithoutListAdInput;
	where: ListAdScalarWhereInput;
};

export type ListAdUpdateManyWithWhereWithoutListInput = {
	data: ListAdUncheckedUpdateManyWithoutListAdInput;
	where: ListAdScalarWhereInput;
};

export type ListAdUpdateManyWithoutAdNestedInput = {
	connect?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<ListAdCreateOrConnectWithoutAdInput>>;
	create?: InputMaybe<Array<ListAdCreateWithoutAdInput>>;
	createMany?: InputMaybe<ListAdCreateManyAdInputEnvelope>;
	delete?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<ListAdScalarWhereInput>>;
	disconnect?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	set?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	update?: InputMaybe<Array<ListAdUpdateWithWhereUniqueWithoutAdInput>>;
	updateMany?: InputMaybe<Array<ListAdUpdateManyWithWhereWithoutAdInput>>;
	upsert?: InputMaybe<Array<ListAdUpsertWithWhereUniqueWithoutAdInput>>;
};

export type ListAdUpdateManyWithoutListNestedInput = {
	connect?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<ListAdCreateOrConnectWithoutListInput>>;
	create?: InputMaybe<Array<ListAdCreateWithoutListInput>>;
	createMany?: InputMaybe<ListAdCreateManyListInputEnvelope>;
	delete?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<ListAdScalarWhereInput>>;
	disconnect?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	set?: InputMaybe<Array<ListAdWhereUniqueInput>>;
	update?: InputMaybe<Array<ListAdUpdateWithWhereUniqueWithoutListInput>>;
	updateMany?: InputMaybe<Array<ListAdUpdateManyWithWhereWithoutListInput>>;
	upsert?: InputMaybe<Array<ListAdUpsertWithWhereUniqueWithoutListInput>>;
};

export type ListAdUpdateWithWhereUniqueWithoutAdInput = {
	data: ListAdUpdateWithoutAdInput;
	where: ListAdWhereUniqueInput;
};

export type ListAdUpdateWithWhereUniqueWithoutListInput = {
	data: ListAdUpdateWithoutListInput;
	where: ListAdWhereUniqueInput;
};

export type ListAdUpdateWithoutAdInput = {
	list?: InputMaybe<ListUpdateOneRequiredWithoutListAdNestedInput>;
};

export type ListAdUpdateWithoutListInput = {
	ad?: InputMaybe<AdUpdateOneRequiredWithoutListAdNestedInput>;
};

export type ListAdUpsertWithWhereUniqueWithoutAdInput = {
	create: ListAdCreateWithoutAdInput;
	update: ListAdUpdateWithoutAdInput;
	where: ListAdWhereUniqueInput;
};

export type ListAdUpsertWithWhereUniqueWithoutListInput = {
	create: ListAdCreateWithoutListInput;
	update: ListAdUpdateWithoutListInput;
	where: ListAdWhereUniqueInput;
};

export type ListAdWhereInput = {
	AND?: InputMaybe<Array<ListAdWhereInput>>;
	NOT?: InputMaybe<Array<ListAdWhereInput>>;
	OR?: InputMaybe<Array<ListAdWhereInput>>;
	ad?: InputMaybe<AdRelationFilter>;
	ad_id?: InputMaybe<IntFilter>;
	list?: InputMaybe<ListRelationFilter>;
	list_id?: InputMaybe<IntFilter>;
};

export type ListAdWhereUniqueInput = {
	ad_id_list_id?: InputMaybe<ListAdAd_IdList_IdCompoundUniqueInput>;
};

export type ListAvgAggregate = {
	__typename?: 'ListAvgAggregate';
	list_id?: Maybe<Scalars['Float']>;
	list_type?: Maybe<Scalars['Float']>;
};

export type ListCount = {
	__typename?: 'ListCount';
	ListAd: Scalars['Int'];
};

export type ListCountAggregate = {
	__typename?: 'ListCountAggregate';
	_all: Scalars['Int'];
	is_notifiable_by_email: Scalars['Int'];
	is_notifiable_by_push: Scalars['Int'];
	is_notifiable_by_sms: Scalars['Int'];
	list_id: Scalars['Int'];
	list_type: Scalars['Int'];
	search_params: Scalars['Int'];
	title: Scalars['Int'];
	user_sub: Scalars['Int'];
};

export type ListCreateInput = {
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutListInput>;
	is_notifiable_by_email?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_push?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_sms?: InputMaybe<Scalars['Boolean']>;
	list_type?: InputMaybe<Scalars['Int']>;
	search_params: Scalars['JSON'];
	title: Scalars['String'];
	user: UserCreateNestedOneWithoutListsInput;
};

export type ListCreateManyUserInput = {
	is_notifiable_by_email?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_push?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_sms?: InputMaybe<Scalars['Boolean']>;
	list_type?: InputMaybe<Scalars['Int']>;
	search_params: Scalars['JSON'];
	title: Scalars['String'];
};

export type ListCreateManyUserInputEnvelope = {
	data: Array<ListCreateManyUserInput>;
};

export type ListCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<ListWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<ListCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<ListCreateWithoutUserInput>>;
	createMany?: InputMaybe<ListCreateManyUserInputEnvelope>;
};

export type ListCreateNestedOneWithoutListAdInput = {
	connect?: InputMaybe<ListWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ListCreateOrConnectWithoutListAdInput>;
	create?: InputMaybe<ListCreateWithoutListAdInput>;
};

export type ListCreateOrConnectWithoutListAdInput = {
	create: ListCreateWithoutListAdInput;
	where: ListWhereUniqueInput;
};

export type ListCreateOrConnectWithoutUserInput = {
	create: ListCreateWithoutUserInput;
	where: ListWhereUniqueInput;
};

export type ListCreateWithoutListAdInput = {
	is_notifiable_by_email?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_push?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_sms?: InputMaybe<Scalars['Boolean']>;
	list_type?: InputMaybe<Scalars['Int']>;
	search_params: Scalars['JSON'];
	title: Scalars['String'];
	user: UserCreateNestedOneWithoutListsInput;
};

export type ListCreateWithoutUserInput = {
	ListAd?: InputMaybe<ListAdCreateNestedManyWithoutListInput>;
	is_notifiable_by_email?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_push?: InputMaybe<Scalars['Boolean']>;
	is_notifiable_by_sms?: InputMaybe<Scalars['Boolean']>;
	list_type?: InputMaybe<Scalars['Int']>;
	search_params: Scalars['JSON'];
	title: Scalars['String'];
};

export type ListListRelationFilter = {
	every?: InputMaybe<ListWhereInput>;
	none?: InputMaybe<ListWhereInput>;
	some?: InputMaybe<ListWhereInput>;
};

export type ListMaxAggregate = {
	__typename?: 'ListMaxAggregate';
	is_notifiable_by_email?: Maybe<Scalars['Boolean']>;
	is_notifiable_by_push?: Maybe<Scalars['Boolean']>;
	is_notifiable_by_sms?: Maybe<Scalars['Boolean']>;
	list_id?: Maybe<Scalars['Int']>;
	list_type?: Maybe<Scalars['Int']>;
	search_params?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type ListMinAggregate = {
	__typename?: 'ListMinAggregate';
	is_notifiable_by_email?: Maybe<Scalars['Boolean']>;
	is_notifiable_by_push?: Maybe<Scalars['Boolean']>;
	is_notifiable_by_sms?: Maybe<Scalars['Boolean']>;
	list_id?: Maybe<Scalars['Int']>;
	list_type?: Maybe<Scalars['Int']>;
	search_params?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type ListOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type ListOrderByWithRelationInput = {
	ListAd?: InputMaybe<ListAdOrderByRelationAggregateInput>;
	is_notifiable_by_email?: InputMaybe<SortOrder>;
	is_notifiable_by_push?: InputMaybe<SortOrder>;
	is_notifiable_by_sms?: InputMaybe<SortOrder>;
	list_id?: InputMaybe<SortOrder>;
	list_type?: InputMaybe<SortOrder>;
	search_params?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type ListRelationFilter = {
	is?: InputMaybe<ListWhereInput>;
	isNot?: InputMaybe<ListWhereInput>;
};

export enum ListScalarFieldEnum {
	IsNotifiableByEmail = 'is_notifiable_by_email',
	IsNotifiableByPush = 'is_notifiable_by_push',
	IsNotifiableBySms = 'is_notifiable_by_sms',
	ListId = 'list_id',
	ListType = 'list_type',
	SearchParams = 'search_params',
	Title = 'title',
	UserSub = 'user_sub',
}

export type ListScalarWhereInput = {
	AND?: InputMaybe<Array<ListScalarWhereInput>>;
	NOT?: InputMaybe<Array<ListScalarWhereInput>>;
	OR?: InputMaybe<Array<ListScalarWhereInput>>;
	is_notifiable_by_email?: InputMaybe<BoolFilter>;
	is_notifiable_by_push?: InputMaybe<BoolFilter>;
	is_notifiable_by_sms?: InputMaybe<BoolFilter>;
	list_id?: InputMaybe<IntFilter>;
	list_type?: InputMaybe<IntFilter>;
	search_params?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
};

export type ListSumAggregate = {
	__typename?: 'ListSumAggregate';
	list_id?: Maybe<Scalars['Int']>;
	list_type?: Maybe<Scalars['Int']>;
};

export type ListUpdateInput = {
	ListAd?: InputMaybe<ListAdUpdateManyWithoutListNestedInput>;
	is_notifiable_by_email?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_push?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_sms?: InputMaybe<BoolFieldUpdateOperationsInput>;
	list_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	search_params?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutListsNestedInput>;
};

export type ListUpdateManyMutationInput = {
	is_notifiable_by_email?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_push?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_sms?: InputMaybe<BoolFieldUpdateOperationsInput>;
	list_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	search_params?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ListUpdateManyWithWhereWithoutUserInput = {
	data: ListUpdateManyMutationInput;
	where: ListScalarWhereInput;
};

export type ListUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<ListWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<ListCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<ListCreateWithoutUserInput>>;
	createMany?: InputMaybe<ListCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<ListWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<ListScalarWhereInput>>;
	disconnect?: InputMaybe<Array<ListWhereUniqueInput>>;
	set?: InputMaybe<Array<ListWhereUniqueInput>>;
	update?: InputMaybe<Array<ListUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<ListUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<ListUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ListUpdateOneRequiredWithoutListAdNestedInput = {
	connect?: InputMaybe<ListWhereUniqueInput>;
	connectOrCreate?: InputMaybe<ListCreateOrConnectWithoutListAdInput>;
	create?: InputMaybe<ListCreateWithoutListAdInput>;
	update?: InputMaybe<ListUpdateWithoutListAdInput>;
	upsert?: InputMaybe<ListUpsertWithoutListAdInput>;
};

export type ListUpdateWithWhereUniqueWithoutUserInput = {
	data: ListUpdateWithoutUserInput;
	where: ListWhereUniqueInput;
};

export type ListUpdateWithoutListAdInput = {
	is_notifiable_by_email?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_push?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_sms?: InputMaybe<BoolFieldUpdateOperationsInput>;
	list_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	search_params?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutListsNestedInput>;
};

export type ListUpdateWithoutUserInput = {
	ListAd?: InputMaybe<ListAdUpdateManyWithoutListNestedInput>;
	is_notifiable_by_email?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_push?: InputMaybe<BoolFieldUpdateOperationsInput>;
	is_notifiable_by_sms?: InputMaybe<BoolFieldUpdateOperationsInput>;
	list_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	search_params?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ListUpsertWithWhereUniqueWithoutUserInput = {
	create: ListCreateWithoutUserInput;
	update: ListUpdateWithoutUserInput;
	where: ListWhereUniqueInput;
};

export type ListUpsertWithoutListAdInput = {
	create: ListCreateWithoutListAdInput;
	update: ListUpdateWithoutListAdInput;
};

export type ListWhereInput = {
	AND?: InputMaybe<Array<ListWhereInput>>;
	ListAd?: InputMaybe<ListAdListRelationFilter>;
	NOT?: InputMaybe<Array<ListWhereInput>>;
	OR?: InputMaybe<Array<ListWhereInput>>;
	is_notifiable_by_email?: InputMaybe<BoolFilter>;
	is_notifiable_by_push?: InputMaybe<BoolFilter>;
	is_notifiable_by_sms?: InputMaybe<BoolFilter>;
	list_id?: InputMaybe<IntFilter>;
	list_type?: InputMaybe<IntFilter>;
	search_params?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	user?: InputMaybe<UserRelationFilter>;
};

export type ListWhereUniqueInput = {
	list_id?: InputMaybe<Scalars['Int']>;
};

export type MessagingChannel = {
	__typename?: 'MessagingChannel';
	address: Scalars['String'];
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	/** 0 - iOS, 1 - Android, 2 - Web, 3 - Email, 4 - SMS */
	device_type: Scalars['Int'];
	messaging_channel_id: Scalars['ID'];
	platform: Scalars['String'];
	updated_at: Scalars['DateTime'];
	user: User;
	user_sub: Scalars['String'];
};

export type MessagingChannelAvgAggregate = {
	__typename?: 'MessagingChannelAvgAggregate';
	device_type?: Maybe<Scalars['Float']>;
	messaging_channel_id?: Maybe<Scalars['Float']>;
};

export type MessagingChannelCountAggregate = {
	__typename?: 'MessagingChannelCountAggregate';
	_all: Scalars['Int'];
	address: Scalars['Int'];
	created_at: Scalars['Int'];
	deleted_at: Scalars['Int'];
	device_type: Scalars['Int'];
	messaging_channel_id: Scalars['Int'];
	platform: Scalars['Int'];
	updated_at: Scalars['Int'];
	user_sub: Scalars['Int'];
};

export type MessagingChannelCreateManyUserInput = {
	address: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	device_type: Scalars['Int'];
	platform: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MessagingChannelCreateManyUserInputEnvelope = {
	data: Array<MessagingChannelCreateManyUserInput>;
};

export type MessagingChannelCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<MessagingChannelWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<MessagingChannelCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<MessagingChannelCreateWithoutUserInput>>;
	createMany?: InputMaybe<MessagingChannelCreateManyUserInputEnvelope>;
};

export type MessagingChannelCreateOrConnectWithoutUserInput = {
	create: MessagingChannelCreateWithoutUserInput;
	where: MessagingChannelWhereUniqueInput;
};

export type MessagingChannelCreateWithoutUserInput = {
	address: Scalars['String'];
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	device_type: Scalars['Int'];
	platform: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type MessagingChannelListRelationFilter = {
	every?: InputMaybe<MessagingChannelWhereInput>;
	none?: InputMaybe<MessagingChannelWhereInput>;
	some?: InputMaybe<MessagingChannelWhereInput>;
};

export type MessagingChannelMaxAggregate = {
	__typename?: 'MessagingChannelMaxAggregate';
	address?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	device_type?: Maybe<Scalars['Int']>;
	messaging_channel_id?: Maybe<Scalars['Int']>;
	platform?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type MessagingChannelMinAggregate = {
	__typename?: 'MessagingChannelMinAggregate';
	address?: Maybe<Scalars['String']>;
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	device_type?: Maybe<Scalars['Int']>;
	messaging_channel_id?: Maybe<Scalars['Int']>;
	platform?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type MessagingChannelOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type MessagingChannelOrderByWithRelationInput = {
	address?: InputMaybe<SortOrder>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	device_type?: InputMaybe<SortOrder>;
	messaging_channel_id?: InputMaybe<SortOrder>;
	platform?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
	user_sub?: InputMaybe<SortOrder>;
};

export enum MessagingChannelScalarFieldEnum {
	Address = 'address',
	CreatedAt = 'created_at',
	DeletedAt = 'deleted_at',
	DeviceType = 'device_type',
	MessagingChannelId = 'messaging_channel_id',
	Platform = 'platform',
	UpdatedAt = 'updated_at',
	UserSub = 'user_sub',
}

export type MessagingChannelScalarWhereInput = {
	AND?: InputMaybe<Array<MessagingChannelScalarWhereInput>>;
	NOT?: InputMaybe<Array<MessagingChannelScalarWhereInput>>;
	OR?: InputMaybe<Array<MessagingChannelScalarWhereInput>>;
	address?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	device_type?: InputMaybe<IntFilter>;
	messaging_channel_id?: InputMaybe<IntFilter>;
	platform?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	user_sub?: InputMaybe<StringFilter>;
};

export type MessagingChannelSumAggregate = {
	__typename?: 'MessagingChannelSumAggregate';
	device_type?: Maybe<Scalars['Int']>;
	messaging_channel_id?: Maybe<Scalars['Int']>;
};

export type MessagingChannelUpdateInput = {
	address?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	device_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	platform?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutMessagingChannelNestedInput>;
};

export type MessagingChannelUpdateManyMutationInput = {
	address?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	device_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	platform?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessagingChannelUpdateManyWithWhereWithoutUserInput = {
	data: MessagingChannelUpdateManyMutationInput;
	where: MessagingChannelScalarWhereInput;
};

export type MessagingChannelUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<MessagingChannelWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<MessagingChannelCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<MessagingChannelCreateWithoutUserInput>>;
	createMany?: InputMaybe<MessagingChannelCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<MessagingChannelWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<MessagingChannelScalarWhereInput>>;
	disconnect?: InputMaybe<Array<MessagingChannelWhereUniqueInput>>;
	set?: InputMaybe<Array<MessagingChannelWhereUniqueInput>>;
	update?: InputMaybe<Array<MessagingChannelUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<MessagingChannelUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<MessagingChannelUpsertWithWhereUniqueWithoutUserInput>>;
};

export type MessagingChannelUpdateWithWhereUniqueWithoutUserInput = {
	data: MessagingChannelUpdateWithoutUserInput;
	where: MessagingChannelWhereUniqueInput;
};

export type MessagingChannelUpdateWithoutUserInput = {
	address?: InputMaybe<StringFieldUpdateOperationsInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	device_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	platform?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessagingChannelUpsertWithWhereUniqueWithoutUserInput = {
	create: MessagingChannelCreateWithoutUserInput;
	update: MessagingChannelUpdateWithoutUserInput;
	where: MessagingChannelWhereUniqueInput;
};

export type MessagingChannelWhereInput = {
	AND?: InputMaybe<Array<MessagingChannelWhereInput>>;
	NOT?: InputMaybe<Array<MessagingChannelWhereInput>>;
	OR?: InputMaybe<Array<MessagingChannelWhereInput>>;
	address?: InputMaybe<StringFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	device_type?: InputMaybe<IntFilter>;
	messaging_channel_id?: InputMaybe<IntFilter>;
	platform?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	user?: InputMaybe<UserRelationFilter>;
	user_sub?: InputMaybe<StringFilter>;
};

export type MessagingChannelWhereUniqueInput = {
	messaging_channel_id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	addToFavorites?: Maybe<ListAd>;
	adminUpdateAd?: Maybe<Ad>;
	adminUpdateBlog?: Maybe<Blog>;
	adminUpdateUser?: Maybe<User>;
	createAd: Ad;
	createAdPromotion: AdPromotion;
	createBlog: Blog;
	createCategory: Category;
	createList: List;
	createListAd?: Maybe<ListAd>;
	createMessagingChannel: MessagingChannel;
	createPromotionPlan: PromotionPlan;
	createUser: User;
	createUserPromotion: UserPromotion;
	removeAd?: Maybe<Ad>;
	removeBlog?: Maybe<Blog>;
	removeCategory?: Maybe<Category>;
	removeList?: Maybe<Scalars['Int']>;
	removeListAd?: Maybe<ListAd>;
	removeMessagingChannel?: Maybe<MessagingChannel>;
	removePromotionPlan: PromotionPlan;
	removeUser?: Maybe<User>;
	updateAd?: Maybe<Ad>;
	updateBlog?: Maybe<Blog>;
	updateCategory?: Maybe<Category>;
	updateList?: Maybe<List>;
	updateManyCategories?: Maybe<Array<Category>>;
	updateMessagingChannel?: Maybe<MessagingChannel>;
	updatePromotionPlan: PromotionPlan;
	updateUser?: Maybe<User>;
};

export type MutationAddToFavoritesArgs = {
	where: AdWhereUniqueInput;
};

export type MutationAdminUpdateAdArgs = {
	data: AdUpdateModerationInput;
	where: AdWhereUniqueInput;
};

export type MutationAdminUpdateBlogArgs = {
	data: BlogUpdateInput;
	where: BlogWhereUniqueInput;
};

export type MutationAdminUpdateUserArgs = {
	data: UserUpdateModerationInput;
	where: UserWhereUniqueInput;
};

export type MutationCreateAdArgs = {
	data: AdCreateWithoutUserInput;
};

export type MutationCreateAdPromotionArgs = {
	data: AdPromotionCreateInput;
};

export type MutationCreateBlogArgs = {
	data: BlogCreateWithoutUserInput;
};

export type MutationCreateCategoryArgs = {
	data: CategoryCreateInput;
};

export type MutationCreateListArgs = {
	data: ListCreateInput;
};

export type MutationCreateListAdArgs = {
	data: ListAdCreateInput;
};

export type MutationCreateMessagingChannelArgs = {
	data: MessagingChannelCreateWithoutUserInput;
};

export type MutationCreatePromotionPlanArgs = {
	data: PromotionPlanCreateInput;
};

export type MutationCreateUserArgs = {
	data: UserCreateInput;
};

export type MutationCreateUserPromotionArgs = {
	data: UserPromotionCreateInput;
};

export type MutationRemoveAdArgs = {
	where: AdWhereUniqueInput;
};

export type MutationRemoveBlogArgs = {
	where: BlogWhereUniqueInput;
};

export type MutationRemoveCategoryArgs = {
	where: CategoryWhereUniqueInput;
};

export type MutationRemoveListArgs = {
	where: ListWhereUniqueInput;
};

export type MutationRemoveListAdArgs = {
	where: ListAdWhereUniqueInput;
};

export type MutationRemoveMessagingChannelArgs = {
	where: MessagingChannelWhereUniqueInput;
};

export type MutationRemovePromotionPlanArgs = {
	where: PromotionPlanWhereUniqueInput;
};

export type MutationRemoveUserArgs = {
	where: UserWhereUniqueInput;
};

export type MutationUpdateAdArgs = {
	data: AdUpdateInput;
	where: AdWhereUniqueInput;
};

export type MutationUpdateBlogArgs = {
	data: BlogUpdateInput;
	where: BlogWhereUniqueInput;
};

export type MutationUpdateCategoryArgs = {
	data: CategoryUpdateInput;
	where: CategoryWhereUniqueInput;
};

export type MutationUpdateListArgs = {
	data: ListUpdateInput;
	where: ListWhereUniqueInput;
};

export type MutationUpdateManyCategoriesArgs = {
	items: Array<UpdateManyCategoriesInput>;
};

export type MutationUpdateMessagingChannelArgs = {
	data: MessagingChannelUpdateInput;
	where: MessagingChannelWhereUniqueInput;
};

export type MutationUpdatePromotionPlanArgs = {
	data: PromotionPlanUpdateInput;
	where: PromotionPlanWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
	data: UserUpdateInput;
	where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedBoolFilter>;
	_min?: InputMaybe<NestedBoolFilter>;
	equals?: InputMaybe<Scalars['Boolean']>;
	not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedDateTimeNullableFilter>;
	_min?: InputMaybe<NestedDateTimeNullableFilter>;
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedDateTimeFilter>;
	_min?: InputMaybe<NestedDateTimeFilter>;
	equals?: InputMaybe<Scalars['DateTime']>;
	gt?: InputMaybe<Scalars['DateTime']>;
	gte?: InputMaybe<Scalars['DateTime']>;
	in?: InputMaybe<Array<Scalars['DateTime']>>;
	lt?: InputMaybe<Scalars['DateTime']>;
	lte?: InputMaybe<Scalars['DateTime']>;
	not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
	equals?: InputMaybe<Scalars['Decimal']>;
	gt?: InputMaybe<Scalars['Decimal']>;
	gte?: InputMaybe<Scalars['Decimal']>;
	in?: InputMaybe<Array<Scalars['Decimal']>>;
	lt?: InputMaybe<Scalars['Decimal']>;
	lte?: InputMaybe<Scalars['Decimal']>;
	not?: InputMaybe<NestedDecimalFilter>;
	notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableFilter = {
	equals?: InputMaybe<Scalars['Decimal']>;
	gt?: InputMaybe<Scalars['Decimal']>;
	gte?: InputMaybe<Scalars['Decimal']>;
	in?: InputMaybe<Array<Scalars['Decimal']>>;
	lt?: InputMaybe<Scalars['Decimal']>;
	lte?: InputMaybe<Scalars['Decimal']>;
	not?: InputMaybe<NestedDecimalNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalNullableWithAggregatesFilter = {
	_avg?: InputMaybe<NestedDecimalNullableFilter>;
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedDecimalNullableFilter>;
	_min?: InputMaybe<NestedDecimalNullableFilter>;
	_sum?: InputMaybe<NestedDecimalNullableFilter>;
	equals?: InputMaybe<Scalars['Decimal']>;
	gt?: InputMaybe<Scalars['Decimal']>;
	gte?: InputMaybe<Scalars['Decimal']>;
	in?: InputMaybe<Array<Scalars['Decimal']>>;
	lt?: InputMaybe<Scalars['Decimal']>;
	lte?: InputMaybe<Scalars['Decimal']>;
	not?: InputMaybe<NestedDecimalNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedFloatFilter = {
	equals?: InputMaybe<Scalars['Float']>;
	gt?: InputMaybe<Scalars['Float']>;
	gte?: InputMaybe<Scalars['Float']>;
	in?: InputMaybe<Array<Scalars['Float']>>;
	lt?: InputMaybe<Scalars['Float']>;
	lte?: InputMaybe<Scalars['Float']>;
	not?: InputMaybe<NestedFloatFilter>;
	notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
	equals?: InputMaybe<Scalars['Float']>;
	gt?: InputMaybe<Scalars['Float']>;
	gte?: InputMaybe<Scalars['Float']>;
	in?: InputMaybe<Array<Scalars['Float']>>;
	lt?: InputMaybe<Scalars['Float']>;
	lte?: InputMaybe<Scalars['Float']>;
	not?: InputMaybe<NestedFloatNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
	_avg?: InputMaybe<NestedFloatNullableFilter>;
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedFloatNullableFilter>;
	_min?: InputMaybe<NestedFloatNullableFilter>;
	_sum?: InputMaybe<NestedFloatNullableFilter>;
	equals?: InputMaybe<Scalars['Float']>;
	gt?: InputMaybe<Scalars['Float']>;
	gte?: InputMaybe<Scalars['Float']>;
	in?: InputMaybe<Array<Scalars['Float']>>;
	lt?: InputMaybe<Scalars['Float']>;
	lte?: InputMaybe<Scalars['Float']>;
	not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
	_avg?: InputMaybe<NestedFloatNullableFilter>;
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedIntNullableFilter>;
	_min?: InputMaybe<NestedIntNullableFilter>;
	_sum?: InputMaybe<NestedIntNullableFilter>;
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
	_avg?: InputMaybe<NestedFloatFilter>;
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedIntFilter>;
	_min?: InputMaybe<NestedIntFilter>;
	_sum?: InputMaybe<NestedIntFilter>;
	equals?: InputMaybe<Scalars['Int']>;
	gt?: InputMaybe<Scalars['Int']>;
	gte?: InputMaybe<Scalars['Int']>;
	in?: InputMaybe<Array<Scalars['Int']>>;
	lt?: InputMaybe<Scalars['Int']>;
	lte?: InputMaybe<Scalars['Int']>;
	not?: InputMaybe<NestedIntWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedStringNullableFilter>;
	_min?: InputMaybe<NestedStringNullableFilter>;
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedStringFilter>;
	_min?: InputMaybe<NestedStringFilter>;
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableDecimalFieldUpdateOperationsInput = {
	decrement?: InputMaybe<Scalars['Decimal']>;
	divide?: InputMaybe<Scalars['Decimal']>;
	increment?: InputMaybe<Scalars['Decimal']>;
	multiply?: InputMaybe<Scalars['Decimal']>;
	set?: InputMaybe<Scalars['Decimal']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
	decrement?: InputMaybe<Scalars['Float']>;
	divide?: InputMaybe<Scalars['Float']>;
	increment?: InputMaybe<Scalars['Float']>;
	multiply?: InputMaybe<Scalars['Float']>;
	set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
	decrement?: InputMaybe<Scalars['Int']>;
	divide?: InputMaybe<Scalars['Int']>;
	increment?: InputMaybe<Scalars['Int']>;
	multiply?: InputMaybe<Scalars['Int']>;
	set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['String']>;
};

export type PromotionPlan = {
	__typename?: 'PromotionPlan';
	AdPromotion?: Maybe<Array<AdPromotion>>;
	ChildPromotionPlan?: Maybe<Array<PromotionPlanRelation>>;
	ParentPromotionPlan?: Maybe<Array<PromotionPlanRelation>>;
	UserPromotion?: Maybe<Array<UserPromotion>>;
	_count: PromotionPlanCount;
	created_at: Scalars['DateTime'];
	deleted_at?: Maybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_id: Scalars['ID'];
	/** 0 - Ad, 1 - User */
	promotion_plan_type: Scalars['Int'];
	promotion_region?: Maybe<Category>;
	promotion_region_cid?: Maybe<Scalars['Int']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at: Scalars['DateTime'];
	/** In seconds */
	validity_period: Scalars['Int'];
};

export type PromotionPlanAvgAggregate = {
	__typename?: 'PromotionPlanAvgAggregate';
	price?: Maybe<Scalars['Decimal']>;
	promotion_plan_id?: Maybe<Scalars['Float']>;
	promotion_plan_type?: Maybe<Scalars['Float']>;
	promotion_region_cid?: Maybe<Scalars['Float']>;
	validity_period?: Maybe<Scalars['Float']>;
};

export type PromotionPlanCount = {
	__typename?: 'PromotionPlanCount';
	AdPromotion: Scalars['Int'];
	ChildPromotionPlan: Scalars['Int'];
	ParentPromotionPlan: Scalars['Int'];
	UserPromotion: Scalars['Int'];
};

export type PromotionPlanCountAggregate = {
	__typename?: 'PromotionPlanCountAggregate';
	_all: Scalars['Int'];
	created_at: Scalars['Int'];
	deleted_at: Scalars['Int'];
	price: Scalars['Int'];
	promotion_plan_id: Scalars['Int'];
	promotion_plan_type: Scalars['Int'];
	promotion_region_cid: Scalars['Int'];
	text: Scalars['Int'];
	title: Scalars['Int'];
	updated_at: Scalars['Int'];
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutChild_Promotion_PlanInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutParent_Promotion_PlanInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	promotion_region?: InputMaybe<CategoryCreateNestedOneWithoutPromotionRegionInput>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateManyPromotion_RegionInput = {
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateManyPromotion_RegionInputEnvelope = {
	data: Array<PromotionPlanCreateManyPromotion_RegionInput>;
};

export type PromotionPlanCreateNestedManyWithoutPromotion_RegionInput = {
	connect?: InputMaybe<Array<PromotionPlanWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<PromotionPlanCreateOrConnectWithoutPromotion_RegionInput>>;
	create?: InputMaybe<Array<PromotionPlanCreateWithoutPromotion_RegionInput>>;
	createMany?: InputMaybe<PromotionPlanCreateManyPromotion_RegionInputEnvelope>;
};

export type PromotionPlanCreateNestedOneWithoutAdPromotionInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutAdPromotionInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutAdPromotionInput>;
};

export type PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutChildPromotionPlanInput>;
};

export type PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutParentPromotionPlanInput>;
};

export type PromotionPlanCreateNestedOneWithoutUserPromotionInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutUserPromotionInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutUserPromotionInput>;
};

export type PromotionPlanCreateOrConnectWithoutAdPromotionInput = {
	create: PromotionPlanCreateWithoutAdPromotionInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput = {
	create: PromotionPlanCreateWithoutChildPromotionPlanInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput = {
	create: PromotionPlanCreateWithoutParentPromotionPlanInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanCreateOrConnectWithoutPromotion_RegionInput = {
	create: PromotionPlanCreateWithoutPromotion_RegionInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanCreateOrConnectWithoutUserPromotionInput = {
	create: PromotionPlanCreateWithoutUserPromotionInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanCreateWithoutAdPromotionInput = {
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutChild_Promotion_PlanInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutParent_Promotion_PlanInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	promotion_region?: InputMaybe<CategoryCreateNestedOneWithoutPromotionRegionInput>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateWithoutChildPromotionPlanInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutParent_Promotion_PlanInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	promotion_region?: InputMaybe<CategoryCreateNestedOneWithoutPromotionRegionInput>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateWithoutParentPromotionPlanInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutChild_Promotion_PlanInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	promotion_region?: InputMaybe<CategoryCreateNestedOneWithoutPromotionRegionInput>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateWithoutPromotion_RegionInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutChild_Promotion_PlanInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutParent_Promotion_PlanInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanCreateWithoutUserPromotionInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutPromotion_PlanInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutChild_Promotion_PlanInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationCreateNestedManyWithoutParent_Promotion_PlanInput>;
	created_at?: InputMaybe<Scalars['DateTime']>;
	deleted_at?: InputMaybe<Scalars['DateTime']>;
	price: Scalars['Decimal'];
	promotion_plan_type?: InputMaybe<Scalars['Int']>;
	promotion_region?: InputMaybe<CategoryCreateNestedOneWithoutPromotionRegionInput>;
	text: Scalars['String'];
	title: Scalars['String'];
	updated_at?: InputMaybe<Scalars['DateTime']>;
	validity_period: Scalars['Int'];
};

export type PromotionPlanListRelationFilter = {
	every?: InputMaybe<PromotionPlanWhereInput>;
	none?: InputMaybe<PromotionPlanWhereInput>;
	some?: InputMaybe<PromotionPlanWhereInput>;
};

export type PromotionPlanMaxAggregate = {
	__typename?: 'PromotionPlanMaxAggregate';
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	price?: Maybe<Scalars['Decimal']>;
	promotion_plan_id?: Maybe<Scalars['Int']>;
	promotion_plan_type?: Maybe<Scalars['Int']>;
	promotion_region_cid?: Maybe<Scalars['Int']>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	validity_period?: Maybe<Scalars['Int']>;
};

export type PromotionPlanMinAggregate = {
	__typename?: 'PromotionPlanMinAggregate';
	created_at?: Maybe<Scalars['DateTime']>;
	deleted_at?: Maybe<Scalars['DateTime']>;
	price?: Maybe<Scalars['Decimal']>;
	promotion_plan_id?: Maybe<Scalars['Int']>;
	promotion_plan_type?: Maybe<Scalars['Int']>;
	promotion_region_cid?: Maybe<Scalars['Int']>;
	text?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	updated_at?: Maybe<Scalars['DateTime']>;
	validity_period?: Maybe<Scalars['Int']>;
};

export type PromotionPlanOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type PromotionPlanOrderByWithRelationInput = {
	AdPromotion?: InputMaybe<AdPromotionOrderByRelationAggregateInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationOrderByRelationAggregateInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationOrderByRelationAggregateInput>;
	UserPromotion?: InputMaybe<UserPromotionOrderByRelationAggregateInput>;
	created_at?: InputMaybe<SortOrder>;
	deleted_at?: InputMaybe<SortOrder>;
	price?: InputMaybe<SortOrder>;
	promotion_plan_id?: InputMaybe<SortOrder>;
	promotion_plan_type?: InputMaybe<SortOrder>;
	promotion_region?: InputMaybe<CategoryOrderByWithRelationInput>;
	promotion_region_cid?: InputMaybe<SortOrder>;
	text?: InputMaybe<SortOrder>;
	title?: InputMaybe<SortOrder>;
	updated_at?: InputMaybe<SortOrder>;
	validity_period?: InputMaybe<SortOrder>;
};

export type PromotionPlanRelation = {
	__typename?: 'PromotionPlanRelation';
	child_promotion_plan: PromotionPlan;
	child_promotion_plan_id: Scalars['Int'];
	count: Scalars['Int'];
	parent_promotion_plan: PromotionPlan;
	parent_promotion_plan_id: Scalars['Int'];
	/** 0 - Daily, 1 - Weekly, 2 - Monthly, 3 - Yearly, 4 - One-time */
	reccurence: Scalars['Int'];
};

export type PromotionPlanRelationCreateManyChild_Promotion_PlanInput = {
	count?: InputMaybe<Scalars['Int']>;
	parent_promotion_plan_id: Scalars['Int'];
	reccurence?: InputMaybe<Scalars['Int']>;
};

export type PromotionPlanRelationCreateManyChild_Promotion_PlanInputEnvelope = {
	data: Array<PromotionPlanRelationCreateManyChild_Promotion_PlanInput>;
};

export type PromotionPlanRelationCreateManyParent_Promotion_PlanInput = {
	child_promotion_plan_id: Scalars['Int'];
	count?: InputMaybe<Scalars['Int']>;
	reccurence?: InputMaybe<Scalars['Int']>;
};

export type PromotionPlanRelationCreateManyParent_Promotion_PlanInputEnvelope = {
	data: Array<PromotionPlanRelationCreateManyParent_Promotion_PlanInput>;
};

export type PromotionPlanRelationCreateNestedManyWithoutChild_Promotion_PlanInput = {
	connect?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<PromotionPlanRelationCreateOrConnectWithoutChild_Promotion_PlanInput>>;
	create?: InputMaybe<Array<PromotionPlanRelationCreateWithoutChild_Promotion_PlanInput>>;
	createMany?: InputMaybe<PromotionPlanRelationCreateManyChild_Promotion_PlanInputEnvelope>;
};

export type PromotionPlanRelationCreateNestedManyWithoutParent_Promotion_PlanInput = {
	connect?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<PromotionPlanRelationCreateOrConnectWithoutParent_Promotion_PlanInput>>;
	create?: InputMaybe<Array<PromotionPlanRelationCreateWithoutParent_Promotion_PlanInput>>;
	createMany?: InputMaybe<PromotionPlanRelationCreateManyParent_Promotion_PlanInputEnvelope>;
};

export type PromotionPlanRelationCreateOrConnectWithoutChild_Promotion_PlanInput = {
	create: PromotionPlanRelationCreateWithoutChild_Promotion_PlanInput;
	where: PromotionPlanRelationWhereUniqueInput;
};

export type PromotionPlanRelationCreateOrConnectWithoutParent_Promotion_PlanInput = {
	create: PromotionPlanRelationCreateWithoutParent_Promotion_PlanInput;
	where: PromotionPlanRelationWhereUniqueInput;
};

export type PromotionPlanRelationCreateWithoutChild_Promotion_PlanInput = {
	count?: InputMaybe<Scalars['Int']>;
	parent_promotion_plan: PromotionPlanCreateNestedOneWithoutParentPromotionPlanInput;
	reccurence?: InputMaybe<Scalars['Int']>;
};

export type PromotionPlanRelationCreateWithoutParent_Promotion_PlanInput = {
	child_promotion_plan: PromotionPlanCreateNestedOneWithoutChildPromotionPlanInput;
	count?: InputMaybe<Scalars['Int']>;
	reccurence?: InputMaybe<Scalars['Int']>;
};

export type PromotionPlanRelationFilter = {
	is?: InputMaybe<PromotionPlanWhereInput>;
	isNot?: InputMaybe<PromotionPlanWhereInput>;
};

export type PromotionPlanRelationListRelationFilter = {
	every?: InputMaybe<PromotionPlanRelationWhereInput>;
	none?: InputMaybe<PromotionPlanRelationWhereInput>;
	some?: InputMaybe<PromotionPlanRelationWhereInput>;
};

export type PromotionPlanRelationOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type PromotionPlanRelationParent_Promotion_Plan_IdChild_Promotion_Plan_IdCompoundUniqueInput = {
	child_promotion_plan_id: Scalars['Int'];
	parent_promotion_plan_id: Scalars['Int'];
};

export type PromotionPlanRelationScalarWhereInput = {
	AND?: InputMaybe<Array<PromotionPlanRelationScalarWhereInput>>;
	NOT?: InputMaybe<Array<PromotionPlanRelationScalarWhereInput>>;
	OR?: InputMaybe<Array<PromotionPlanRelationScalarWhereInput>>;
	child_promotion_plan_id?: InputMaybe<IntFilter>;
	count?: InputMaybe<IntFilter>;
	parent_promotion_plan_id?: InputMaybe<IntFilter>;
	reccurence?: InputMaybe<IntFilter>;
};

export type PromotionPlanRelationUpdateManyMutationInput = {
	count?: InputMaybe<IntFieldUpdateOperationsInput>;
	reccurence?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanRelationUpdateManyWithWhereWithoutChild_Promotion_PlanInput = {
	data: PromotionPlanRelationUpdateManyMutationInput;
	where: PromotionPlanRelationScalarWhereInput;
};

export type PromotionPlanRelationUpdateManyWithWhereWithoutParent_Promotion_PlanInput = {
	data: PromotionPlanRelationUpdateManyMutationInput;
	where: PromotionPlanRelationScalarWhereInput;
};

export type PromotionPlanRelationUpdateManyWithoutChild_Promotion_PlanNestedInput = {
	connect?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<PromotionPlanRelationCreateOrConnectWithoutChild_Promotion_PlanInput>>;
	create?: InputMaybe<Array<PromotionPlanRelationCreateWithoutChild_Promotion_PlanInput>>;
	createMany?: InputMaybe<PromotionPlanRelationCreateManyChild_Promotion_PlanInputEnvelope>;
	delete?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<PromotionPlanRelationScalarWhereInput>>;
	disconnect?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	set?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	update?: InputMaybe<Array<PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_Promotion_PlanInput>>;
	updateMany?: InputMaybe<Array<PromotionPlanRelationUpdateManyWithWhereWithoutChild_Promotion_PlanInput>>;
	upsert?: InputMaybe<Array<PromotionPlanRelationUpsertWithWhereUniqueWithoutChild_Promotion_PlanInput>>;
};

export type PromotionPlanRelationUpdateManyWithoutParent_Promotion_PlanNestedInput = {
	connect?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<PromotionPlanRelationCreateOrConnectWithoutParent_Promotion_PlanInput>>;
	create?: InputMaybe<Array<PromotionPlanRelationCreateWithoutParent_Promotion_PlanInput>>;
	createMany?: InputMaybe<PromotionPlanRelationCreateManyParent_Promotion_PlanInputEnvelope>;
	delete?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<PromotionPlanRelationScalarWhereInput>>;
	disconnect?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	set?: InputMaybe<Array<PromotionPlanRelationWhereUniqueInput>>;
	update?: InputMaybe<Array<PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_Promotion_PlanInput>>;
	updateMany?: InputMaybe<Array<PromotionPlanRelationUpdateManyWithWhereWithoutParent_Promotion_PlanInput>>;
	upsert?: InputMaybe<Array<PromotionPlanRelationUpsertWithWhereUniqueWithoutParent_Promotion_PlanInput>>;
};

export type PromotionPlanRelationUpdateWithWhereUniqueWithoutChild_Promotion_PlanInput = {
	data: PromotionPlanRelationUpdateWithoutChild_Promotion_PlanInput;
	where: PromotionPlanRelationWhereUniqueInput;
};

export type PromotionPlanRelationUpdateWithWhereUniqueWithoutParent_Promotion_PlanInput = {
	data: PromotionPlanRelationUpdateWithoutParent_Promotion_PlanInput;
	where: PromotionPlanRelationWhereUniqueInput;
};

export type PromotionPlanRelationUpdateWithoutChild_Promotion_PlanInput = {
	count?: InputMaybe<IntFieldUpdateOperationsInput>;
	parent_promotion_plan?: InputMaybe<PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput>;
	reccurence?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanRelationUpdateWithoutParent_Promotion_PlanInput = {
	child_promotion_plan?: InputMaybe<PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput>;
	count?: InputMaybe<IntFieldUpdateOperationsInput>;
	reccurence?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanRelationUpsertWithWhereUniqueWithoutChild_Promotion_PlanInput = {
	create: PromotionPlanRelationCreateWithoutChild_Promotion_PlanInput;
	update: PromotionPlanRelationUpdateWithoutChild_Promotion_PlanInput;
	where: PromotionPlanRelationWhereUniqueInput;
};

export type PromotionPlanRelationUpsertWithWhereUniqueWithoutParent_Promotion_PlanInput = {
	create: PromotionPlanRelationCreateWithoutParent_Promotion_PlanInput;
	update: PromotionPlanRelationUpdateWithoutParent_Promotion_PlanInput;
	where: PromotionPlanRelationWhereUniqueInput;
};

export type PromotionPlanRelationWhereInput = {
	AND?: InputMaybe<Array<PromotionPlanRelationWhereInput>>;
	NOT?: InputMaybe<Array<PromotionPlanRelationWhereInput>>;
	OR?: InputMaybe<Array<PromotionPlanRelationWhereInput>>;
	child_promotion_plan?: InputMaybe<PromotionPlanRelationFilter>;
	child_promotion_plan_id?: InputMaybe<IntFilter>;
	count?: InputMaybe<IntFilter>;
	parent_promotion_plan?: InputMaybe<PromotionPlanRelationFilter>;
	parent_promotion_plan_id?: InputMaybe<IntFilter>;
	reccurence?: InputMaybe<IntFilter>;
};

export type PromotionPlanRelationWhereUniqueInput = {
	parent_promotion_plan_id_child_promotion_plan_id?: InputMaybe<PromotionPlanRelationParent_Promotion_Plan_IdChild_Promotion_Plan_IdCompoundUniqueInput>;
};

export enum PromotionPlanScalarFieldEnum {
	CreatedAt = 'created_at',
	DeletedAt = 'deleted_at',
	Price = 'price',
	PromotionPlanId = 'promotion_plan_id',
	PromotionPlanType = 'promotion_plan_type',
	PromotionRegionCid = 'promotion_region_cid',
	Text = 'text',
	Title = 'title',
	UpdatedAt = 'updated_at',
	ValidityPeriod = 'validity_period',
}

export type PromotionPlanScalarWhereInput = {
	AND?: InputMaybe<Array<PromotionPlanScalarWhereInput>>;
	NOT?: InputMaybe<Array<PromotionPlanScalarWhereInput>>;
	OR?: InputMaybe<Array<PromotionPlanScalarWhereInput>>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	price?: InputMaybe<DecimalFilter>;
	promotion_plan_id?: InputMaybe<IntFilter>;
	promotion_plan_type?: InputMaybe<IntFilter>;
	promotion_region_cid?: InputMaybe<IntNullableFilter>;
	text?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	validity_period?: InputMaybe<IntFilter>;
};

export type PromotionPlanSumAggregate = {
	__typename?: 'PromotionPlanSumAggregate';
	price?: Maybe<Scalars['Decimal']>;
	promotion_plan_id?: Maybe<Scalars['Int']>;
	promotion_plan_type?: Maybe<Scalars['Int']>;
	promotion_region_cid?: Maybe<Scalars['Int']>;
	validity_period?: Maybe<Scalars['Int']>;
};

export type PromotionPlanUpdateInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutChild_Promotion_PlanNestedInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutParent_Promotion_PlanNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	promotion_region?: InputMaybe<CategoryUpdateOneWithoutPromotionRegionNestedInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpdateManyMutationInput = {
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpdateManyWithWhereWithoutPromotion_RegionInput = {
	data: PromotionPlanUpdateManyMutationInput;
	where: PromotionPlanScalarWhereInput;
};

export type PromotionPlanUpdateManyWithoutPromotion_RegionNestedInput = {
	connect?: InputMaybe<Array<PromotionPlanWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<PromotionPlanCreateOrConnectWithoutPromotion_RegionInput>>;
	create?: InputMaybe<Array<PromotionPlanCreateWithoutPromotion_RegionInput>>;
	createMany?: InputMaybe<PromotionPlanCreateManyPromotion_RegionInputEnvelope>;
	delete?: InputMaybe<Array<PromotionPlanWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<PromotionPlanScalarWhereInput>>;
	disconnect?: InputMaybe<Array<PromotionPlanWhereUniqueInput>>;
	set?: InputMaybe<Array<PromotionPlanWhereUniqueInput>>;
	update?: InputMaybe<Array<PromotionPlanUpdateWithWhereUniqueWithoutPromotion_RegionInput>>;
	updateMany?: InputMaybe<Array<PromotionPlanUpdateManyWithWhereWithoutPromotion_RegionInput>>;
	upsert?: InputMaybe<Array<PromotionPlanUpsertWithWhereUniqueWithoutPromotion_RegionInput>>;
};

export type PromotionPlanUpdateOneRequiredWithoutAdPromotionNestedInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutAdPromotionInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutAdPromotionInput>;
	update?: InputMaybe<PromotionPlanUpdateWithoutAdPromotionInput>;
	upsert?: InputMaybe<PromotionPlanUpsertWithoutAdPromotionInput>;
};

export type PromotionPlanUpdateOneRequiredWithoutChildPromotionPlanNestedInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutChildPromotionPlanInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutChildPromotionPlanInput>;
	update?: InputMaybe<PromotionPlanUpdateWithoutChildPromotionPlanInput>;
	upsert?: InputMaybe<PromotionPlanUpsertWithoutChildPromotionPlanInput>;
};

export type PromotionPlanUpdateOneRequiredWithoutParentPromotionPlanNestedInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutParentPromotionPlanInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutParentPromotionPlanInput>;
	update?: InputMaybe<PromotionPlanUpdateWithoutParentPromotionPlanInput>;
	upsert?: InputMaybe<PromotionPlanUpsertWithoutParentPromotionPlanInput>;
};

export type PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput = {
	connect?: InputMaybe<PromotionPlanWhereUniqueInput>;
	connectOrCreate?: InputMaybe<PromotionPlanCreateOrConnectWithoutUserPromotionInput>;
	create?: InputMaybe<PromotionPlanCreateWithoutUserPromotionInput>;
	update?: InputMaybe<PromotionPlanUpdateWithoutUserPromotionInput>;
	upsert?: InputMaybe<PromotionPlanUpsertWithoutUserPromotionInput>;
};

export type PromotionPlanUpdateWithWhereUniqueWithoutPromotion_RegionInput = {
	data: PromotionPlanUpdateWithoutPromotion_RegionInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanUpdateWithoutAdPromotionInput = {
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutChild_Promotion_PlanNestedInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutParent_Promotion_PlanNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	promotion_region?: InputMaybe<CategoryUpdateOneWithoutPromotionRegionNestedInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpdateWithoutChildPromotionPlanInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutParent_Promotion_PlanNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	promotion_region?: InputMaybe<CategoryUpdateOneWithoutPromotionRegionNestedInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpdateWithoutParentPromotionPlanInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutChild_Promotion_PlanNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	promotion_region?: InputMaybe<CategoryUpdateOneWithoutPromotionRegionNestedInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpdateWithoutPromotion_RegionInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutChild_Promotion_PlanNestedInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutParent_Promotion_PlanNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpdateWithoutUserPromotionInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutPromotion_PlanNestedInput>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutChild_Promotion_PlanNestedInput>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationUpdateManyWithoutParent_Promotion_PlanNestedInput>;
	created_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	deleted_at?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
	promotion_plan_type?: InputMaybe<IntFieldUpdateOperationsInput>;
	promotion_region?: InputMaybe<CategoryUpdateOneWithoutPromotionRegionNestedInput>;
	text?: InputMaybe<StringFieldUpdateOperationsInput>;
	title?: InputMaybe<StringFieldUpdateOperationsInput>;
	updated_at?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
	validity_period?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type PromotionPlanUpsertWithWhereUniqueWithoutPromotion_RegionInput = {
	create: PromotionPlanCreateWithoutPromotion_RegionInput;
	update: PromotionPlanUpdateWithoutPromotion_RegionInput;
	where: PromotionPlanWhereUniqueInput;
};

export type PromotionPlanUpsertWithoutAdPromotionInput = {
	create: PromotionPlanCreateWithoutAdPromotionInput;
	update: PromotionPlanUpdateWithoutAdPromotionInput;
};

export type PromotionPlanUpsertWithoutChildPromotionPlanInput = {
	create: PromotionPlanCreateWithoutChildPromotionPlanInput;
	update: PromotionPlanUpdateWithoutChildPromotionPlanInput;
};

export type PromotionPlanUpsertWithoutParentPromotionPlanInput = {
	create: PromotionPlanCreateWithoutParentPromotionPlanInput;
	update: PromotionPlanUpdateWithoutParentPromotionPlanInput;
};

export type PromotionPlanUpsertWithoutUserPromotionInput = {
	create: PromotionPlanCreateWithoutUserPromotionInput;
	update: PromotionPlanUpdateWithoutUserPromotionInput;
};

export type PromotionPlanWhereInput = {
	AND?: InputMaybe<Array<PromotionPlanWhereInput>>;
	AdPromotion?: InputMaybe<AdPromotionListRelationFilter>;
	ChildPromotionPlan?: InputMaybe<PromotionPlanRelationListRelationFilter>;
	NOT?: InputMaybe<Array<PromotionPlanWhereInput>>;
	OR?: InputMaybe<Array<PromotionPlanWhereInput>>;
	ParentPromotionPlan?: InputMaybe<PromotionPlanRelationListRelationFilter>;
	UserPromotion?: InputMaybe<UserPromotionListRelationFilter>;
	created_at?: InputMaybe<DateTimeFilter>;
	deleted_at?: InputMaybe<DateTimeNullableFilter>;
	price?: InputMaybe<DecimalFilter>;
	promotion_plan_id?: InputMaybe<IntFilter>;
	promotion_plan_type?: InputMaybe<IntFilter>;
	promotion_region?: InputMaybe<CategoryRelationFilter>;
	promotion_region_cid?: InputMaybe<IntNullableFilter>;
	text?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
	updated_at?: InputMaybe<DateTimeFilter>;
	validity_period?: InputMaybe<IntFilter>;
};

export type PromotionPlanWhereUniqueInput = {
	promotion_plan_id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
	__typename?: 'Query';
	aggregateAds: AggregateAd;
	aggregateCategories: AggregateCategory;
	estimateAdPrice: AdPrice;
	findAllAdPromotions: Array<AdPromotion>;
	findAllAds: Array<Ad>;
	findAllBlogs: Array<Blog>;
	findAllCategories: Array<Category>;
	findAllMessagingChannels: Array<MessagingChannel>;
	findAllPromotionPlans: Array<PromotionPlan>;
	findAllUserPromotions: Array<UserPromotion>;
	findAllUsers: Array<User>;
	findFirstMessagingChannel?: Maybe<MessagingChannel>;
	findFirstPromotionPlan?: Maybe<PromotionPlan>;
	findMyLists: Array<List>;
	findOneAd?: Maybe<Ad>;
	findOneAdPromotion?: Maybe<AdPromotion>;
	findOneBlog?: Maybe<Blog>;
	findOneCategory?: Maybe<Category>;
	findOneList?: Maybe<List>;
	findOneUser?: Maybe<User>;
	findOneUserPromotion?: Maybe<UserPromotion>;
	findUniqueAd?: Maybe<Ad>;
	findUniqueAdPromotion?: Maybe<AdPromotion>;
	findUniqueBlog?: Maybe<Blog>;
	findUniqueCategory?: Maybe<Category>;
	findUniqueMessagingChannel?: Maybe<MessagingChannel>;
	findUniquePromotionPlan?: Maybe<PromotionPlan>;
	findUniqueUser?: Maybe<User>;
	findUniqueUserPromotion?: Maybe<UserPromotion>;
	getSASToken: SasToken;
	groupByAds?: Maybe<Array<AdGroupBy>>;
	groupByCategories?: Maybe<Array<CategoryGroupBy>>;
};

export type QueryAggregateAdsArgs = {
	_avg?: InputMaybe<AdAvgAggregateInput>;
	_count?: InputMaybe<AdCountAggregateInput>;
	_max?: InputMaybe<AdMaxAggregateInput>;
	_min?: InputMaybe<AdMinAggregateInput>;
	_sum?: InputMaybe<AdSumAggregateInput>;
	cursor?: InputMaybe<AdWhereUniqueInput>;
	orderBy?: InputMaybe<Array<AdOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AdWhereInput>;
};

export type QueryAggregateCategoriesArgs = {
	_avg?: InputMaybe<CategoryAvgAggregateInput>;
	_count?: InputMaybe<CategoryCountAggregateInput>;
	_max?: InputMaybe<CategoryMaxAggregateInput>;
	_min?: InputMaybe<CategoryMinAggregateInput>;
	_sum?: InputMaybe<CategorySumAggregateInput>;
	cursor?: InputMaybe<CategoryWhereUniqueInput>;
	orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CategoryWhereInput>;
};

export type QueryFindAllAdPromotionsArgs = {
	cursor?: InputMaybe<AdPromotionWhereUniqueInput>;
	distinct?: InputMaybe<Array<AdPromotionScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<AdPromotionOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AdPromotionWhereInput>;
};

export type QueryFindAllAdsArgs = {
	cursor?: InputMaybe<AdWhereUniqueInput>;
	distinct?: InputMaybe<Array<AdScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<AdOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AdWhereInput>;
};

export type QueryFindAllBlogsArgs = {
	cursor?: InputMaybe<BlogWhereUniqueInput>;
	distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<BlogWhereInput>;
};

export type QueryFindAllCategoriesArgs = {
	cursor?: InputMaybe<CategoryWhereUniqueInput>;
	distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CategoryWhereInput>;
};

export type QueryFindAllMessagingChannelsArgs = {
	cursor?: InputMaybe<MessagingChannelWhereUniqueInput>;
	distinct?: InputMaybe<Array<MessagingChannelScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<MessagingChannelOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<MessagingChannelWhereInput>;
};

export type QueryFindAllPromotionPlansArgs = {
	cursor?: InputMaybe<PromotionPlanWhereUniqueInput>;
	distinct?: InputMaybe<Array<PromotionPlanScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<PromotionPlanOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PromotionPlanWhereInput>;
};

export type QueryFindAllUserPromotionsArgs = {
	cursor?: InputMaybe<UserPromotionWhereUniqueInput>;
	distinct?: InputMaybe<Array<UserPromotionScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<UserPromotionOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserPromotionWhereInput>;
};

export type QueryFindAllUsersArgs = {
	cursor?: InputMaybe<UserWhereUniqueInput>;
	distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstMessagingChannelArgs = {
	cursor?: InputMaybe<MessagingChannelWhereUniqueInput>;
	distinct?: InputMaybe<Array<MessagingChannelScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<MessagingChannelOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<MessagingChannelWhereInput>;
};

export type QueryFindFirstPromotionPlanArgs = {
	cursor?: InputMaybe<PromotionPlanWhereUniqueInput>;
	distinct?: InputMaybe<Array<PromotionPlanScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<PromotionPlanOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PromotionPlanWhereInput>;
};

export type QueryFindMyListsArgs = {
	cursor?: InputMaybe<ListWhereUniqueInput>;
	distinct?: InputMaybe<Array<ListScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<ListOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ListWhereInput>;
};

export type QueryFindOneAdArgs = {
	cursor?: InputMaybe<AdWhereUniqueInput>;
	distinct?: InputMaybe<Array<AdScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<AdOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AdWhereInput>;
};

export type QueryFindOneAdPromotionArgs = {
	cursor?: InputMaybe<AdPromotionWhereUniqueInput>;
	distinct?: InputMaybe<Array<AdPromotionScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<AdPromotionOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AdPromotionWhereInput>;
};

export type QueryFindOneBlogArgs = {
	cursor?: InputMaybe<BlogWhereUniqueInput>;
	distinct?: InputMaybe<Array<BlogScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<BlogWhereInput>;
};

export type QueryFindOneCategoryArgs = {
	cursor?: InputMaybe<CategoryWhereUniqueInput>;
	distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CategoryWhereInput>;
};

export type QueryFindOneListArgs = {
	cursor?: InputMaybe<ListWhereUniqueInput>;
	distinct?: InputMaybe<Array<ListScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<ListOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ListWhereInput>;
};

export type QueryFindOneUserArgs = {
	cursor?: InputMaybe<UserWhereUniqueInput>;
	distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserWhereInput>;
};

export type QueryFindOneUserPromotionArgs = {
	cursor?: InputMaybe<UserPromotionWhereUniqueInput>;
	distinct?: InputMaybe<Array<UserPromotionScalarFieldEnum>>;
	orderBy?: InputMaybe<Array<UserPromotionOrderByWithRelationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<UserPromotionWhereInput>;
};

export type QueryFindUniqueAdArgs = {
	where: AdWhereUniqueInput;
};

export type QueryFindUniqueAdPromotionArgs = {
	where: AdPromotionWhereUniqueInput;
};

export type QueryFindUniqueBlogArgs = {
	where: BlogWhereUniqueInput;
};

export type QueryFindUniqueCategoryArgs = {
	where: CategoryWhereUniqueInput;
};

export type QueryFindUniqueMessagingChannelArgs = {
	where: MessagingChannelWhereUniqueInput;
};

export type QueryFindUniquePromotionPlanArgs = {
	where: PromotionPlanWhereUniqueInput;
};

export type QueryFindUniqueUserArgs = {
	where: UserWhereUniqueInput;
};

export type QueryFindUniqueUserPromotionArgs = {
	where: UserPromotionWhereUniqueInput;
};

export type QueryGetSasTokenArgs = {
	data: GetSasTokenInput;
};

export type QueryGroupByAdsArgs = {
	_avg?: InputMaybe<AdAvgAggregateInput>;
	_count?: InputMaybe<AdCountAggregateInput>;
	_max?: InputMaybe<AdMaxAggregateInput>;
	_min?: InputMaybe<AdMinAggregateInput>;
	_sum?: InputMaybe<AdSumAggregateInput>;
	by: Array<AdScalarFieldEnum>;
	having?: InputMaybe<AdScalarWhereWithAggregatesInput>;
	orderBy?: InputMaybe<Array<AdOrderByWithAggregationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AdWhereInput>;
};

export type QueryGroupByCategoriesArgs = {
	_avg?: InputMaybe<CategoryAvgAggregateInput>;
	_count?: InputMaybe<CategoryCountAggregateInput>;
	_max?: InputMaybe<CategoryMaxAggregateInput>;
	_min?: InputMaybe<CategoryMinAggregateInput>;
	_sum?: InputMaybe<CategorySumAggregateInput>;
	by: Array<CategoryScalarFieldEnum>;
	having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
	orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CategoryWhereInput>;
};

export type SasToken = {
	__typename?: 'SasToken';
	blobName: Scalars['String'];
	expiresOn: Scalars['DateTime'];
	startsOn: Scalars['DateTime'];
	url: Scalars['String'];
};

export enum SortOrder {
	Asc = 'asc',
	Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
	set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringNullableFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntNullableFilter>;
	_max?: InputMaybe<NestedStringNullableFilter>;
	_min?: InputMaybe<NestedStringNullableFilter>;
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
	_count?: InputMaybe<NestedIntFilter>;
	_max?: InputMaybe<NestedStringFilter>;
	_min?: InputMaybe<NestedStringFilter>;
	contains?: InputMaybe<Scalars['String']>;
	endsWith?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	gte?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	lt?: InputMaybe<Scalars['String']>;
	lte?: InputMaybe<Scalars['String']>;
	not?: InputMaybe<NestedStringWithAggregatesFilter>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	startsWith?: InputMaybe<Scalars['String']>;
};

export type UpdateManyCategoriesInput = {
	data: CategoryUpdateInput;
	where: CategoryWhereUniqueInput;
};

export type User = {
	__typename?: 'User';
	AdPromotion?: Maybe<Array<AdPromotion>>;
	MessagingChannel?: Maybe<Array<MessagingChannel>>;
	UserPromotion?: Maybe<Array<UserPromotion>>;
	_count: UserCount;
	ads?: Maybe<Array<Ad>>;
	blogs?: Maybe<Array<Blog>>;
	files?: Maybe<Array<File>>;
	lists?: Maybe<Array<List>>;
	/** 0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error */
	moderation_flag: Scalars['Int'];
	name?: Maybe<Scalars['String']>;
	user_sub: Scalars['ID'];
};

export type UserAvgAggregate = {
	__typename?: 'UserAvgAggregate';
	moderation_flag?: Maybe<Scalars['Float']>;
};

export type UserCount = {
	__typename?: 'UserCount';
	AdPromotion: Scalars['Int'];
	MessagingChannel: Scalars['Int'];
	UserPromotion: Scalars['Int'];
	ads: Scalars['Int'];
	blogs: Scalars['Int'];
	files: Scalars['Int'];
	lists: Scalars['Int'];
};

export type UserCountAggregate = {
	__typename?: 'UserCountAggregate';
	_all: Scalars['Int'];
	moderation_flag: Scalars['Int'];
	name: Scalars['Int'];
	user_sub: Scalars['Int'];
};

export type UserCreateInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateNestedOneWithoutAdPromotionInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdPromotionInput>;
	create?: InputMaybe<UserCreateWithoutAdPromotionInput>;
};

export type UserCreateNestedOneWithoutAdsInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdsInput>;
	create?: InputMaybe<UserCreateWithoutAdsInput>;
};

export type UserCreateNestedOneWithoutBlogsInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBlogsInput>;
	create?: InputMaybe<UserCreateWithoutBlogsInput>;
};

export type UserCreateNestedOneWithoutFilesInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
	create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateNestedOneWithoutListsInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutListsInput>;
	create?: InputMaybe<UserCreateWithoutListsInput>;
};

export type UserCreateNestedOneWithoutUserPromotionInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserPromotionInput>;
	create?: InputMaybe<UserCreateWithoutUserPromotionInput>;
};

export type UserCreateOrConnectWithoutAdPromotionInput = {
	create: UserCreateWithoutAdPromotionInput;
	where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAdsInput = {
	create: UserCreateWithoutAdsInput;
	where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBlogsInput = {
	create: UserCreateWithoutBlogsInput;
	where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFilesInput = {
	create: UserCreateWithoutFilesInput;
	where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutListsInput = {
	create: UserCreateWithoutListsInput;
	where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagingChannelInput = {
	create: UserCreateWithoutMessagingChannelInput;
	where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserPromotionInput = {
	create: UserCreateWithoutUserPromotionInput;
	where: UserWhereUniqueInput;
};

export type UserCreateWithoutAdPromotionInput = {
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateWithoutAdsInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateWithoutBlogsInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateWithoutFilesInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateWithoutListsInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateWithoutMessagingChannelInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	UserPromotion?: InputMaybe<UserPromotionCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserCreateWithoutUserPromotionInput = {
	AdPromotion?: InputMaybe<AdPromotionCreateNestedManyWithoutUserInput>;
	MessagingChannel?: InputMaybe<MessagingChannelCreateNestedManyWithoutUserInput>;
	ads?: InputMaybe<AdCreateNestedManyWithoutUserInput>;
	blogs?: InputMaybe<BlogCreateNestedManyWithoutUserInput>;
	files?: InputMaybe<FileCreateNestedManyWithoutUserInput>;
	lists?: InputMaybe<ListCreateNestedManyWithoutUserInput>;
	name?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
};

export type UserMaxAggregate = {
	__typename?: 'UserMaxAggregate';
	moderation_flag?: Maybe<Scalars['Int']>;
	name?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
	__typename?: 'UserMinAggregate';
	moderation_flag?: Maybe<Scalars['Int']>;
	name?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
	AdPromotion?: InputMaybe<AdPromotionOrderByRelationAggregateInput>;
	MessagingChannel?: InputMaybe<MessagingChannelOrderByRelationAggregateInput>;
	UserPromotion?: InputMaybe<UserPromotionOrderByRelationAggregateInput>;
	ads?: InputMaybe<AdOrderByRelationAggregateInput>;
	blogs?: InputMaybe<BlogOrderByRelationAggregateInput>;
	files?: InputMaybe<FileOrderByRelationAggregateInput>;
	lists?: InputMaybe<ListOrderByRelationAggregateInput>;
	name?: InputMaybe<SortOrder>;
	user_sub?: InputMaybe<SortOrder>;
};

export type UserPromotion = {
	__typename?: 'UserPromotion';
	promotion_plan: PromotionPlan;
	promotion_plan_id: Scalars['Int'];
	transaction_id?: Maybe<Scalars['String']>;
	user: User;
	user_sub: Scalars['String'];
	valid_from?: Maybe<Scalars['DateTime']>;
	valid_to?: Maybe<Scalars['DateTime']>;
};

export type UserPromotionAvgAggregate = {
	__typename?: 'UserPromotionAvgAggregate';
	promotion_plan_id?: Maybe<Scalars['Float']>;
};

export type UserPromotionCountAggregate = {
	__typename?: 'UserPromotionCountAggregate';
	_all: Scalars['Int'];
	promotion_plan_id: Scalars['Int'];
	transaction_id: Scalars['Int'];
	user_sub: Scalars['Int'];
	valid_from: Scalars['Int'];
	valid_to: Scalars['Int'];
};

export type UserPromotionCreateInput = {
	promotion_plan: PromotionPlanCreateNestedOneWithoutUserPromotionInput;
	transaction_id?: InputMaybe<Scalars['String']>;
	user: UserCreateNestedOneWithoutUserPromotionInput;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type UserPromotionCreateManyPromotion_PlanInput = {
	transaction_id?: InputMaybe<Scalars['String']>;
	user_sub: Scalars['String'];
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type UserPromotionCreateManyPromotion_PlanInputEnvelope = {
	data: Array<UserPromotionCreateManyPromotion_PlanInput>;
};

export type UserPromotionCreateManyUserInput = {
	promotion_plan_id: Scalars['Int'];
	transaction_id?: InputMaybe<Scalars['String']>;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type UserPromotionCreateManyUserInputEnvelope = {
	data: Array<UserPromotionCreateManyUserInput>;
};

export type UserPromotionCreateNestedManyWithoutPromotion_PlanInput = {
	connect?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<UserPromotionCreateOrConnectWithoutPromotion_PlanInput>>;
	create?: InputMaybe<Array<UserPromotionCreateWithoutPromotion_PlanInput>>;
	createMany?: InputMaybe<UserPromotionCreateManyPromotion_PlanInputEnvelope>;
};

export type UserPromotionCreateNestedManyWithoutUserInput = {
	connect?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<UserPromotionCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<UserPromotionCreateWithoutUserInput>>;
	createMany?: InputMaybe<UserPromotionCreateManyUserInputEnvelope>;
};

export type UserPromotionCreateOrConnectWithoutPromotion_PlanInput = {
	create: UserPromotionCreateWithoutPromotion_PlanInput;
	where: UserPromotionWhereUniqueInput;
};

export type UserPromotionCreateOrConnectWithoutUserInput = {
	create: UserPromotionCreateWithoutUserInput;
	where: UserPromotionWhereUniqueInput;
};

export type UserPromotionCreateWithoutPromotion_PlanInput = {
	transaction_id?: InputMaybe<Scalars['String']>;
	user: UserCreateNestedOneWithoutUserPromotionInput;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type UserPromotionCreateWithoutUserInput = {
	promotion_plan: PromotionPlanCreateNestedOneWithoutUserPromotionInput;
	transaction_id?: InputMaybe<Scalars['String']>;
	valid_from?: InputMaybe<Scalars['DateTime']>;
	valid_to?: InputMaybe<Scalars['DateTime']>;
};

export type UserPromotionListRelationFilter = {
	every?: InputMaybe<UserPromotionWhereInput>;
	none?: InputMaybe<UserPromotionWhereInput>;
	some?: InputMaybe<UserPromotionWhereInput>;
};

export type UserPromotionMaxAggregate = {
	__typename?: 'UserPromotionMaxAggregate';
	promotion_plan_id?: Maybe<Scalars['Int']>;
	transaction_id?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
	valid_from?: Maybe<Scalars['DateTime']>;
	valid_to?: Maybe<Scalars['DateTime']>;
};

export type UserPromotionMinAggregate = {
	__typename?: 'UserPromotionMinAggregate';
	promotion_plan_id?: Maybe<Scalars['Int']>;
	transaction_id?: Maybe<Scalars['String']>;
	user_sub?: Maybe<Scalars['String']>;
	valid_from?: Maybe<Scalars['DateTime']>;
	valid_to?: Maybe<Scalars['DateTime']>;
};

export type UserPromotionOrderByRelationAggregateInput = {
	_count?: InputMaybe<SortOrder>;
};

export type UserPromotionOrderByWithRelationInput = {
	promotion_plan?: InputMaybe<PromotionPlanOrderByWithRelationInput>;
	promotion_plan_id?: InputMaybe<SortOrder>;
	transaction_id?: InputMaybe<SortOrder>;
	user?: InputMaybe<UserOrderByWithRelationInput>;
	user_sub?: InputMaybe<SortOrder>;
	valid_from?: InputMaybe<SortOrder>;
	valid_to?: InputMaybe<SortOrder>;
};

export type UserPromotionPromotion_Plan_IdUser_SubCompoundUniqueInput = {
	promotion_plan_id: Scalars['Int'];
	user_sub: Scalars['String'];
};

export enum UserPromotionScalarFieldEnum {
	PromotionPlanId = 'promotion_plan_id',
	TransactionId = 'transaction_id',
	UserSub = 'user_sub',
	ValidFrom = 'valid_from',
	ValidTo = 'valid_to',
}

export type UserPromotionScalarWhereInput = {
	AND?: InputMaybe<Array<UserPromotionScalarWhereInput>>;
	NOT?: InputMaybe<Array<UserPromotionScalarWhereInput>>;
	OR?: InputMaybe<Array<UserPromotionScalarWhereInput>>;
	promotion_plan_id?: InputMaybe<IntFilter>;
	transaction_id?: InputMaybe<StringNullableFilter>;
	user_sub?: InputMaybe<StringFilter>;
	valid_from?: InputMaybe<DateTimeNullableFilter>;
	valid_to?: InputMaybe<DateTimeNullableFilter>;
};

export type UserPromotionSumAggregate = {
	__typename?: 'UserPromotionSumAggregate';
	promotion_plan_id?: Maybe<Scalars['Int']>;
};

export type UserPromotionUpdateManyMutationInput = {
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserPromotionUpdateManyWithWhereWithoutPromotion_PlanInput = {
	data: UserPromotionUpdateManyMutationInput;
	where: UserPromotionScalarWhereInput;
};

export type UserPromotionUpdateManyWithWhereWithoutUserInput = {
	data: UserPromotionUpdateManyMutationInput;
	where: UserPromotionScalarWhereInput;
};

export type UserPromotionUpdateManyWithoutPromotion_PlanNestedInput = {
	connect?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<UserPromotionCreateOrConnectWithoutPromotion_PlanInput>>;
	create?: InputMaybe<Array<UserPromotionCreateWithoutPromotion_PlanInput>>;
	createMany?: InputMaybe<UserPromotionCreateManyPromotion_PlanInputEnvelope>;
	delete?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<UserPromotionScalarWhereInput>>;
	disconnect?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	set?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	update?: InputMaybe<Array<UserPromotionUpdateWithWhereUniqueWithoutPromotion_PlanInput>>;
	updateMany?: InputMaybe<Array<UserPromotionUpdateManyWithWhereWithoutPromotion_PlanInput>>;
	upsert?: InputMaybe<Array<UserPromotionUpsertWithWhereUniqueWithoutPromotion_PlanInput>>;
};

export type UserPromotionUpdateManyWithoutUserNestedInput = {
	connect?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	connectOrCreate?: InputMaybe<Array<UserPromotionCreateOrConnectWithoutUserInput>>;
	create?: InputMaybe<Array<UserPromotionCreateWithoutUserInput>>;
	createMany?: InputMaybe<UserPromotionCreateManyUserInputEnvelope>;
	delete?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	deleteMany?: InputMaybe<Array<UserPromotionScalarWhereInput>>;
	disconnect?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	set?: InputMaybe<Array<UserPromotionWhereUniqueInput>>;
	update?: InputMaybe<Array<UserPromotionUpdateWithWhereUniqueWithoutUserInput>>;
	updateMany?: InputMaybe<Array<UserPromotionUpdateManyWithWhereWithoutUserInput>>;
	upsert?: InputMaybe<Array<UserPromotionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserPromotionUpdateWithWhereUniqueWithoutPromotion_PlanInput = {
	data: UserPromotionUpdateWithoutPromotion_PlanInput;
	where: UserPromotionWhereUniqueInput;
};

export type UserPromotionUpdateWithWhereUniqueWithoutUserInput = {
	data: UserPromotionUpdateWithoutUserInput;
	where: UserPromotionWhereUniqueInput;
};

export type UserPromotionUpdateWithoutPromotion_PlanInput = {
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user?: InputMaybe<UserUpdateOneRequiredWithoutUserPromotionNestedInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserPromotionUpdateWithoutUserInput = {
	promotion_plan?: InputMaybe<PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput>;
	transaction_id?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	valid_from?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
	valid_to?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type UserPromotionUpsertWithWhereUniqueWithoutPromotion_PlanInput = {
	create: UserPromotionCreateWithoutPromotion_PlanInput;
	update: UserPromotionUpdateWithoutPromotion_PlanInput;
	where: UserPromotionWhereUniqueInput;
};

export type UserPromotionUpsertWithWhereUniqueWithoutUserInput = {
	create: UserPromotionCreateWithoutUserInput;
	update: UserPromotionUpdateWithoutUserInput;
	where: UserPromotionWhereUniqueInput;
};

export type UserPromotionWhereInput = {
	AND?: InputMaybe<Array<UserPromotionWhereInput>>;
	NOT?: InputMaybe<Array<UserPromotionWhereInput>>;
	OR?: InputMaybe<Array<UserPromotionWhereInput>>;
	promotion_plan?: InputMaybe<PromotionPlanRelationFilter>;
	promotion_plan_id?: InputMaybe<IntFilter>;
	transaction_id?: InputMaybe<StringNullableFilter>;
	user?: InputMaybe<UserRelationFilter>;
	user_sub?: InputMaybe<StringFilter>;
	valid_from?: InputMaybe<DateTimeNullableFilter>;
	valid_to?: InputMaybe<DateTimeNullableFilter>;
};

export type UserPromotionWhereUniqueInput = {
	promotion_plan_id_user_sub?: InputMaybe<UserPromotionPromotion_Plan_IdUser_SubCompoundUniqueInput>;
};

export type UserRelationFilter = {
	is?: InputMaybe<UserWhereInput>;
	isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
	ModerationFlag = 'moderation_flag',
	Name = 'name',
	UserSub = 'user_sub',
}

export type UserSumAggregate = {
	__typename?: 'UserSumAggregate';
	moderation_flag?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateModerationInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	moderation_flag?: InputMaybe<IntFieldUpdateOperationsInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAdPromotionNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdPromotionInput>;
	create?: InputMaybe<UserCreateWithoutAdPromotionInput>;
	update?: InputMaybe<UserUpdateWithoutAdPromotionInput>;
	upsert?: InputMaybe<UserUpsertWithoutAdPromotionInput>;
};

export type UserUpdateOneRequiredWithoutBlogsNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBlogsInput>;
	create?: InputMaybe<UserCreateWithoutBlogsInput>;
	update?: InputMaybe<UserUpdateWithoutBlogsInput>;
	upsert?: InputMaybe<UserUpsertWithoutBlogsInput>;
};

export type UserUpdateOneRequiredWithoutListsNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutListsInput>;
	create?: InputMaybe<UserCreateWithoutListsInput>;
	update?: InputMaybe<UserUpdateWithoutListsInput>;
	upsert?: InputMaybe<UserUpsertWithoutListsInput>;
};

export type UserUpdateOneRequiredWithoutMessagingChannelNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagingChannelInput>;
	create?: InputMaybe<UserCreateWithoutMessagingChannelInput>;
	update?: InputMaybe<UserUpdateWithoutMessagingChannelInput>;
	upsert?: InputMaybe<UserUpsertWithoutMessagingChannelInput>;
};

export type UserUpdateOneRequiredWithoutUserPromotionNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserPromotionInput>;
	create?: InputMaybe<UserCreateWithoutUserPromotionInput>;
	update?: InputMaybe<UserUpdateWithoutUserPromotionInput>;
	upsert?: InputMaybe<UserUpsertWithoutUserPromotionInput>;
};

export type UserUpdateOneWithoutAdsNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdsInput>;
	create?: InputMaybe<UserCreateWithoutAdsInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<UserUpdateWithoutAdsInput>;
	upsert?: InputMaybe<UserUpsertWithoutAdsInput>;
};

export type UserUpdateOneWithoutFilesNestedInput = {
	connect?: InputMaybe<UserWhereUniqueInput>;
	connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
	create?: InputMaybe<UserCreateWithoutFilesInput>;
	delete?: InputMaybe<Scalars['Boolean']>;
	disconnect?: InputMaybe<Scalars['Boolean']>;
	update?: InputMaybe<UserUpdateWithoutFilesInput>;
	upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateWithoutAdPromotionInput = {
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAdsInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutBlogsInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFilesInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutListsInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessagingChannelInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	UserPromotion?: InputMaybe<UserPromotionUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserPromotionInput = {
	AdPromotion?: InputMaybe<AdPromotionUpdateManyWithoutUserNestedInput>;
	MessagingChannel?: InputMaybe<MessagingChannelUpdateManyWithoutUserNestedInput>;
	ads?: InputMaybe<AdUpdateManyWithoutUserNestedInput>;
	blogs?: InputMaybe<BlogUpdateManyWithoutUserNestedInput>;
	files?: InputMaybe<FileUpdateManyWithoutUserNestedInput>;
	lists?: InputMaybe<ListUpdateManyWithoutUserNestedInput>;
	name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
	user_sub?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAdPromotionInput = {
	create: UserCreateWithoutAdPromotionInput;
	update: UserUpdateWithoutAdPromotionInput;
};

export type UserUpsertWithoutAdsInput = {
	create: UserCreateWithoutAdsInput;
	update: UserUpdateWithoutAdsInput;
};

export type UserUpsertWithoutBlogsInput = {
	create: UserCreateWithoutBlogsInput;
	update: UserUpdateWithoutBlogsInput;
};

export type UserUpsertWithoutFilesInput = {
	create: UserCreateWithoutFilesInput;
	update: UserUpdateWithoutFilesInput;
};

export type UserUpsertWithoutListsInput = {
	create: UserCreateWithoutListsInput;
	update: UserUpdateWithoutListsInput;
};

export type UserUpsertWithoutMessagingChannelInput = {
	create: UserCreateWithoutMessagingChannelInput;
	update: UserUpdateWithoutMessagingChannelInput;
};

export type UserUpsertWithoutUserPromotionInput = {
	create: UserCreateWithoutUserPromotionInput;
	update: UserUpdateWithoutUserPromotionInput;
};

export type UserWhereInput = {
	AND?: InputMaybe<Array<UserWhereInput>>;
	AdPromotion?: InputMaybe<AdPromotionListRelationFilter>;
	MessagingChannel?: InputMaybe<MessagingChannelListRelationFilter>;
	NOT?: InputMaybe<Array<UserWhereInput>>;
	OR?: InputMaybe<Array<UserWhereInput>>;
	UserPromotion?: InputMaybe<UserPromotionListRelationFilter>;
	ads?: InputMaybe<AdListRelationFilter>;
	blogs?: InputMaybe<BlogListRelationFilter>;
	files?: InputMaybe<FileListRelationFilter>;
	lists?: InputMaybe<ListListRelationFilter>;
	name?: InputMaybe<StringNullableFilter>;
	user_sub?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
	user_sub?: InputMaybe<Scalars['String']>;
};

export type UserInfoFieldsFragment = { __typename?: 'User'; name?: string | null; user_sub: string };

export type AdAutoFieldsFragment = {
	__typename?: 'AdAuto';
	ad_auto_id: string;
	condition_type_cid?: number | null;
	vehicle_type_cid?: number | null;
	fuel_type_cid?: number | null;
	transmission_type_cid?: number | null;
	make_cid?: number | null;
	model_cid?: number | null;
	variant_cid?: number | null;
	body_type_cid?: number | null;
	color_interior_cid?: number | null;
	color_exterior_cid?: number | null;
	emission_class_cid?: number | null;
	conditioning_cid?: number | null;
	year: number;
	km?: number | null;
	power_kw?: number | null;
	registered_until?: any | null;
	doors_num?: number | null;
	seats_num?: number | null;
	is_first_owner?: boolean | null;
	is_service_book_available?: boolean | null;
	is_vehicle_garaged?: boolean | null;
	engine_displacement_cm3?: number | null;
	battery_capacity_kwh?: number | null;
};

export type FileFieldsFragment = { __typename?: 'File'; file_id: string; filename: string; filesize: number; code: string; path: string };

export type UserDefinedAdFieldsFragment = {
	__typename?: 'Ad';
	title: string;
	text: string;
	coords_latitude?: number | null;
	coords_longitude?: number | null;
	coords_radius?: number | null;
	address?: string | null;
	price_eurocent?: number | null;
	is_sold: boolean;
};

export type AdminDefinedFieldFragment = { __typename?: 'Ad'; moderation_flag: number };

export type AdFieldsFragment = {
	__typename?: 'Ad';
	ad_id: string;
	created_at: any;
	updated_at: any;
	deleted_at?: any | null;
	price_rating?: any | null;
	title: string;
	text: string;
	coords_latitude?: number | null;
	coords_longitude?: number | null;
	coords_radius?: number | null;
	address?: string | null;
	price_eurocent?: number | null;
	is_sold: boolean;
	moderation_flag: number;
	user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
};

export type AdPromotionFieldFragment = { __typename?: 'AdPromotion'; promotion_plan_id: number };

export type AdAdAutoFileFieldsFragment = {
	__typename?: 'Ad';
	ad_id: string;
	created_at: any;
	updated_at: any;
	deleted_at?: any | null;
	price_rating?: any | null;
	title: string;
	text: string;
	coords_latitude?: number | null;
	coords_longitude?: number | null;
	coords_radius?: number | null;
	address?: string | null;
	price_eurocent?: number | null;
	is_sold: boolean;
	moderation_flag: number;
	files?: Array<{ __typename?: 'File'; file_id: string; filename: string; filesize: number; code: string; path: string }> | null;
	ad_auto?: {
		__typename?: 'AdAuto';
		ad_auto_id: string;
		condition_type_cid?: number | null;
		vehicle_type_cid?: number | null;
		fuel_type_cid?: number | null;
		transmission_type_cid?: number | null;
		make_cid?: number | null;
		model_cid?: number | null;
		variant_cid?: number | null;
		body_type_cid?: number | null;
		color_interior_cid?: number | null;
		color_exterior_cid?: number | null;
		emission_class_cid?: number | null;
		conditioning_cid?: number | null;
		year: number;
		km?: number | null;
		power_kw?: number | null;
		registered_until?: any | null;
		doors_num?: number | null;
		seats_num?: number | null;
		is_first_owner?: boolean | null;
		is_service_book_available?: boolean | null;
		is_vehicle_garaged?: boolean | null;
		engine_displacement_cm3?: number | null;
		battery_capacity_kwh?: number | null;
	} | null;
	AdPromotion?: Array<{ __typename?: 'AdPromotion'; promotion_plan_id: number }> | null;
	user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
};

export type CreateAdMutationVariables = Exact<{
	data: AdCreateWithoutUserInput;
}>;

export type CreateAdMutation = {
	__typename?: 'Mutation';
	createAd: {
		__typename?: 'Ad';
		ad_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		price_rating?: any | null;
		title: string;
		text: string;
		coords_latitude?: number | null;
		coords_longitude?: number | null;
		coords_radius?: number | null;
		address?: string | null;
		price_eurocent?: number | null;
		is_sold: boolean;
		moderation_flag: number;
		files?: Array<{ __typename?: 'File'; file_id: string; filename: string; filesize: number; code: string; path: string }> | null;
		ad_auto?: {
			__typename?: 'AdAuto';
			ad_auto_id: string;
			condition_type_cid?: number | null;
			vehicle_type_cid?: number | null;
			fuel_type_cid?: number | null;
			transmission_type_cid?: number | null;
			make_cid?: number | null;
			model_cid?: number | null;
			variant_cid?: number | null;
			body_type_cid?: number | null;
			color_interior_cid?: number | null;
			color_exterior_cid?: number | null;
			emission_class_cid?: number | null;
			conditioning_cid?: number | null;
			year: number;
			km?: number | null;
			power_kw?: number | null;
			registered_until?: any | null;
			doors_num?: number | null;
			seats_num?: number | null;
			is_first_owner?: boolean | null;
			is_service_book_available?: boolean | null;
			is_vehicle_garaged?: boolean | null;
			engine_displacement_cm3?: number | null;
			battery_capacity_kwh?: number | null;
		} | null;
		AdPromotion?: Array<{ __typename?: 'AdPromotion'; promotion_plan_id: number }> | null;
		user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
	};
};

export type FindAllAdsQueryVariables = Exact<{
	where?: InputMaybe<AdWhereInput>;
	orderBy?: InputMaybe<Array<AdOrderByWithRelationInput> | AdOrderByWithRelationInput>;
	cursor?: InputMaybe<AdWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
}>;

export type FindAllAdsQuery = {
	__typename?: 'Query';
	findAllAds: Array<{
		__typename?: 'Ad';
		ad_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		price_rating?: any | null;
		title: string;
		text: string;
		coords_latitude?: number | null;
		coords_longitude?: number | null;
		coords_radius?: number | null;
		address?: string | null;
		price_eurocent?: number | null;
		is_sold: boolean;
		moderation_flag: number;
		files?: Array<{ __typename?: 'File'; file_id: string; filename: string; filesize: number; code: string; path: string }> | null;
		ad_auto?: {
			__typename?: 'AdAuto';
			ad_auto_id: string;
			condition_type_cid?: number | null;
			vehicle_type_cid?: number | null;
			fuel_type_cid?: number | null;
			transmission_type_cid?: number | null;
			make_cid?: number | null;
			model_cid?: number | null;
			variant_cid?: number | null;
			body_type_cid?: number | null;
			color_interior_cid?: number | null;
			color_exterior_cid?: number | null;
			emission_class_cid?: number | null;
			conditioning_cid?: number | null;
			year: number;
			km?: number | null;
			power_kw?: number | null;
			registered_until?: any | null;
			doors_num?: number | null;
			seats_num?: number | null;
			is_first_owner?: boolean | null;
			is_service_book_available?: boolean | null;
			is_vehicle_garaged?: boolean | null;
			engine_displacement_cm3?: number | null;
			battery_capacity_kwh?: number | null;
		} | null;
		AdPromotion?: Array<{ __typename?: 'AdPromotion'; promotion_plan_id: number }> | null;
		user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
	}>;
};

export type FindUniqueAdWhereAdIdEqualsQueryVariables = Exact<{
	where: AdWhereUniqueInput;
}>;

export type FindUniqueAdWhereAdIdEqualsQuery = {
	__typename?: 'Query';
	findUniqueAd?: {
		__typename?: 'Ad';
		ad_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		price_rating?: any | null;
		title: string;
		text: string;
		coords_latitude?: number | null;
		coords_longitude?: number | null;
		coords_radius?: number | null;
		address?: string | null;
		price_eurocent?: number | null;
		is_sold: boolean;
		moderation_flag: number;
		files?: Array<{ __typename?: 'File'; file_id: string; filename: string; filesize: number; code: string; path: string }> | null;
		ad_auto?: {
			__typename?: 'AdAuto';
			ad_auto_id: string;
			condition_type_cid?: number | null;
			vehicle_type_cid?: number | null;
			fuel_type_cid?: number | null;
			transmission_type_cid?: number | null;
			make_cid?: number | null;
			model_cid?: number | null;
			variant_cid?: number | null;
			body_type_cid?: number | null;
			color_interior_cid?: number | null;
			color_exterior_cid?: number | null;
			emission_class_cid?: number | null;
			conditioning_cid?: number | null;
			year: number;
			km?: number | null;
			power_kw?: number | null;
			registered_until?: any | null;
			doors_num?: number | null;
			seats_num?: number | null;
			is_first_owner?: boolean | null;
			is_service_book_available?: boolean | null;
			is_vehicle_garaged?: boolean | null;
			engine_displacement_cm3?: number | null;
			battery_capacity_kwh?: number | null;
		} | null;
		AdPromotion?: Array<{ __typename?: 'AdPromotion'; promotion_plan_id: number }> | null;
		user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
	} | null;
};

export type AggregateAdsWhereQueryVariables = Exact<{
	where?: InputMaybe<AdWhereInput>;
}>;

export type AggregateAdsWhereQuery = { __typename?: 'Query'; aggregateAds: { __typename?: 'AggregateAd'; _count?: { __typename?: 'AdCountAggregate'; ad_id: number } | null } };

export type RemoveAdMutationVariables = Exact<{
	id: Scalars['Int'];
}>;

export type RemoveAdMutation = { __typename?: 'Mutation'; removeAd?: { __typename?: 'Ad'; ad_id: string } | null };

export type UpdateAdMutationVariables = Exact<{
	id: Scalars['Int'];
	data: AdUpdateInput;
}>;

export type UpdateAdMutation = {
	__typename?: 'Mutation';
	updateAd?: {
		__typename?: 'Ad';
		ad_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		price_rating?: any | null;
		title: string;
		text: string;
		coords_latitude?: number | null;
		coords_longitude?: number | null;
		coords_radius?: number | null;
		address?: string | null;
		price_eurocent?: number | null;
		is_sold: boolean;
		moderation_flag: number;
		files?: Array<{ __typename?: 'File'; file_id: string; filename: string; filesize: number; code: string; path: string }> | null;
		ad_auto?: {
			__typename?: 'AdAuto';
			ad_auto_id: string;
			condition_type_cid?: number | null;
			vehicle_type_cid?: number | null;
			fuel_type_cid?: number | null;
			transmission_type_cid?: number | null;
			make_cid?: number | null;
			model_cid?: number | null;
			variant_cid?: number | null;
			body_type_cid?: number | null;
			color_interior_cid?: number | null;
			color_exterior_cid?: number | null;
			emission_class_cid?: number | null;
			conditioning_cid?: number | null;
			year: number;
			km?: number | null;
			power_kw?: number | null;
			registered_until?: any | null;
			doors_num?: number | null;
			seats_num?: number | null;
			is_first_owner?: boolean | null;
			is_service_book_available?: boolean | null;
			is_vehicle_garaged?: boolean | null;
			engine_displacement_cm3?: number | null;
			battery_capacity_kwh?: number | null;
		} | null;
		AdPromotion?: Array<{ __typename?: 'AdPromotion'; promotion_plan_id: number }> | null;
		user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
	} | null;
};

export type EstimateAdPriceQueryVariables = Exact<{ [key: string]: never }>;

export type EstimateAdPriceQuery = { __typename?: 'Query'; estimateAdPrice: { __typename?: 'AdPrice'; price_eurocent?: number | null } };

export type AdPromotionFieldsFragment = { __typename?: 'AdPromotion'; valid_from?: any | null; valid_to?: any | null; transaction_id?: string | null };

export type CreateAdPromotionMutationVariables = Exact<{
	data: AdPromotionCreateInput;
}>;

export type CreateAdPromotionMutation = {
	__typename?: 'Mutation';
	createAdPromotion: { __typename?: 'AdPromotion'; valid_from?: any | null; valid_to?: any | null; transaction_id?: string | null };
};

export type BlogFieldsFragment = {
	__typename?: 'Blog';
	blog_id: string;
	created_at: any;
	updated_at: any;
	deleted_at?: any | null;
	title: string;
	slug: string;
	text: string;
	moderation_flag: number;
};

export type UserInfoFragment = { __typename?: 'User'; user_sub: string; name?: string | null };

export type FindAllBlogsQueryVariables = Exact<{
	where?: InputMaybe<BlogWhereInput>;
	orderBy?: InputMaybe<Array<BlogOrderByWithRelationInput> | BlogOrderByWithRelationInput>;
	cursor?: InputMaybe<BlogWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
}>;

export type FindAllBlogsQuery = {
	__typename?: 'Query';
	findAllBlogs: Array<{
		__typename?: 'Blog';
		blog_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		slug: string;
		text: string;
		moderation_flag: number;
	}>;
};

export type CreateBlogMutationVariables = Exact<{
	data: BlogCreateWithoutUserInput;
}>;

export type CreateBlogMutation = {
	__typename?: 'Mutation';
	createBlog: {
		__typename?: 'Blog';
		blog_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		slug: string;
		text: string;
		moderation_flag: number;
	};
};

export type UpdateBlogMutationVariables = Exact<{
	data: BlogUpdateInput;
	id: Scalars['Int'];
}>;

export type UpdateBlogMutation = {
	__typename?: 'Mutation';
	updateBlog?: {
		__typename?: 'Blog';
		blog_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		slug: string;
		text: string;
		moderation_flag: number;
	} | null;
};

export type RemoveBlogMutationVariables = Exact<{
	id: Scalars['Int'];
}>;

export type RemoveBlogMutation = { __typename?: 'Mutation'; removeBlog?: { __typename?: 'Blog'; blog_id: string } | null };

export type CategoryFieldsFragment = {
	__typename?: 'Category';
	code: string;
	name: string;
	category_id: string;
	icon?: string | null;
	parent_category_id?: number | null;
	weight?: number | null;
	created_at: any;
	updated_at: any;
};

export type FindAllCategoriesQueryVariables = Exact<{
	where?: InputMaybe<CategoryWhereInput>;
	orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput> | CategoryOrderByWithRelationInput>;
	cursor?: InputMaybe<CategoryWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	distinct?: InputMaybe<Array<CategoryScalarFieldEnum> | CategoryScalarFieldEnum>;
}>;

export type FindAllCategoriesQuery = {
	__typename?: 'Query';
	findAllCategories: Array<{
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	}>;
};

export type FindAllCategoriesOrderByWeightQueryVariables = Exact<{
	sortOrder: SortOrder;
	cat_code?: InputMaybe<Scalars['String']>;
}>;

export type FindAllCategoriesOrderByWeightQuery = {
	__typename?: 'Query';
	findAllCategories: Array<{
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	}>;
};

export type FindAllCategoriesWhereCodeEqualsQueryVariables = Exact<{
	code: Scalars['String'];
}>;

export type FindAllCategoriesWhereCodeEqualsQuery = {
	__typename?: 'Query';
	findAllCategories: Array<{
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	}>;
};

export type CreateCategoryMutationVariables = Exact<{
	data: CategoryCreateInput;
}>;

export type CreateCategoryMutation = {
	__typename?: 'Mutation';
	createCategory: {
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	};
};

export type RemoveCategoryMutationVariables = Exact<{
	id: Scalars['Int'];
}>;

export type RemoveCategoryMutation = {
	__typename?: 'Mutation';
	removeCategory?: {
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	} | null;
};

export type UpdateCategoryMutationVariables = Exact<{
	id: Scalars['Int'];
	data: CategoryUpdateInput;
}>;

export type UpdateCategoryMutation = {
	__typename?: 'Mutation';
	updateCategory?: {
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	} | null;
};

export type UpdateManyCategoriesMutationVariables = Exact<{
	data: Array<UpdateManyCategoriesInput> | UpdateManyCategoriesInput;
}>;

export type UpdateManyCategoriesMutation = {
	__typename?: 'Mutation';
	updateManyCategories?: Array<{
		__typename?: 'Category';
		code: string;
		name: string;
		category_id: string;
		icon?: string | null;
		parent_category_id?: number | null;
		weight?: number | null;
		created_at: any;
		updated_at: any;
	}> | null;
};

export type GetSasTokenQueryVariables = Exact<{
	filename: Scalars['String'];
}>;

export type GetSasTokenQuery = { __typename?: 'Query'; getSASToken: { __typename?: 'SasToken'; url: string; blobName: string; startsOn: any; expiresOn: any } };

export type ListAdFieldsFragment = { __typename?: 'ListAd'; ad_id: number; list_id: number };

export type ListFieldsFragment = {
	__typename?: 'List';
	list_id: string;
	list_type: number;
	title: string;
	search_params: string;
	is_notifiable_by_email: boolean;
	is_notifiable_by_push: boolean;
	is_notifiable_by_sms: boolean;
	user_sub: string;
	ListAd?: Array<{ __typename?: 'ListAd'; ad_id: number; list_id: number }> | null;
};

export type AddToFavoritesMutationVariables = Exact<{
	where: AdWhereUniqueInput;
}>;

export type AddToFavoritesMutation = { __typename?: 'Mutation'; addToFavorites?: { __typename?: 'ListAd'; ad_id: number; list_id: number } | null };

export type CreateListAdMutationVariables = Exact<{
	data: ListAdCreateInput;
}>;

export type CreateListAdMutation = { __typename?: 'Mutation'; createListAd?: { __typename?: 'ListAd'; ad_id: number; list_id: number } | null };

export type RemoveListMutationVariables = Exact<{
	where: ListWhereUniqueInput;
}>;

export type RemoveListMutation = { __typename?: 'Mutation'; removeList?: number | null };

export type CreateListMutationVariables = Exact<{
	data: ListCreateInput;
}>;

export type CreateListMutation = {
	__typename?: 'Mutation';
	createList: {
		__typename?: 'List';
		list_id: string;
		list_type: number;
		title: string;
		search_params: string;
		is_notifiable_by_email: boolean;
		is_notifiable_by_push: boolean;
		is_notifiable_by_sms: boolean;
		user_sub: string;
		ListAd?: Array<{ __typename?: 'ListAd'; ad_id: number; list_id: number }> | null;
	};
};

export type UpdateListMutationVariables = Exact<{
	data: ListUpdateInput;
	where: ListWhereUniqueInput;
}>;

export type UpdateListMutation = {
	__typename?: 'Mutation';
	updateList?: {
		__typename?: 'List';
		list_id: string;
		list_type: number;
		title: string;
		search_params: string;
		is_notifiable_by_email: boolean;
		is_notifiable_by_push: boolean;
		is_notifiable_by_sms: boolean;
		user_sub: string;
		ListAd?: Array<{ __typename?: 'ListAd'; ad_id: number; list_id: number }> | null;
	} | null;
};

export type FindMyListsQueryVariables = Exact<{
	where?: InputMaybe<ListWhereInput>;
	orderBy?: InputMaybe<Array<ListOrderByWithRelationInput> | ListOrderByWithRelationInput>;
	cursor?: InputMaybe<ListWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	distinct?: InputMaybe<Array<ListScalarFieldEnum> | ListScalarFieldEnum>;
}>;

export type FindMyListsQuery = {
	__typename?: 'Query';
	findMyLists: Array<{
		__typename?: 'List';
		list_id: string;
		list_type: number;
		title: string;
		search_params: string;
		is_notifiable_by_email: boolean;
		is_notifiable_by_push: boolean;
		is_notifiable_by_sms: boolean;
		user_sub: string;
		ListAd?: Array<{ __typename?: 'ListAd'; ad_id: number; list_id: number }> | null;
	}>;
};

export type FindOneListQueryVariables = Exact<{
	where?: InputMaybe<ListWhereInput>;
	orderBy?: InputMaybe<Array<ListOrderByWithRelationInput> | ListOrderByWithRelationInput>;
	cursor?: InputMaybe<ListWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	distinct?: InputMaybe<Array<ListScalarFieldEnum> | ListScalarFieldEnum>;
}>;

export type FindOneListQuery = {
	__typename?: 'Query';
	findOneList?: {
		__typename?: 'List';
		list_id: string;
		list_type: number;
		title: string;
		search_params: string;
		is_notifiable_by_email: boolean;
		is_notifiable_by_push: boolean;
		is_notifiable_by_sms: boolean;
		user_sub: string;
		ListAd?: Array<{ __typename?: 'ListAd'; ad_id: number; list_id: number }> | null;
	} | null;
};

export type FindFavoritesQueryVariables = Exact<{ [key: string]: never }>;

export type FindFavoritesQuery = {
	__typename?: 'Query';
	findOneList?: {
		__typename?: 'List';
		list_id: string;
		list_type: number;
		title: string;
		search_params: string;
		is_notifiable_by_email: boolean;
		is_notifiable_by_push: boolean;
		is_notifiable_by_sms: boolean;
		user_sub: string;
		ListAd?: Array<{ __typename?: 'ListAd'; ad_id: number; list_id: number }> | null;
	} | null;
};

export type RemoveListAdMutationVariables = Exact<{
	ad_id: Scalars['Int'];
	list_id: Scalars['Int'];
}>;

export type RemoveListAdMutation = { __typename?: 'Mutation'; removeListAd?: { __typename?: 'ListAd'; ad_id: number; list_id: number } | null };

export type PromotionPlansFieldsFragment = {
	__typename?: 'PromotionPlan';
	promotion_plan_id: string;
	created_at: any;
	updated_at: any;
	deleted_at?: any | null;
	title: string;
	text: string;
	price: any;
	validity_period: number;
	promotion_plan_type: number;
	ParentPromotionPlan?: Array<{
		__typename?: 'PromotionPlanRelation';
		parent_promotion_plan_id: number;
		child_promotion_plan_id: number;
		count: number;
		reccurence: number;
	}> | null;
	ChildPromotionPlan?: Array<{ __typename?: 'PromotionPlanRelation'; parent_promotion_plan_id: number; child_promotion_plan_id: number; count: number; reccurence: number }> | null;
};

export type ParentChildFieldsFragment = {
	__typename?: 'PromotionPlanRelation';
	parent_promotion_plan_id: number;
	child_promotion_plan_id: number;
	count: number;
	reccurence: number;
};

export type FindAllPromotionPlansQueryVariables = Exact<{
	where?: InputMaybe<PromotionPlanWhereInput>;
	orderBy?: InputMaybe<Array<PromotionPlanOrderByWithRelationInput> | PromotionPlanOrderByWithRelationInput>;
	cursor?: InputMaybe<PromotionPlanWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
}>;

export type FindAllPromotionPlansQuery = {
	__typename?: 'Query';
	findAllPromotionPlans: Array<{
		__typename?: 'PromotionPlan';
		promotion_plan_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		text: string;
		price: any;
		validity_period: number;
		promotion_plan_type: number;
		ParentPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
		ChildPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
	}>;
};

export type FindUniquePromotionPlanQueryVariables = Exact<{
	where: PromotionPlanWhereUniqueInput;
}>;

export type FindUniquePromotionPlanQuery = {
	__typename?: 'Query';
	findUniquePromotionPlan?: {
		__typename?: 'PromotionPlan';
		promotion_plan_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		text: string;
		price: any;
		validity_period: number;
		promotion_plan_type: number;
		ParentPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
		ChildPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
	} | null;
};

export type CreatePromotionPlanMutationVariables = Exact<{
	data: PromotionPlanCreateInput;
}>;

export type CreatePromotionPlanMutation = {
	__typename?: 'Mutation';
	createPromotionPlan: {
		__typename?: 'PromotionPlan';
		promotion_plan_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		text: string;
		price: any;
		validity_period: number;
		promotion_plan_type: number;
		ParentPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
		ChildPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
	};
};

export type UpdatePromotionPlanMutationVariables = Exact<{
	data: PromotionPlanUpdateInput;
	id: Scalars['Int'];
}>;

export type UpdatePromotionPlanMutation = {
	__typename?: 'Mutation';
	updatePromotionPlan: {
		__typename?: 'PromotionPlan';
		promotion_plan_id: string;
		created_at: any;
		updated_at: any;
		deleted_at?: any | null;
		title: string;
		text: string;
		price: any;
		validity_period: number;
		promotion_plan_type: number;
		ParentPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
		ChildPromotionPlan?: Array<{
			__typename?: 'PromotionPlanRelation';
			parent_promotion_plan_id: number;
			child_promotion_plan_id: number;
			count: number;
			reccurence: number;
		}> | null;
	};
};

export type RemovePromotionPlanMutationVariables = Exact<{
	id: Scalars['Int'];
}>;

export type RemovePromotionPlanMutation = { __typename?: 'Mutation'; removePromotionPlan: { __typename?: 'PromotionPlan'; promotion_plan_id: string } };

export type FindUniqueUserWhereUserIdEqualsQueryVariables = Exact<{
	where: UserWhereUniqueInput;
}>;

export type FindUniqueUserWhereUserIdEqualsQuery = {
	__typename?: 'Query';
	findUniqueUser?: {
		__typename?: 'User';
		name?: string | null;
		user_sub: string;
		ads?: Array<{
			__typename?: 'Ad';
			ad_id: string;
			created_at: any;
			updated_at: any;
			deleted_at?: any | null;
			price_rating?: any | null;
			title: string;
			text: string;
			coords_latitude?: number | null;
			coords_longitude?: number | null;
			coords_radius?: number | null;
			address?: string | null;
			price_eurocent?: number | null;
			is_sold: boolean;
			moderation_flag: number;
			ad_auto?: {
				__typename?: 'AdAuto';
				ad_auto_id: string;
				condition_type_cid?: number | null;
				vehicle_type_cid?: number | null;
				fuel_type_cid?: number | null;
				transmission_type_cid?: number | null;
				make_cid?: number | null;
				model_cid?: number | null;
				variant_cid?: number | null;
				body_type_cid?: number | null;
				color_interior_cid?: number | null;
				color_exterior_cid?: number | null;
				emission_class_cid?: number | null;
				conditioning_cid?: number | null;
				year: number;
				km?: number | null;
				power_kw?: number | null;
				registered_until?: any | null;
				doors_num?: number | null;
				seats_num?: number | null;
				is_first_owner?: boolean | null;
				is_service_book_available?: boolean | null;
				is_vehicle_garaged?: boolean | null;
				engine_displacement_cm3?: number | null;
				battery_capacity_kwh?: number | null;
			} | null;
			user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
		}> | null;
	} | null;
};

export type FindAllUsersQueryVariables = Exact<{
	where?: InputMaybe<UserWhereInput>;
	orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
	cursor?: InputMaybe<UserWhereUniqueInput>;
	take?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
}>;

export type FindAllUsersQuery = {
	__typename?: 'Query';
	findAllUsers: Array<{
		__typename?: 'User';
		name?: string | null;
		user_sub: string;
		ads?: Array<{
			__typename?: 'Ad';
			ad_id: string;
			created_at: any;
			updated_at: any;
			deleted_at?: any | null;
			price_rating?: any | null;
			title: string;
			text: string;
			coords_latitude?: number | null;
			coords_longitude?: number | null;
			coords_radius?: number | null;
			address?: string | null;
			price_eurocent?: number | null;
			is_sold: boolean;
			moderation_flag: number;
			ad_auto?: {
				__typename?: 'AdAuto';
				ad_auto_id: string;
				condition_type_cid?: number | null;
				vehicle_type_cid?: number | null;
				fuel_type_cid?: number | null;
				transmission_type_cid?: number | null;
				make_cid?: number | null;
				model_cid?: number | null;
				variant_cid?: number | null;
				body_type_cid?: number | null;
				color_interior_cid?: number | null;
				color_exterior_cid?: number | null;
				emission_class_cid?: number | null;
				conditioning_cid?: number | null;
				year: number;
				km?: number | null;
				power_kw?: number | null;
				registered_until?: any | null;
				doors_num?: number | null;
				seats_num?: number | null;
				is_first_owner?: boolean | null;
				is_service_book_available?: boolean | null;
				is_vehicle_garaged?: boolean | null;
				engine_displacement_cm3?: number | null;
				battery_capacity_kwh?: number | null;
			} | null;
			user?: { __typename?: 'User'; name?: string | null; user_sub: string } | null;
		}> | null;
	}>;
};

export const UserInfoFieldsFragmentDoc = gql`
	fragment userInfoFields on User {
		name
		user_sub
	}
`;
export const UserDefinedAdFieldsFragmentDoc = gql`
	fragment userDefinedAdFields on Ad {
		title
		text
		coords_latitude
		coords_longitude
		coords_radius
		address
		price_eurocent
		is_sold
	}
`;
export const AdminDefinedFieldFragmentDoc = gql`
	fragment adminDefinedField on Ad {
		moderation_flag
	}
`;
export const AdFieldsFragmentDoc = gql`
	fragment adFields on Ad {
		ad_id
		created_at
		updated_at
		deleted_at
		price_rating
		user {
			...userInfoFields
		}
		...userDefinedAdFields
		...adminDefinedField
	}
	${UserInfoFieldsFragmentDoc}
	${UserDefinedAdFieldsFragmentDoc}
	${AdminDefinedFieldFragmentDoc}
`;
export const FileFieldsFragmentDoc = gql`
	fragment fileFields on File {
		file_id
		filename
		filesize
		code
		path
	}
`;
export const AdAutoFieldsFragmentDoc = gql`
	fragment adAutoFields on AdAuto {
		ad_auto_id
		condition_type_cid
		vehicle_type_cid
		fuel_type_cid
		transmission_type_cid
		make_cid
		model_cid
		variant_cid
		body_type_cid
		color_interior_cid
		color_exterior_cid
		emission_class_cid
		conditioning_cid
		year
		km
		power_kw
		registered_until
		doors_num
		seats_num
		is_first_owner
		is_service_book_available
		is_vehicle_garaged
		engine_displacement_cm3
		battery_capacity_kwh
	}
`;
export const AdPromotionFieldFragmentDoc = gql`
	fragment adPromotionField on AdPromotion {
		promotion_plan_id
	}
`;
export const AdAdAutoFileFieldsFragmentDoc = gql`
	fragment adAdAutoFileFields on Ad {
		...adFields
		files {
			...fileFields
		}
		ad_auto {
			...adAutoFields
		}
		AdPromotion {
			...adPromotionField
		}
	}
	${AdFieldsFragmentDoc}
	${FileFieldsFragmentDoc}
	${AdAutoFieldsFragmentDoc}
	${AdPromotionFieldFragmentDoc}
`;
export const AdPromotionFieldsFragmentDoc = gql`
	fragment adPromotionFields on AdPromotion {
		valid_from
		valid_to
		transaction_id
	}
`;
export const BlogFieldsFragmentDoc = gql`
	fragment blogFields on Blog {
		blog_id
		created_at
		updated_at
		deleted_at
		title
		slug
		text
		moderation_flag
	}
`;
export const UserInfoFragmentDoc = gql`
	fragment userInfo on User {
		user_sub
		name
	}
`;
export const CategoryFieldsFragmentDoc = gql`
	fragment categoryFields on Category {
		code
		name
		category_id
		icon
		parent_category_id
		weight
		created_at
		updated_at
	}
`;
export const ListAdFieldsFragmentDoc = gql`
	fragment listAdFields on ListAd {
		ad_id
		list_id
	}
`;
export const ListFieldsFragmentDoc = gql`
	fragment listFields on List {
		list_id
		list_type
		title
		search_params
		is_notifiable_by_email
		is_notifiable_by_push
		is_notifiable_by_sms
		user_sub
		ListAd {
			...listAdFields
		}
	}
	${ListAdFieldsFragmentDoc}
`;
export const ParentChildFieldsFragmentDoc = gql`
	fragment ParentChildFields on PromotionPlanRelation {
		parent_promotion_plan_id
		child_promotion_plan_id
		count
		reccurence
	}
`;
export const PromotionPlansFieldsFragmentDoc = gql`
	fragment promotionPlansFields on PromotionPlan {
		promotion_plan_id
		created_at
		updated_at
		deleted_at
		title
		text
		price
		validity_period
		promotion_plan_type
		ParentPromotionPlan {
			...ParentChildFields
		}
		ChildPromotionPlan {
			...ParentChildFields
		}
	}
	${ParentChildFieldsFragmentDoc}
`;
export const CreateAdDocument = gql`
	mutation CreateAd($data: AdCreateWithoutUserInput!) {
		createAd(data: $data) {
			...adAdAutoFileFields
		}
	}
	${AdAdAutoFileFieldsFragmentDoc}
`;
export type CreateAdMutationFn = Apollo.MutationFunction<CreateAdMutation, CreateAdMutationVariables>;

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
export function useCreateAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdMutation, CreateAdMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateAdMutation, CreateAdMutationVariables>(CreateAdDocument, options);
}
export type CreateAdMutationHookResult = ReturnType<typeof useCreateAdMutation>;
export type CreateAdMutationResult = Apollo.MutationResult<CreateAdMutation>;
export type CreateAdMutationOptions = Apollo.BaseMutationOptions<CreateAdMutation, CreateAdMutationVariables>;
export const FindAllAdsDocument = gql`
	query FindAllAds($where: AdWhereInput, $orderBy: [AdOrderByWithRelationInput!], $cursor: AdWhereUniqueInput, $take: Int, $skip: Int) {
		findAllAds(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
			...adAdAutoFileFields
		}
	}
	${AdAdAutoFileFieldsFragmentDoc}
`;

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
export function useFindAllAdsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllAdsQuery, FindAllAdsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllAdsQuery, FindAllAdsQueryVariables>(FindAllAdsDocument, options);
}
export function useFindAllAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllAdsQuery, FindAllAdsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllAdsQuery, FindAllAdsQueryVariables>(FindAllAdsDocument, options);
}
export type FindAllAdsQueryHookResult = ReturnType<typeof useFindAllAdsQuery>;
export type FindAllAdsLazyQueryHookResult = ReturnType<typeof useFindAllAdsLazyQuery>;
export type FindAllAdsQueryResult = Apollo.QueryResult<FindAllAdsQuery, FindAllAdsQueryVariables>;
export const FindUniqueAdWhereAdIdEqualsDocument = gql`
	query FindUniqueAdWhereAdIdEquals($where: AdWhereUniqueInput!) {
		findUniqueAd(where: $where) {
			...adAdAutoFileFields
		}
	}
	${AdAdAutoFileFieldsFragmentDoc}
`;

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
export function useFindUniqueAdWhereAdIdEqualsQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueAdWhereAdIdEqualsQuery, FindUniqueAdWhereAdIdEqualsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindUniqueAdWhereAdIdEqualsQuery, FindUniqueAdWhereAdIdEqualsQueryVariables>(FindUniqueAdWhereAdIdEqualsDocument, options);
}
export function useFindUniqueAdWhereAdIdEqualsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueAdWhereAdIdEqualsQuery, FindUniqueAdWhereAdIdEqualsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindUniqueAdWhereAdIdEqualsQuery, FindUniqueAdWhereAdIdEqualsQueryVariables>(FindUniqueAdWhereAdIdEqualsDocument, options);
}
export type FindUniqueAdWhereAdIdEqualsQueryHookResult = ReturnType<typeof useFindUniqueAdWhereAdIdEqualsQuery>;
export type FindUniqueAdWhereAdIdEqualsLazyQueryHookResult = ReturnType<typeof useFindUniqueAdWhereAdIdEqualsLazyQuery>;
export type FindUniqueAdWhereAdIdEqualsQueryResult = Apollo.QueryResult<FindUniqueAdWhereAdIdEqualsQuery, FindUniqueAdWhereAdIdEqualsQueryVariables>;
export const AggregateAdsWhereDocument = gql`
	query AggregateAdsWhere($where: AdWhereInput) {
		aggregateAds(where: $where, _count: { ad_id: true }) {
			_count {
				ad_id
			}
		}
	}
`;

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
export function useAggregateAdsWhereQuery(baseOptions?: Apollo.QueryHookOptions<AggregateAdsWhereQuery, AggregateAdsWhereQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<AggregateAdsWhereQuery, AggregateAdsWhereQueryVariables>(AggregateAdsWhereDocument, options);
}
export function useAggregateAdsWhereLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AggregateAdsWhereQuery, AggregateAdsWhereQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<AggregateAdsWhereQuery, AggregateAdsWhereQueryVariables>(AggregateAdsWhereDocument, options);
}
export type AggregateAdsWhereQueryHookResult = ReturnType<typeof useAggregateAdsWhereQuery>;
export type AggregateAdsWhereLazyQueryHookResult = ReturnType<typeof useAggregateAdsWhereLazyQuery>;
export type AggregateAdsWhereQueryResult = Apollo.QueryResult<AggregateAdsWhereQuery, AggregateAdsWhereQueryVariables>;
export const RemoveAdDocument = gql`
	mutation removeAd($id: Int!) {
		removeAd(where: { ad_id: $id }) {
			ad_id
		}
	}
`;
export type RemoveAdMutationFn = Apollo.MutationFunction<RemoveAdMutation, RemoveAdMutationVariables>;

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
export function useRemoveAdMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAdMutation, RemoveAdMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RemoveAdMutation, RemoveAdMutationVariables>(RemoveAdDocument, options);
}
export type RemoveAdMutationHookResult = ReturnType<typeof useRemoveAdMutation>;
export type RemoveAdMutationResult = Apollo.MutationResult<RemoveAdMutation>;
export type RemoveAdMutationOptions = Apollo.BaseMutationOptions<RemoveAdMutation, RemoveAdMutationVariables>;
export const UpdateAdDocument = gql`
	mutation updateAd($id: Int!, $data: AdUpdateInput!) {
		updateAd(where: { ad_id: $id }, data: $data) {
			...adAdAutoFileFields
		}
	}
	${AdAdAutoFileFieldsFragmentDoc}
`;
export type UpdateAdMutationFn = Apollo.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>;

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
export function useUpdateAdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdMutation, UpdateAdMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateAdMutation, UpdateAdMutationVariables>(UpdateAdDocument, options);
}
export type UpdateAdMutationHookResult = ReturnType<typeof useUpdateAdMutation>;
export type UpdateAdMutationResult = Apollo.MutationResult<UpdateAdMutation>;
export type UpdateAdMutationOptions = Apollo.BaseMutationOptions<UpdateAdMutation, UpdateAdMutationVariables>;
export const EstimateAdPriceDocument = gql`
	query estimateAdPrice {
		estimateAdPrice {
			price_eurocent
		}
	}
`;

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
export function useEstimateAdPriceQuery(baseOptions?: Apollo.QueryHookOptions<EstimateAdPriceQuery, EstimateAdPriceQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<EstimateAdPriceQuery, EstimateAdPriceQueryVariables>(EstimateAdPriceDocument, options);
}
export function useEstimateAdPriceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EstimateAdPriceQuery, EstimateAdPriceQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<EstimateAdPriceQuery, EstimateAdPriceQueryVariables>(EstimateAdPriceDocument, options);
}
export type EstimateAdPriceQueryHookResult = ReturnType<typeof useEstimateAdPriceQuery>;
export type EstimateAdPriceLazyQueryHookResult = ReturnType<typeof useEstimateAdPriceLazyQuery>;
export type EstimateAdPriceQueryResult = Apollo.QueryResult<EstimateAdPriceQuery, EstimateAdPriceQueryVariables>;
export const CreateAdPromotionDocument = gql`
	mutation CreateAdPromotion($data: AdPromotionCreateInput!) {
		createAdPromotion(data: $data) {
			...adPromotionFields
		}
	}
	${AdPromotionFieldsFragmentDoc}
`;
export type CreateAdPromotionMutationFn = Apollo.MutationFunction<CreateAdPromotionMutation, CreateAdPromotionMutationVariables>;

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
export function useCreateAdPromotionMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdPromotionMutation, CreateAdPromotionMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateAdPromotionMutation, CreateAdPromotionMutationVariables>(CreateAdPromotionDocument, options);
}
export type CreateAdPromotionMutationHookResult = ReturnType<typeof useCreateAdPromotionMutation>;
export type CreateAdPromotionMutationResult = Apollo.MutationResult<CreateAdPromotionMutation>;
export type CreateAdPromotionMutationOptions = Apollo.BaseMutationOptions<CreateAdPromotionMutation, CreateAdPromotionMutationVariables>;
export const FindAllBlogsDocument = gql`
	query FindAllBlogs($where: BlogWhereInput, $orderBy: [BlogOrderByWithRelationInput!], $cursor: BlogWhereUniqueInput, $take: Int, $skip: Int) {
		findAllBlogs(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
			...blogFields
		}
	}
	${BlogFieldsFragmentDoc}
`;

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
export function useFindAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllBlogsQuery, FindAllBlogsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllBlogsQuery, FindAllBlogsQueryVariables>(FindAllBlogsDocument, options);
}
export function useFindAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllBlogsQuery, FindAllBlogsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllBlogsQuery, FindAllBlogsQueryVariables>(FindAllBlogsDocument, options);
}
export type FindAllBlogsQueryHookResult = ReturnType<typeof useFindAllBlogsQuery>;
export type FindAllBlogsLazyQueryHookResult = ReturnType<typeof useFindAllBlogsLazyQuery>;
export type FindAllBlogsQueryResult = Apollo.QueryResult<FindAllBlogsQuery, FindAllBlogsQueryVariables>;
export const CreateBlogDocument = gql`
	mutation CreateBlog($data: BlogCreateWithoutUserInput!) {
		createBlog(data: $data) {
			...blogFields
		}
	}
	${BlogFieldsFragmentDoc}
`;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

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
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
}
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const UpdateBlogDocument = gql`
	mutation UpdateBlog($data: BlogUpdateInput!, $id: Int!) {
		updateBlog(data: $data, where: { blog_id: $id }) {
			...blogFields
		}
	}
	${BlogFieldsFragmentDoc}
`;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

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
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
}
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const RemoveBlogDocument = gql`
	mutation removeBlog($id: Int!) {
		removeBlog(where: { blog_id: $id }) {
			blog_id
		}
	}
`;
export type RemoveBlogMutationFn = Apollo.MutationFunction<RemoveBlogMutation, RemoveBlogMutationVariables>;

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
export function useRemoveBlogMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBlogMutation, RemoveBlogMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RemoveBlogMutation, RemoveBlogMutationVariables>(RemoveBlogDocument, options);
}
export type RemoveBlogMutationHookResult = ReturnType<typeof useRemoveBlogMutation>;
export type RemoveBlogMutationResult = Apollo.MutationResult<RemoveBlogMutation>;
export type RemoveBlogMutationOptions = Apollo.BaseMutationOptions<RemoveBlogMutation, RemoveBlogMutationVariables>;
export const FindAllCategoriesDocument = gql`
	query findAllCategories(
		$where: CategoryWhereInput
		$orderBy: [CategoryOrderByWithRelationInput!]
		$cursor: CategoryWhereUniqueInput
		$take: Int
		$skip: Int
		$distinct: [CategoryScalarFieldEnum!]
	) {
		findAllCategories(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;

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
export function useFindAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
}
export function useFindAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
}
export type FindAllCategoriesQueryHookResult = ReturnType<typeof useFindAllCategoriesQuery>;
export type FindAllCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesLazyQuery>;
export type FindAllCategoriesQueryResult = Apollo.QueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindAllCategoriesOrderByWeightDocument = gql`
	query findAllCategoriesOrderByWeight($sortOrder: SortOrder!, $cat_code: String) {
		findAllCategories(orderBy: [{ weight: $sortOrder }, { updated_at: desc }], where: { code: { equals: $cat_code } }) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;

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
export function useFindAllCategoriesOrderByWeightQuery(baseOptions: Apollo.QueryHookOptions<FindAllCategoriesOrderByWeightQuery, FindAllCategoriesOrderByWeightQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllCategoriesOrderByWeightQuery, FindAllCategoriesOrderByWeightQueryVariables>(FindAllCategoriesOrderByWeightDocument, options);
}
export function useFindAllCategoriesOrderByWeightLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesOrderByWeightQuery, FindAllCategoriesOrderByWeightQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllCategoriesOrderByWeightQuery, FindAllCategoriesOrderByWeightQueryVariables>(FindAllCategoriesOrderByWeightDocument, options);
}
export type FindAllCategoriesOrderByWeightQueryHookResult = ReturnType<typeof useFindAllCategoriesOrderByWeightQuery>;
export type FindAllCategoriesOrderByWeightLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesOrderByWeightLazyQuery>;
export type FindAllCategoriesOrderByWeightQueryResult = Apollo.QueryResult<FindAllCategoriesOrderByWeightQuery, FindAllCategoriesOrderByWeightQueryVariables>;
export const FindAllCategoriesWhereCodeEqualsDocument = gql`
	query findAllCategoriesWhereCodeEquals($code: String!) {
		findAllCategories(where: { code: { equals: $code } }) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;

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
export function useFindAllCategoriesWhereCodeEqualsQuery(
	baseOptions: Apollo.QueryHookOptions<FindAllCategoriesWhereCodeEqualsQuery, FindAllCategoriesWhereCodeEqualsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllCategoriesWhereCodeEqualsQuery, FindAllCategoriesWhereCodeEqualsQueryVariables>(FindAllCategoriesWhereCodeEqualsDocument, options);
}
export function useFindAllCategoriesWhereCodeEqualsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesWhereCodeEqualsQuery, FindAllCategoriesWhereCodeEqualsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllCategoriesWhereCodeEqualsQuery, FindAllCategoriesWhereCodeEqualsQueryVariables>(FindAllCategoriesWhereCodeEqualsDocument, options);
}
export type FindAllCategoriesWhereCodeEqualsQueryHookResult = ReturnType<typeof useFindAllCategoriesWhereCodeEqualsQuery>;
export type FindAllCategoriesWhereCodeEqualsLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesWhereCodeEqualsLazyQuery>;
export type FindAllCategoriesWhereCodeEqualsQueryResult = Apollo.QueryResult<FindAllCategoriesWhereCodeEqualsQuery, FindAllCategoriesWhereCodeEqualsQueryVariables>;
export const CreateCategoryDocument = gql`
	mutation createCategory($data: CategoryCreateInput!) {
		createCategory(data: $data) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

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
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
}
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const RemoveCategoryDocument = gql`
	mutation removeCategory($id: Int!) {
		removeCategory(where: { category_id: $id }) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;
export type RemoveCategoryMutationFn = Apollo.MutationFunction<RemoveCategoryMutation, RemoveCategoryMutationVariables>;

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
export function useRemoveCategoryMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RemoveCategoryMutation, RemoveCategoryMutationVariables>(RemoveCategoryDocument, options);
}
export type RemoveCategoryMutationHookResult = ReturnType<typeof useRemoveCategoryMutation>;
export type RemoveCategoryMutationResult = Apollo.MutationResult<RemoveCategoryMutation>;
export type RemoveCategoryMutationOptions = Apollo.BaseMutationOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
	mutation updateCategory($id: Int!, $data: CategoryUpdateInput!) {
		updateCategory(where: { category_id: $id }, data: $data) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

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
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
}
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const UpdateManyCategoriesDocument = gql`
	mutation updateManyCategories($data: [UpdateManyCategoriesInput!]!) {
		updateManyCategories(items: $data) {
			...categoryFields
		}
	}
	${CategoryFieldsFragmentDoc}
`;
export type UpdateManyCategoriesMutationFn = Apollo.MutationFunction<UpdateManyCategoriesMutation, UpdateManyCategoriesMutationVariables>;

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
export function useUpdateManyCategoriesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateManyCategoriesMutation, UpdateManyCategoriesMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateManyCategoriesMutation, UpdateManyCategoriesMutationVariables>(UpdateManyCategoriesDocument, options);
}
export type UpdateManyCategoriesMutationHookResult = ReturnType<typeof useUpdateManyCategoriesMutation>;
export type UpdateManyCategoriesMutationResult = Apollo.MutationResult<UpdateManyCategoriesMutation>;
export type UpdateManyCategoriesMutationOptions = Apollo.BaseMutationOptions<UpdateManyCategoriesMutation, UpdateManyCategoriesMutationVariables>;
export const GetSasTokenDocument = gql`
	query GetSASToken($filename: String!) {
		getSASToken(data: { filename: $filename }) {
			url
			blobName
			startsOn
			expiresOn
		}
	}
`;

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
export function useGetSasTokenQuery(baseOptions: Apollo.QueryHookOptions<GetSasTokenQuery, GetSasTokenQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GetSasTokenQuery, GetSasTokenQueryVariables>(GetSasTokenDocument, options);
}
export function useGetSasTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSasTokenQuery, GetSasTokenQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GetSasTokenQuery, GetSasTokenQueryVariables>(GetSasTokenDocument, options);
}
export type GetSasTokenQueryHookResult = ReturnType<typeof useGetSasTokenQuery>;
export type GetSasTokenLazyQueryHookResult = ReturnType<typeof useGetSasTokenLazyQuery>;
export type GetSasTokenQueryResult = Apollo.QueryResult<GetSasTokenQuery, GetSasTokenQueryVariables>;
export const AddToFavoritesDocument = gql`
	mutation addToFavorites($where: AdWhereUniqueInput!) {
		addToFavorites(where: $where) {
			...listAdFields
		}
	}
	${ListAdFieldsFragmentDoc}
`;
export type AddToFavoritesMutationFn = Apollo.MutationFunction<AddToFavoritesMutation, AddToFavoritesMutationVariables>;

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
export function useAddToFavoritesMutation(baseOptions?: Apollo.MutationHookOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<AddToFavoritesMutation, AddToFavoritesMutationVariables>(AddToFavoritesDocument, options);
}
export type AddToFavoritesMutationHookResult = ReturnType<typeof useAddToFavoritesMutation>;
export type AddToFavoritesMutationResult = Apollo.MutationResult<AddToFavoritesMutation>;
export type AddToFavoritesMutationOptions = Apollo.BaseMutationOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>;
export const CreateListAdDocument = gql`
	mutation createListAd($data: ListAdCreateInput!) {
		createListAd(data: $data) {
			...listAdFields
		}
	}
	${ListAdFieldsFragmentDoc}
`;
export type CreateListAdMutationFn = Apollo.MutationFunction<CreateListAdMutation, CreateListAdMutationVariables>;

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
export function useCreateListAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateListAdMutation, CreateListAdMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateListAdMutation, CreateListAdMutationVariables>(CreateListAdDocument, options);
}
export type CreateListAdMutationHookResult = ReturnType<typeof useCreateListAdMutation>;
export type CreateListAdMutationResult = Apollo.MutationResult<CreateListAdMutation>;
export type CreateListAdMutationOptions = Apollo.BaseMutationOptions<CreateListAdMutation, CreateListAdMutationVariables>;
export const RemoveListDocument = gql`
	mutation removeList($where: ListWhereUniqueInput!) {
		removeList(where: $where)
	}
`;
export type RemoveListMutationFn = Apollo.MutationFunction<RemoveListMutation, RemoveListMutationVariables>;

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
export function useRemoveListMutation(baseOptions?: Apollo.MutationHookOptions<RemoveListMutation, RemoveListMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RemoveListMutation, RemoveListMutationVariables>(RemoveListDocument, options);
}
export type RemoveListMutationHookResult = ReturnType<typeof useRemoveListMutation>;
export type RemoveListMutationResult = Apollo.MutationResult<RemoveListMutation>;
export type RemoveListMutationOptions = Apollo.BaseMutationOptions<RemoveListMutation, RemoveListMutationVariables>;
export const CreateListDocument = gql`
	mutation createList($data: ListCreateInput!) {
		createList(data: $data) {
			...listFields
		}
	}
	${ListFieldsFragmentDoc}
`;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

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
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
}
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const UpdateListDocument = gql`
	mutation updateList($data: ListUpdateInput!, $where: ListWhereUniqueInput!) {
		updateList(data: $data, where: $where) {
			...listFields
		}
	}
	${ListFieldsFragmentDoc}
`;
export type UpdateListMutationFn = Apollo.MutationFunction<UpdateListMutation, UpdateListMutationVariables>;

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
export function useUpdateListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateListMutation, UpdateListMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdateListMutation, UpdateListMutationVariables>(UpdateListDocument, options);
}
export type UpdateListMutationHookResult = ReturnType<typeof useUpdateListMutation>;
export type UpdateListMutationResult = Apollo.MutationResult<UpdateListMutation>;
export type UpdateListMutationOptions = Apollo.BaseMutationOptions<UpdateListMutation, UpdateListMutationVariables>;
export const FindMyListsDocument = gql`
	query findMyLists($where: ListWhereInput, $orderBy: [ListOrderByWithRelationInput!], $cursor: ListWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ListScalarFieldEnum!]) {
		findMyLists(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
			...listFields
		}
	}
	${ListFieldsFragmentDoc}
`;

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
export function useFindMyListsQuery(baseOptions?: Apollo.QueryHookOptions<FindMyListsQuery, FindMyListsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindMyListsQuery, FindMyListsQueryVariables>(FindMyListsDocument, options);
}
export function useFindMyListsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMyListsQuery, FindMyListsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindMyListsQuery, FindMyListsQueryVariables>(FindMyListsDocument, options);
}
export type FindMyListsQueryHookResult = ReturnType<typeof useFindMyListsQuery>;
export type FindMyListsLazyQueryHookResult = ReturnType<typeof useFindMyListsLazyQuery>;
export type FindMyListsQueryResult = Apollo.QueryResult<FindMyListsQuery, FindMyListsQueryVariables>;
export const FindOneListDocument = gql`
	query findOneList($where: ListWhereInput, $orderBy: [ListOrderByWithRelationInput!], $cursor: ListWhereUniqueInput, $take: Int, $skip: Int, $distinct: [ListScalarFieldEnum!]) {
		findOneList(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip, distinct: $distinct) {
			...listFields
		}
	}
	${ListFieldsFragmentDoc}
`;

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
export function useFindOneListQuery(baseOptions?: Apollo.QueryHookOptions<FindOneListQuery, FindOneListQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindOneListQuery, FindOneListQueryVariables>(FindOneListDocument, options);
}
export function useFindOneListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneListQuery, FindOneListQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindOneListQuery, FindOneListQueryVariables>(FindOneListDocument, options);
}
export type FindOneListQueryHookResult = ReturnType<typeof useFindOneListQuery>;
export type FindOneListLazyQueryHookResult = ReturnType<typeof useFindOneListLazyQuery>;
export type FindOneListQueryResult = Apollo.QueryResult<FindOneListQuery, FindOneListQueryVariables>;
export const FindFavoritesDocument = gql`
	query findFavorites {
		findOneList(where: { list_type: { equals: 0 } }) {
			...listFields
		}
	}
	${ListFieldsFragmentDoc}
`;

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
export function useFindFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<FindFavoritesQuery, FindFavoritesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindFavoritesQuery, FindFavoritesQueryVariables>(FindFavoritesDocument, options);
}
export function useFindFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFavoritesQuery, FindFavoritesQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindFavoritesQuery, FindFavoritesQueryVariables>(FindFavoritesDocument, options);
}
export type FindFavoritesQueryHookResult = ReturnType<typeof useFindFavoritesQuery>;
export type FindFavoritesLazyQueryHookResult = ReturnType<typeof useFindFavoritesLazyQuery>;
export type FindFavoritesQueryResult = Apollo.QueryResult<FindFavoritesQuery, FindFavoritesQueryVariables>;
export const RemoveListAdDocument = gql`
	mutation removeListAd($ad_id: Int!, $list_id: Int!) {
		removeListAd(where: { ad_id_list_id: { ad_id: $ad_id, list_id: $list_id } }) {
			...listAdFields
		}
	}
	${ListAdFieldsFragmentDoc}
`;
export type RemoveListAdMutationFn = Apollo.MutationFunction<RemoveListAdMutation, RemoveListAdMutationVariables>;

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
export function useRemoveListAdMutation(baseOptions?: Apollo.MutationHookOptions<RemoveListAdMutation, RemoveListAdMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RemoveListAdMutation, RemoveListAdMutationVariables>(RemoveListAdDocument, options);
}
export type RemoveListAdMutationHookResult = ReturnType<typeof useRemoveListAdMutation>;
export type RemoveListAdMutationResult = Apollo.MutationResult<RemoveListAdMutation>;
export type RemoveListAdMutationOptions = Apollo.BaseMutationOptions<RemoveListAdMutation, RemoveListAdMutationVariables>;
export const FindAllPromotionPlansDocument = gql`
	query FindAllPromotionPlans($where: PromotionPlanWhereInput, $orderBy: [PromotionPlanOrderByWithRelationInput!], $cursor: PromotionPlanWhereUniqueInput, $take: Int, $skip: Int) {
		findAllPromotionPlans(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
			...promotionPlansFields
		}
	}
	${PromotionPlansFieldsFragmentDoc}
`;

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
export function useFindAllPromotionPlansQuery(baseOptions?: Apollo.QueryHookOptions<FindAllPromotionPlansQuery, FindAllPromotionPlansQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllPromotionPlansQuery, FindAllPromotionPlansQueryVariables>(FindAllPromotionPlansDocument, options);
}
export function useFindAllPromotionPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllPromotionPlansQuery, FindAllPromotionPlansQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllPromotionPlansQuery, FindAllPromotionPlansQueryVariables>(FindAllPromotionPlansDocument, options);
}
export type FindAllPromotionPlansQueryHookResult = ReturnType<typeof useFindAllPromotionPlansQuery>;
export type FindAllPromotionPlansLazyQueryHookResult = ReturnType<typeof useFindAllPromotionPlansLazyQuery>;
export type FindAllPromotionPlansQueryResult = Apollo.QueryResult<FindAllPromotionPlansQuery, FindAllPromotionPlansQueryVariables>;
export const FindUniquePromotionPlanDocument = gql`
	query FindUniquePromotionPlan($where: PromotionPlanWhereUniqueInput!) {
		findUniquePromotionPlan(where: $where) {
			...promotionPlansFields
		}
	}
	${PromotionPlansFieldsFragmentDoc}
`;

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
export function useFindUniquePromotionPlanQuery(baseOptions: Apollo.QueryHookOptions<FindUniquePromotionPlanQuery, FindUniquePromotionPlanQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindUniquePromotionPlanQuery, FindUniquePromotionPlanQueryVariables>(FindUniquePromotionPlanDocument, options);
}
export function useFindUniquePromotionPlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniquePromotionPlanQuery, FindUniquePromotionPlanQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindUniquePromotionPlanQuery, FindUniquePromotionPlanQueryVariables>(FindUniquePromotionPlanDocument, options);
}
export type FindUniquePromotionPlanQueryHookResult = ReturnType<typeof useFindUniquePromotionPlanQuery>;
export type FindUniquePromotionPlanLazyQueryHookResult = ReturnType<typeof useFindUniquePromotionPlanLazyQuery>;
export type FindUniquePromotionPlanQueryResult = Apollo.QueryResult<FindUniquePromotionPlanQuery, FindUniquePromotionPlanQueryVariables>;
export const CreatePromotionPlanDocument = gql`
	mutation CreatePromotionPlan($data: PromotionPlanCreateInput!) {
		createPromotionPlan(data: $data) {
			...promotionPlansFields
		}
	}
	${PromotionPlansFieldsFragmentDoc}
`;
export type CreatePromotionPlanMutationFn = Apollo.MutationFunction<CreatePromotionPlanMutation, CreatePromotionPlanMutationVariables>;

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
export function useCreatePromotionPlanMutation(baseOptions?: Apollo.MutationHookOptions<CreatePromotionPlanMutation, CreatePromotionPlanMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<CreatePromotionPlanMutation, CreatePromotionPlanMutationVariables>(CreatePromotionPlanDocument, options);
}
export type CreatePromotionPlanMutationHookResult = ReturnType<typeof useCreatePromotionPlanMutation>;
export type CreatePromotionPlanMutationResult = Apollo.MutationResult<CreatePromotionPlanMutation>;
export type CreatePromotionPlanMutationOptions = Apollo.BaseMutationOptions<CreatePromotionPlanMutation, CreatePromotionPlanMutationVariables>;
export const UpdatePromotionPlanDocument = gql`
	mutation UpdatePromotionPlan($data: PromotionPlanUpdateInput!, $id: Int!) {
		updatePromotionPlan(data: $data, where: { promotion_plan_id: $id }) {
			...promotionPlansFields
		}
	}
	${PromotionPlansFieldsFragmentDoc}
`;
export type UpdatePromotionPlanMutationFn = Apollo.MutationFunction<UpdatePromotionPlanMutation, UpdatePromotionPlanMutationVariables>;

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
export function useUpdatePromotionPlanMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePromotionPlanMutation, UpdatePromotionPlanMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<UpdatePromotionPlanMutation, UpdatePromotionPlanMutationVariables>(UpdatePromotionPlanDocument, options);
}
export type UpdatePromotionPlanMutationHookResult = ReturnType<typeof useUpdatePromotionPlanMutation>;
export type UpdatePromotionPlanMutationResult = Apollo.MutationResult<UpdatePromotionPlanMutation>;
export type UpdatePromotionPlanMutationOptions = Apollo.BaseMutationOptions<UpdatePromotionPlanMutation, UpdatePromotionPlanMutationVariables>;
export const RemovePromotionPlanDocument = gql`
	mutation RemovePromotionPlan($id: Int!) {
		removePromotionPlan(where: { promotion_plan_id: $id }) {
			promotion_plan_id
		}
	}
`;
export type RemovePromotionPlanMutationFn = Apollo.MutationFunction<RemovePromotionPlanMutation, RemovePromotionPlanMutationVariables>;

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
export function useRemovePromotionPlanMutation(baseOptions?: Apollo.MutationHookOptions<RemovePromotionPlanMutation, RemovePromotionPlanMutationVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<RemovePromotionPlanMutation, RemovePromotionPlanMutationVariables>(RemovePromotionPlanDocument, options);
}
export type RemovePromotionPlanMutationHookResult = ReturnType<typeof useRemovePromotionPlanMutation>;
export type RemovePromotionPlanMutationResult = Apollo.MutationResult<RemovePromotionPlanMutation>;
export type RemovePromotionPlanMutationOptions = Apollo.BaseMutationOptions<RemovePromotionPlanMutation, RemovePromotionPlanMutationVariables>;
export const FindUniqueUserWhereUserIdEqualsDocument = gql`
	query FindUniqueUserWhereUserIdEquals($where: UserWhereUniqueInput!) {
		findUniqueUser(where: $where) {
			...userInfoFields
			ads {
				...adFields
				ad_auto {
					...adAutoFields
				}
			}
		}
	}
	${UserInfoFieldsFragmentDoc}
	${AdFieldsFragmentDoc}
	${AdAutoFieldsFragmentDoc}
`;

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
export function useFindUniqueUserWhereUserIdEqualsQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueUserWhereUserIdEqualsQuery, FindUniqueUserWhereUserIdEqualsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindUniqueUserWhereUserIdEqualsQuery, FindUniqueUserWhereUserIdEqualsQueryVariables>(FindUniqueUserWhereUserIdEqualsDocument, options);
}
export function useFindUniqueUserWhereUserIdEqualsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueUserWhereUserIdEqualsQuery, FindUniqueUserWhereUserIdEqualsQueryVariables>,
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindUniqueUserWhereUserIdEqualsQuery, FindUniqueUserWhereUserIdEqualsQueryVariables>(FindUniqueUserWhereUserIdEqualsDocument, options);
}
export type FindUniqueUserWhereUserIdEqualsQueryHookResult = ReturnType<typeof useFindUniqueUserWhereUserIdEqualsQuery>;
export type FindUniqueUserWhereUserIdEqualsLazyQueryHookResult = ReturnType<typeof useFindUniqueUserWhereUserIdEqualsLazyQuery>;
export type FindUniqueUserWhereUserIdEqualsQueryResult = Apollo.QueryResult<FindUniqueUserWhereUserIdEqualsQuery, FindUniqueUserWhereUserIdEqualsQueryVariables>;
export const FindAllUsersDocument = gql`
	query FindAllUsers($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $cursor: UserWhereUniqueInput, $take: Int, $skip: Int) {
		findAllUsers(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take, skip: $skip) {
			...userInfoFields
			ads {
				...adFields
				ad_auto {
					...adAutoFields
				}
			}
		}
	}
	${UserInfoFieldsFragmentDoc}
	${AdFieldsFragmentDoc}
	${AdAutoFieldsFragmentDoc}
`;

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
export function useFindAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
}
export function useFindAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUsersQuery, FindAllUsersQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<FindAllUsersQuery, FindAllUsersQueryVariables>(FindAllUsersDocument, options);
}
export type FindAllUsersQueryHookResult = ReturnType<typeof useFindAllUsersQuery>;
export type FindAllUsersLazyQueryHookResult = ReturnType<typeof useFindAllUsersLazyQuery>;
export type FindAllUsersQueryResult = Apollo.QueryResult<FindAllUsersQuery, FindAllUsersQueryVariables>;
export type AdKeySpecifier = (
	| 'AdPromotion'
	| 'ListAd'
	| '_count'
	| 'ad_auto'
	| 'ad_categories'
	| 'ad_house'
	| 'ad_id'
	| 'address'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'created_at'
	| 'deleted_at'
	| 'files'
	| 'is_sold'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user'
	| 'user_sub'
	| AdKeySpecifier
)[];
export type AdFieldPolicy = {
	AdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	ListAd?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_auto?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_categories?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_house?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	files?: FieldPolicy<any> | FieldReadFunction<any>;
	is_sold?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdAutoKeySpecifier = (
	| 'ad'
	| 'ad_auto_id'
	| 'ad_id'
	| 'battery_capacity_kwh'
	| 'body_type'
	| 'body_type_cid'
	| 'color_exterior'
	| 'color_exterior_cid'
	| 'color_interior'
	| 'color_interior_cid'
	| 'condition_type'
	| 'condition_type_cid'
	| 'conditioning'
	| 'conditioning_cid'
	| 'doors_num'
	| 'emission_class'
	| 'emission_class_cid'
	| 'engine_displacement_cm3'
	| 'fuel_type'
	| 'fuel_type_cid'
	| 'is_first_owner'
	| 'is_service_book_available'
	| 'is_vehicle_garaged'
	| 'km'
	| 'make'
	| 'make_cid'
	| 'model'
	| 'model_cid'
	| 'power_kw'
	| 'registered_until'
	| 'seats_num'
	| 'transmission_type'
	| 'transmission_type_cid'
	| 'variant'
	| 'variant_cid'
	| 'vehicle_type'
	| 'vehicle_type_cid'
	| 'year'
	| AdAutoKeySpecifier
)[];
export type AdAutoFieldPolicy = {
	ad?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_auto_id?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	battery_capacity_kwh?: FieldPolicy<any> | FieldReadFunction<any>;
	body_type?: FieldPolicy<any> | FieldReadFunction<any>;
	body_type_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	color_exterior?: FieldPolicy<any> | FieldReadFunction<any>;
	color_exterior_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	color_interior?: FieldPolicy<any> | FieldReadFunction<any>;
	color_interior_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	condition_type?: FieldPolicy<any> | FieldReadFunction<any>;
	condition_type_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	conditioning?: FieldPolicy<any> | FieldReadFunction<any>;
	conditioning_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	doors_num?: FieldPolicy<any> | FieldReadFunction<any>;
	emission_class?: FieldPolicy<any> | FieldReadFunction<any>;
	emission_class_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	engine_displacement_cm3?: FieldPolicy<any> | FieldReadFunction<any>;
	fuel_type?: FieldPolicy<any> | FieldReadFunction<any>;
	fuel_type_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	is_first_owner?: FieldPolicy<any> | FieldReadFunction<any>;
	is_service_book_available?: FieldPolicy<any> | FieldReadFunction<any>;
	is_vehicle_garaged?: FieldPolicy<any> | FieldReadFunction<any>;
	km?: FieldPolicy<any> | FieldReadFunction<any>;
	make?: FieldPolicy<any> | FieldReadFunction<any>;
	make_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	model?: FieldPolicy<any> | FieldReadFunction<any>;
	model_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	power_kw?: FieldPolicy<any> | FieldReadFunction<any>;
	registered_until?: FieldPolicy<any> | FieldReadFunction<any>;
	seats_num?: FieldPolicy<any> | FieldReadFunction<any>;
	transmission_type?: FieldPolicy<any> | FieldReadFunction<any>;
	transmission_type_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	variant?: FieldPolicy<any> | FieldReadFunction<any>;
	variant_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	vehicle_type?: FieldPolicy<any> | FieldReadFunction<any>;
	vehicle_type_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	year?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdAvgAggregateKeySpecifier = (
	| 'ad_id'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| AdAvgAggregateKeySpecifier
)[];
export type AdAvgAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdCategoryKeySpecifier = ('ad' | 'ad_id' | 'category' | 'category_id' | AdCategoryKeySpecifier)[];
export type AdCategoryFieldPolicy = {
	ad?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	category?: FieldPolicy<any> | FieldReadFunction<any>;
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdCountKeySpecifier = ('AdPromotion' | 'ListAd' | 'ad_categories' | 'files' | AdCountKeySpecifier)[];
export type AdCountFieldPolicy = {
	AdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	ListAd?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_categories?: FieldPolicy<any> | FieldReadFunction<any>;
	files?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdCountAggregateKeySpecifier = (
	| '_all'
	| 'ad_id'
	| 'address'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'created_at'
	| 'deleted_at'
	| 'is_sold'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| AdCountAggregateKeySpecifier
)[];
export type AdCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	is_sold?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdGroupByKeySpecifier = (
	| '_avg'
	| '_count'
	| '_max'
	| '_min'
	| '_sum'
	| 'ad_id'
	| 'address'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'created_at'
	| 'deleted_at'
	| 'is_sold'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| AdGroupByKeySpecifier
)[];
export type AdGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	_max?: FieldPolicy<any> | FieldReadFunction<any>;
	_min?: FieldPolicy<any> | FieldReadFunction<any>;
	_sum?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	is_sold?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdHouseKeySpecifier = ('ad' | 'ad_house_id' | 'ad_id' | 'meters' | AdHouseKeySpecifier)[];
export type AdHouseFieldPolicy = {
	ad?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_house_id?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	meters?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdMaxAggregateKeySpecifier = (
	| 'ad_id'
	| 'address'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'created_at'
	| 'deleted_at'
	| 'is_sold'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| AdMaxAggregateKeySpecifier
)[];
export type AdMaxAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	is_sold?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdMinAggregateKeySpecifier = (
	| 'ad_id'
	| 'address'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'created_at'
	| 'deleted_at'
	| 'is_sold'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| AdMinAggregateKeySpecifier
)[];
export type AdMinAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	is_sold?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPriceKeySpecifier = ('price_eurocent' | AdPriceKeySpecifier)[];
export type AdPriceFieldPolicy = {
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPromotionKeySpecifier = (
	| 'ad'
	| 'ad_id'
	| 'promotion_plan'
	| 'promotion_plan_id'
	| 'transaction_id'
	| 'user'
	| 'user_sub'
	| 'valid_from'
	| 'valid_to'
	| AdPromotionKeySpecifier
)[];
export type AdPromotionFieldPolicy = {
	ad?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPromotionAvgAggregateKeySpecifier = ('ad_id' | 'promotion_plan_id' | AdPromotionAvgAggregateKeySpecifier)[];
export type AdPromotionAvgAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPromotionCountAggregateKeySpecifier = (
	| '_all'
	| 'ad_id'
	| 'promotion_plan_id'
	| 'transaction_id'
	| 'user_sub'
	| 'valid_from'
	| 'valid_to'
	| AdPromotionCountAggregateKeySpecifier
)[];
export type AdPromotionCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPromotionMaxAggregateKeySpecifier = (
	| 'ad_id'
	| 'promotion_plan_id'
	| 'transaction_id'
	| 'user_sub'
	| 'valid_from'
	| 'valid_to'
	| AdPromotionMaxAggregateKeySpecifier
)[];
export type AdPromotionMaxAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPromotionMinAggregateKeySpecifier = (
	| 'ad_id'
	| 'promotion_plan_id'
	| 'transaction_id'
	| 'user_sub'
	| 'valid_from'
	| 'valid_to'
	| AdPromotionMinAggregateKeySpecifier
)[];
export type AdPromotionMinAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdPromotionSumAggregateKeySpecifier = ('ad_id' | 'promotion_plan_id' | AdPromotionSumAggregateKeySpecifier)[];
export type AdPromotionSumAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AdSumAggregateKeySpecifier = (
	| 'ad_id'
	| 'coords_latitude'
	| 'coords_longitude'
	| 'coords_radius'
	| 'moderation_flag'
	| 'price_eurocent'
	| 'price_rating'
	| AdSumAggregateKeySpecifier
)[];
export type AdSumAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_latitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_longitude?: FieldPolicy<any> | FieldReadFunction<any>;
	coords_radius?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	price_eurocent?: FieldPolicy<any> | FieldReadFunction<any>;
	price_rating?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AggregateAdKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateAdKeySpecifier)[];
export type AggregateAdFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	_max?: FieldPolicy<any> | FieldReadFunction<any>;
	_min?: FieldPolicy<any> | FieldReadFunction<any>;
	_sum?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AggregateCategoryKeySpecifier = ('_avg' | '_count' | '_max' | '_min' | '_sum' | AggregateCategoryKeySpecifier)[];
export type AggregateCategoryFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	_max?: FieldPolicy<any> | FieldReadFunction<any>;
	_min?: FieldPolicy<any> | FieldReadFunction<any>;
	_sum?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BlogKeySpecifier = (
	| 'blog_id'
	| 'created_at'
	| 'deleted_at'
	| 'language'
	| 'language_cid'
	| 'moderation_flag'
	| 'slug'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user'
	| 'user_sub'
	| BlogKeySpecifier
)[];
export type BlogFieldPolicy = {
	blog_id?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	language?: FieldPolicy<any> | FieldReadFunction<any>;
	language_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BlogAvgAggregateKeySpecifier = ('blog_id' | 'language_cid' | 'moderation_flag' | BlogAvgAggregateKeySpecifier)[];
export type BlogAvgAggregateFieldPolicy = {
	blog_id?: FieldPolicy<any> | FieldReadFunction<any>;
	language_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BlogCountAggregateKeySpecifier = (
	| '_all'
	| 'blog_id'
	| 'created_at'
	| 'deleted_at'
	| 'language_cid'
	| 'moderation_flag'
	| 'slug'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| BlogCountAggregateKeySpecifier
)[];
export type BlogCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	blog_id?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	language_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BlogMaxAggregateKeySpecifier = (
	| 'blog_id'
	| 'created_at'
	| 'deleted_at'
	| 'language_cid'
	| 'moderation_flag'
	| 'slug'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| BlogMaxAggregateKeySpecifier
)[];
export type BlogMaxAggregateFieldPolicy = {
	blog_id?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	language_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BlogMinAggregateKeySpecifier = (
	| 'blog_id'
	| 'created_at'
	| 'deleted_at'
	| 'language_cid'
	| 'moderation_flag'
	| 'slug'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'user_sub'
	| BlogMinAggregateKeySpecifier
)[];
export type BlogMinAggregateFieldPolicy = {
	blog_id?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	language_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	slug?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type BlogSumAggregateKeySpecifier = ('blog_id' | 'language_cid' | 'moderation_flag' | BlogSumAggregateKeySpecifier)[];
export type BlogSumAggregateFieldPolicy = {
	blog_id?: FieldPolicy<any> | FieldReadFunction<any>;
	language_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
	| 'AdAutoBodyType'
	| 'AdAutoColorExterior'
	| 'AdAutoColorInterior'
	| 'AdAutoConditionType'
	| 'AdAutoConditioning'
	| 'AdAutoEmissionClass'
	| 'AdAutoFuelType'
	| 'AdAutoMake'
	| 'AdAutoModel'
	| 'AdAutoTransmissionType'
	| 'AdAutoVariant'
	| 'AdAutoVehicleType'
	| 'Language'
	| 'PromotionRegion'
	| '_count'
	| 'ad_categories'
	| 'category_id'
	| 'children'
	| 'code'
	| 'created_at'
	| 'deleted_at'
	| 'icon'
	| 'name'
	| 'parent'
	| 'parent_category_id'
	| 'updated_at'
	| 'weight'
	| CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
	AdAutoBodyType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoColorExterior?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoColorInterior?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoConditionType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoConditioning?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoEmissionClass?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoFuelType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoMake?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoModel?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoTransmissionType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoVariant?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoVehicleType?: FieldPolicy<any> | FieldReadFunction<any>;
	Language?: FieldPolicy<any> | FieldReadFunction<any>;
	PromotionRegion?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_categories?: FieldPolicy<any> | FieldReadFunction<any>;
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	children?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	icon?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	parent?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryAvgAggregateKeySpecifier = ('category_id' | 'parent_category_id' | 'weight' | CategoryAvgAggregateKeySpecifier)[];
export type CategoryAvgAggregateFieldPolicy = {
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryCountKeySpecifier = (
	| 'AdAutoBodyType'
	| 'AdAutoColorExterior'
	| 'AdAutoColorInterior'
	| 'AdAutoConditionType'
	| 'AdAutoConditioning'
	| 'AdAutoEmissionClass'
	| 'AdAutoFuelType'
	| 'AdAutoMake'
	| 'AdAutoModel'
	| 'AdAutoTransmissionType'
	| 'AdAutoVariant'
	| 'AdAutoVehicleType'
	| 'Language'
	| 'PromotionRegion'
	| 'ad_categories'
	| 'children'
	| CategoryCountKeySpecifier
)[];
export type CategoryCountFieldPolicy = {
	AdAutoBodyType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoColorExterior?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoColorInterior?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoConditionType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoConditioning?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoEmissionClass?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoFuelType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoMake?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoModel?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoTransmissionType?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoVariant?: FieldPolicy<any> | FieldReadFunction<any>;
	AdAutoVehicleType?: FieldPolicy<any> | FieldReadFunction<any>;
	Language?: FieldPolicy<any> | FieldReadFunction<any>;
	PromotionRegion?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_categories?: FieldPolicy<any> | FieldReadFunction<any>;
	children?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryCountAggregateKeySpecifier = (
	| '_all'
	| 'category_id'
	| 'code'
	| 'created_at'
	| 'deleted_at'
	| 'icon'
	| 'name'
	| 'parent_category_id'
	| 'updated_at'
	| 'weight'
	| CategoryCountAggregateKeySpecifier
)[];
export type CategoryCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	icon?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryGroupByKeySpecifier = (
	| '_avg'
	| '_count'
	| '_max'
	| '_min'
	| '_sum'
	| 'category_id'
	| 'code'
	| 'created_at'
	| 'deleted_at'
	| 'icon'
	| 'name'
	| 'parent_category_id'
	| 'updated_at'
	| 'weight'
	| CategoryGroupByKeySpecifier
)[];
export type CategoryGroupByFieldPolicy = {
	_avg?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	_max?: FieldPolicy<any> | FieldReadFunction<any>;
	_min?: FieldPolicy<any> | FieldReadFunction<any>;
	_sum?: FieldPolicy<any> | FieldReadFunction<any>;
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	icon?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryMaxAggregateKeySpecifier = (
	| 'category_id'
	| 'code'
	| 'created_at'
	| 'deleted_at'
	| 'icon'
	| 'name'
	| 'parent_category_id'
	| 'updated_at'
	| 'weight'
	| CategoryMaxAggregateKeySpecifier
)[];
export type CategoryMaxAggregateFieldPolicy = {
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	icon?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryMinAggregateKeySpecifier = (
	| 'category_id'
	| 'code'
	| 'created_at'
	| 'deleted_at'
	| 'icon'
	| 'name'
	| 'parent_category_id'
	| 'updated_at'
	| 'weight'
	| CategoryMinAggregateKeySpecifier
)[];
export type CategoryMinAggregateFieldPolicy = {
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	icon?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategorySumAggregateKeySpecifier = ('category_id' | 'parent_category_id' | 'weight' | CategorySumAggregateKeySpecifier)[];
export type CategorySumAggregateFieldPolicy = {
	category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_category_id?: FieldPolicy<any> | FieldReadFunction<any>;
	weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileKeySpecifier = ('ad' | 'ad_id' | 'code' | 'file_id' | 'filename' | 'filesize' | 'path' | 'user' | 'user_sub' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	ad?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	file_id?: FieldPolicy<any> | FieldReadFunction<any>;
	filename?: FieldPolicy<any> | FieldReadFunction<any>;
	filesize?: FieldPolicy<any> | FieldReadFunction<any>;
	path?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileAvgAggregateKeySpecifier = ('ad_id' | 'file_id' | 'filesize' | FileAvgAggregateKeySpecifier)[];
export type FileAvgAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	file_id?: FieldPolicy<any> | FieldReadFunction<any>;
	filesize?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileCountAggregateKeySpecifier = ('_all' | 'ad_id' | 'code' | 'file_id' | 'filename' | 'filesize' | 'path' | 'user_sub' | FileCountAggregateKeySpecifier)[];
export type FileCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	file_id?: FieldPolicy<any> | FieldReadFunction<any>;
	filename?: FieldPolicy<any> | FieldReadFunction<any>;
	filesize?: FieldPolicy<any> | FieldReadFunction<any>;
	path?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileMaxAggregateKeySpecifier = ('ad_id' | 'code' | 'file_id' | 'filename' | 'filesize' | 'path' | 'user_sub' | FileMaxAggregateKeySpecifier)[];
export type FileMaxAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	file_id?: FieldPolicy<any> | FieldReadFunction<any>;
	filename?: FieldPolicy<any> | FieldReadFunction<any>;
	filesize?: FieldPolicy<any> | FieldReadFunction<any>;
	path?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileMinAggregateKeySpecifier = ('ad_id' | 'code' | 'file_id' | 'filename' | 'filesize' | 'path' | 'user_sub' | FileMinAggregateKeySpecifier)[];
export type FileMinAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	code?: FieldPolicy<any> | FieldReadFunction<any>;
	file_id?: FieldPolicy<any> | FieldReadFunction<any>;
	filename?: FieldPolicy<any> | FieldReadFunction<any>;
	filesize?: FieldPolicy<any> | FieldReadFunction<any>;
	path?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileSumAggregateKeySpecifier = ('ad_id' | 'file_id' | 'filesize' | FileSumAggregateKeySpecifier)[];
export type FileSumAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	file_id?: FieldPolicy<any> | FieldReadFunction<any>;
	filesize?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListKeySpecifier = (
	| 'ListAd'
	| '_count'
	| 'is_notifiable_by_email'
	| 'is_notifiable_by_push'
	| 'is_notifiable_by_sms'
	| 'list_id'
	| 'list_type'
	| 'search_params'
	| 'title'
	| 'user'
	| 'user_sub'
	| ListKeySpecifier
)[];
export type ListFieldPolicy = {
	ListAd?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_email?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_push?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_sms?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_type?: FieldPolicy<any> | FieldReadFunction<any>;
	search_params?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAdKeySpecifier = ('ad' | 'ad_id' | 'list' | 'list_id' | ListAdKeySpecifier)[];
export type ListAdFieldPolicy = {
	ad?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAdAvgAggregateKeySpecifier = ('ad_id' | 'list_id' | ListAdAvgAggregateKeySpecifier)[];
export type ListAdAvgAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAdCountAggregateKeySpecifier = ('_all' | 'ad_id' | 'list_id' | ListAdCountAggregateKeySpecifier)[];
export type ListAdCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAdMaxAggregateKeySpecifier = ('ad_id' | 'list_id' | ListAdMaxAggregateKeySpecifier)[];
export type ListAdMaxAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAdMinAggregateKeySpecifier = ('ad_id' | 'list_id' | ListAdMinAggregateKeySpecifier)[];
export type ListAdMinAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAdSumAggregateKeySpecifier = ('ad_id' | 'list_id' | ListAdSumAggregateKeySpecifier)[];
export type ListAdSumAggregateFieldPolicy = {
	ad_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListAvgAggregateKeySpecifier = ('list_id' | 'list_type' | ListAvgAggregateKeySpecifier)[];
export type ListAvgAggregateFieldPolicy = {
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListCountKeySpecifier = ('ListAd' | ListCountKeySpecifier)[];
export type ListCountFieldPolicy = {
	ListAd?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListCountAggregateKeySpecifier = (
	| '_all'
	| 'is_notifiable_by_email'
	| 'is_notifiable_by_push'
	| 'is_notifiable_by_sms'
	| 'list_id'
	| 'list_type'
	| 'search_params'
	| 'title'
	| 'user_sub'
	| ListCountAggregateKeySpecifier
)[];
export type ListCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_email?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_push?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_sms?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_type?: FieldPolicy<any> | FieldReadFunction<any>;
	search_params?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListMaxAggregateKeySpecifier = (
	| 'is_notifiable_by_email'
	| 'is_notifiable_by_push'
	| 'is_notifiable_by_sms'
	| 'list_id'
	| 'list_type'
	| 'search_params'
	| 'title'
	| 'user_sub'
	| ListMaxAggregateKeySpecifier
)[];
export type ListMaxAggregateFieldPolicy = {
	is_notifiable_by_email?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_push?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_sms?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_type?: FieldPolicy<any> | FieldReadFunction<any>;
	search_params?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListMinAggregateKeySpecifier = (
	| 'is_notifiable_by_email'
	| 'is_notifiable_by_push'
	| 'is_notifiable_by_sms'
	| 'list_id'
	| 'list_type'
	| 'search_params'
	| 'title'
	| 'user_sub'
	| ListMinAggregateKeySpecifier
)[];
export type ListMinAggregateFieldPolicy = {
	is_notifiable_by_email?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_push?: FieldPolicy<any> | FieldReadFunction<any>;
	is_notifiable_by_sms?: FieldPolicy<any> | FieldReadFunction<any>;
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_type?: FieldPolicy<any> | FieldReadFunction<any>;
	search_params?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListSumAggregateKeySpecifier = ('list_id' | 'list_type' | ListSumAggregateKeySpecifier)[];
export type ListSumAggregateFieldPolicy = {
	list_id?: FieldPolicy<any> | FieldReadFunction<any>;
	list_type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MessagingChannelKeySpecifier = (
	| 'address'
	| 'created_at'
	| 'deleted_at'
	| 'device_type'
	| 'messaging_channel_id'
	| 'platform'
	| 'updated_at'
	| 'user'
	| 'user_sub'
	| MessagingChannelKeySpecifier
)[];
export type MessagingChannelFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	device_type?: FieldPolicy<any> | FieldReadFunction<any>;
	messaging_channel_id?: FieldPolicy<any> | FieldReadFunction<any>;
	platform?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MessagingChannelAvgAggregateKeySpecifier = ('device_type' | 'messaging_channel_id' | MessagingChannelAvgAggregateKeySpecifier)[];
export type MessagingChannelAvgAggregateFieldPolicy = {
	device_type?: FieldPolicy<any> | FieldReadFunction<any>;
	messaging_channel_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MessagingChannelCountAggregateKeySpecifier = (
	| '_all'
	| 'address'
	| 'created_at'
	| 'deleted_at'
	| 'device_type'
	| 'messaging_channel_id'
	| 'platform'
	| 'updated_at'
	| 'user_sub'
	| MessagingChannelCountAggregateKeySpecifier
)[];
export type MessagingChannelCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	device_type?: FieldPolicy<any> | FieldReadFunction<any>;
	messaging_channel_id?: FieldPolicy<any> | FieldReadFunction<any>;
	platform?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MessagingChannelMaxAggregateKeySpecifier = (
	| 'address'
	| 'created_at'
	| 'deleted_at'
	| 'device_type'
	| 'messaging_channel_id'
	| 'platform'
	| 'updated_at'
	| 'user_sub'
	| MessagingChannelMaxAggregateKeySpecifier
)[];
export type MessagingChannelMaxAggregateFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	device_type?: FieldPolicy<any> | FieldReadFunction<any>;
	messaging_channel_id?: FieldPolicy<any> | FieldReadFunction<any>;
	platform?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MessagingChannelMinAggregateKeySpecifier = (
	| 'address'
	| 'created_at'
	| 'deleted_at'
	| 'device_type'
	| 'messaging_channel_id'
	| 'platform'
	| 'updated_at'
	| 'user_sub'
	| MessagingChannelMinAggregateKeySpecifier
)[];
export type MessagingChannelMinAggregateFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	device_type?: FieldPolicy<any> | FieldReadFunction<any>;
	messaging_channel_id?: FieldPolicy<any> | FieldReadFunction<any>;
	platform?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MessagingChannelSumAggregateKeySpecifier = ('device_type' | 'messaging_channel_id' | MessagingChannelSumAggregateKeySpecifier)[];
export type MessagingChannelSumAggregateFieldPolicy = {
	device_type?: FieldPolicy<any> | FieldReadFunction<any>;
	messaging_channel_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
	| 'addToFavorites'
	| 'adminUpdateAd'
	| 'adminUpdateBlog'
	| 'adminUpdateUser'
	| 'createAd'
	| 'createAdPromotion'
	| 'createBlog'
	| 'createCategory'
	| 'createList'
	| 'createListAd'
	| 'createMessagingChannel'
	| 'createPromotionPlan'
	| 'createUser'
	| 'createUserPromotion'
	| 'removeAd'
	| 'removeBlog'
	| 'removeCategory'
	| 'removeList'
	| 'removeListAd'
	| 'removeMessagingChannel'
	| 'removePromotionPlan'
	| 'removeUser'
	| 'updateAd'
	| 'updateBlog'
	| 'updateCategory'
	| 'updateList'
	| 'updateManyCategories'
	| 'updateMessagingChannel'
	| 'updatePromotionPlan'
	| 'updateUser'
	| MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
	addToFavorites?: FieldPolicy<any> | FieldReadFunction<any>;
	adminUpdateAd?: FieldPolicy<any> | FieldReadFunction<any>;
	adminUpdateBlog?: FieldPolicy<any> | FieldReadFunction<any>;
	adminUpdateUser?: FieldPolicy<any> | FieldReadFunction<any>;
	createAd?: FieldPolicy<any> | FieldReadFunction<any>;
	createAdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	createBlog?: FieldPolicy<any> | FieldReadFunction<any>;
	createCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	createList?: FieldPolicy<any> | FieldReadFunction<any>;
	createListAd?: FieldPolicy<any> | FieldReadFunction<any>;
	createMessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	createPromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	createUser?: FieldPolicy<any> | FieldReadFunction<any>;
	createUserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	removeAd?: FieldPolicy<any> | FieldReadFunction<any>;
	removeBlog?: FieldPolicy<any> | FieldReadFunction<any>;
	removeCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	removeList?: FieldPolicy<any> | FieldReadFunction<any>;
	removeListAd?: FieldPolicy<any> | FieldReadFunction<any>;
	removeMessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	removePromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	removeUser?: FieldPolicy<any> | FieldReadFunction<any>;
	updateAd?: FieldPolicy<any> | FieldReadFunction<any>;
	updateBlog?: FieldPolicy<any> | FieldReadFunction<any>;
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	updateList?: FieldPolicy<any> | FieldReadFunction<any>;
	updateManyCategories?: FieldPolicy<any> | FieldReadFunction<any>;
	updateMessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	updatePromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanKeySpecifier = (
	| 'AdPromotion'
	| 'ChildPromotionPlan'
	| 'ParentPromotionPlan'
	| 'UserPromotion'
	| '_count'
	| 'created_at'
	| 'deleted_at'
	| 'price'
	| 'promotion_plan_id'
	| 'promotion_plan_type'
	| 'promotion_region'
	| 'promotion_region_cid'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'validity_period'
	| PromotionPlanKeySpecifier
)[];
export type PromotionPlanFieldPolicy = {
	AdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	ChildPromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	ParentPromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	UserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	price?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_type?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	validity_period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanAvgAggregateKeySpecifier = (
	| 'price'
	| 'promotion_plan_id'
	| 'promotion_plan_type'
	| 'promotion_region_cid'
	| 'validity_period'
	| PromotionPlanAvgAggregateKeySpecifier
)[];
export type PromotionPlanAvgAggregateFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_type?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	validity_period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanCountKeySpecifier = ('AdPromotion' | 'ChildPromotionPlan' | 'ParentPromotionPlan' | 'UserPromotion' | PromotionPlanCountKeySpecifier)[];
export type PromotionPlanCountFieldPolicy = {
	AdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	ChildPromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	ParentPromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	UserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanCountAggregateKeySpecifier = (
	| '_all'
	| 'created_at'
	| 'deleted_at'
	| 'price'
	| 'promotion_plan_id'
	| 'promotion_plan_type'
	| 'promotion_region_cid'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'validity_period'
	| PromotionPlanCountAggregateKeySpecifier
)[];
export type PromotionPlanCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	price?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_type?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	validity_period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanMaxAggregateKeySpecifier = (
	| 'created_at'
	| 'deleted_at'
	| 'price'
	| 'promotion_plan_id'
	| 'promotion_plan_type'
	| 'promotion_region_cid'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'validity_period'
	| PromotionPlanMaxAggregateKeySpecifier
)[];
export type PromotionPlanMaxAggregateFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	price?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_type?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	validity_period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanMinAggregateKeySpecifier = (
	| 'created_at'
	| 'deleted_at'
	| 'price'
	| 'promotion_plan_id'
	| 'promotion_plan_type'
	| 'promotion_region_cid'
	| 'text'
	| 'title'
	| 'updated_at'
	| 'validity_period'
	| PromotionPlanMinAggregateKeySpecifier
)[];
export type PromotionPlanMinAggregateFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>;
	deleted_at?: FieldPolicy<any> | FieldReadFunction<any>;
	price?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_type?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	text?: FieldPolicy<any> | FieldReadFunction<any>;
	title?: FieldPolicy<any> | FieldReadFunction<any>;
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>;
	validity_period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanRelationKeySpecifier = (
	| 'child_promotion_plan'
	| 'child_promotion_plan_id'
	| 'count'
	| 'parent_promotion_plan'
	| 'parent_promotion_plan_id'
	| 'reccurence'
	| PromotionPlanRelationKeySpecifier
)[];
export type PromotionPlanRelationFieldPolicy = {
	child_promotion_plan?: FieldPolicy<any> | FieldReadFunction<any>;
	child_promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	count?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_promotion_plan?: FieldPolicy<any> | FieldReadFunction<any>;
	parent_promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	reccurence?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PromotionPlanSumAggregateKeySpecifier = (
	| 'price'
	| 'promotion_plan_id'
	| 'promotion_plan_type'
	| 'promotion_region_cid'
	| 'validity_period'
	| PromotionPlanSumAggregateKeySpecifier
)[];
export type PromotionPlanSumAggregateFieldPolicy = {
	price?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_type?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_region_cid?: FieldPolicy<any> | FieldReadFunction<any>;
	validity_period?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
	| 'aggregateAds'
	| 'aggregateCategories'
	| 'estimateAdPrice'
	| 'findAllAdPromotions'
	| 'findAllAds'
	| 'findAllBlogs'
	| 'findAllCategories'
	| 'findAllMessagingChannels'
	| 'findAllPromotionPlans'
	| 'findAllUserPromotions'
	| 'findAllUsers'
	| 'findFirstMessagingChannel'
	| 'findFirstPromotionPlan'
	| 'findMyLists'
	| 'findOneAd'
	| 'findOneAdPromotion'
	| 'findOneBlog'
	| 'findOneCategory'
	| 'findOneList'
	| 'findOneUser'
	| 'findOneUserPromotion'
	| 'findUniqueAd'
	| 'findUniqueAdPromotion'
	| 'findUniqueBlog'
	| 'findUniqueCategory'
	| 'findUniqueMessagingChannel'
	| 'findUniquePromotionPlan'
	| 'findUniqueUser'
	| 'findUniqueUserPromotion'
	| 'getSASToken'
	| 'groupByAds'
	| 'groupByCategories'
	| QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
	aggregateAds?: FieldPolicy<any> | FieldReadFunction<any>;
	aggregateCategories?: FieldPolicy<any> | FieldReadFunction<any>;
	estimateAdPrice?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllAdPromotions?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllAds?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllBlogs?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllCategories?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllMessagingChannels?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllPromotionPlans?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllUserPromotions?: FieldPolicy<any> | FieldReadFunction<any>;
	findAllUsers?: FieldPolicy<any> | FieldReadFunction<any>;
	findFirstMessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	findFirstPromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	findMyLists?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneAd?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneAdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneBlog?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneList?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneUser?: FieldPolicy<any> | FieldReadFunction<any>;
	findOneUserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueAd?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueAdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueBlog?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueCategory?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueMessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniquePromotionPlan?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueUser?: FieldPolicy<any> | FieldReadFunction<any>;
	findUniqueUserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	getSASToken?: FieldPolicy<any> | FieldReadFunction<any>;
	groupByAds?: FieldPolicy<any> | FieldReadFunction<any>;
	groupByCategories?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SasTokenKeySpecifier = ('blobName' | 'expiresOn' | 'startsOn' | 'url' | SasTokenKeySpecifier)[];
export type SasTokenFieldPolicy = {
	blobName?: FieldPolicy<any> | FieldReadFunction<any>;
	expiresOn?: FieldPolicy<any> | FieldReadFunction<any>;
	startsOn?: FieldPolicy<any> | FieldReadFunction<any>;
	url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
	| 'AdPromotion'
	| 'MessagingChannel'
	| 'UserPromotion'
	| '_count'
	| 'ads'
	| 'blogs'
	| 'files'
	| 'lists'
	| 'moderation_flag'
	| 'name'
	| 'user_sub'
	| UserKeySpecifier
)[];
export type UserFieldPolicy = {
	AdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	MessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	UserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	_count?: FieldPolicy<any> | FieldReadFunction<any>;
	ads?: FieldPolicy<any> | FieldReadFunction<any>;
	blogs?: FieldPolicy<any> | FieldReadFunction<any>;
	files?: FieldPolicy<any> | FieldReadFunction<any>;
	lists?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAvgAggregateKeySpecifier = ('moderation_flag' | UserAvgAggregateKeySpecifier)[];
export type UserAvgAggregateFieldPolicy = {
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserCountKeySpecifier = ('AdPromotion' | 'MessagingChannel' | 'UserPromotion' | 'ads' | 'blogs' | 'files' | 'lists' | UserCountKeySpecifier)[];
export type UserCountFieldPolicy = {
	AdPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	MessagingChannel?: FieldPolicy<any> | FieldReadFunction<any>;
	UserPromotion?: FieldPolicy<any> | FieldReadFunction<any>;
	ads?: FieldPolicy<any> | FieldReadFunction<any>;
	blogs?: FieldPolicy<any> | FieldReadFunction<any>;
	files?: FieldPolicy<any> | FieldReadFunction<any>;
	lists?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserCountAggregateKeySpecifier = ('_all' | 'moderation_flag' | 'name' | 'user_sub' | UserCountAggregateKeySpecifier)[];
export type UserCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserMaxAggregateKeySpecifier = ('moderation_flag' | 'name' | 'user_sub' | UserMaxAggregateKeySpecifier)[];
export type UserMaxAggregateFieldPolicy = {
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserMinAggregateKeySpecifier = ('moderation_flag' | 'name' | 'user_sub' | UserMinAggregateKeySpecifier)[];
export type UserMinAggregateFieldPolicy = {
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
	name?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPromotionKeySpecifier = ('promotion_plan' | 'promotion_plan_id' | 'transaction_id' | 'user' | 'user_sub' | 'valid_from' | 'valid_to' | UserPromotionKeySpecifier)[];
export type UserPromotionFieldPolicy = {
	promotion_plan?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPromotionAvgAggregateKeySpecifier = ('promotion_plan_id' | UserPromotionAvgAggregateKeySpecifier)[];
export type UserPromotionAvgAggregateFieldPolicy = {
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPromotionCountAggregateKeySpecifier = (
	| '_all'
	| 'promotion_plan_id'
	| 'transaction_id'
	| 'user_sub'
	| 'valid_from'
	| 'valid_to'
	| UserPromotionCountAggregateKeySpecifier
)[];
export type UserPromotionCountAggregateFieldPolicy = {
	_all?: FieldPolicy<any> | FieldReadFunction<any>;
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPromotionMaxAggregateKeySpecifier = ('promotion_plan_id' | 'transaction_id' | 'user_sub' | 'valid_from' | 'valid_to' | UserPromotionMaxAggregateKeySpecifier)[];
export type UserPromotionMaxAggregateFieldPolicy = {
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPromotionMinAggregateKeySpecifier = ('promotion_plan_id' | 'transaction_id' | 'user_sub' | 'valid_from' | 'valid_to' | UserPromotionMinAggregateKeySpecifier)[];
export type UserPromotionMinAggregateFieldPolicy = {
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>;
	user_sub?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_from?: FieldPolicy<any> | FieldReadFunction<any>;
	valid_to?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserPromotionSumAggregateKeySpecifier = ('promotion_plan_id' | UserPromotionSumAggregateKeySpecifier)[];
export type UserPromotionSumAggregateFieldPolicy = {
	promotion_plan_id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserSumAggregateKeySpecifier = ('moderation_flag' | UserSumAggregateKeySpecifier)[];
export type UserSumAggregateFieldPolicy = {
	moderation_flag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
	Ad?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdKeySpecifier | (() => undefined | AdKeySpecifier);
		fields?: AdFieldPolicy;
	};
	AdAuto?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdAutoKeySpecifier | (() => undefined | AdAutoKeySpecifier);
		fields?: AdAutoFieldPolicy;
	};
	AdAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdAvgAggregateKeySpecifier | (() => undefined | AdAvgAggregateKeySpecifier);
		fields?: AdAvgAggregateFieldPolicy;
	};
	AdCategory?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdCategoryKeySpecifier | (() => undefined | AdCategoryKeySpecifier);
		fields?: AdCategoryFieldPolicy;
	};
	AdCount?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdCountKeySpecifier | (() => undefined | AdCountKeySpecifier);
		fields?: AdCountFieldPolicy;
	};
	AdCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdCountAggregateKeySpecifier | (() => undefined | AdCountAggregateKeySpecifier);
		fields?: AdCountAggregateFieldPolicy;
	};
	AdGroupBy?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdGroupByKeySpecifier | (() => undefined | AdGroupByKeySpecifier);
		fields?: AdGroupByFieldPolicy;
	};
	AdHouse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdHouseKeySpecifier | (() => undefined | AdHouseKeySpecifier);
		fields?: AdHouseFieldPolicy;
	};
	AdMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdMaxAggregateKeySpecifier | (() => undefined | AdMaxAggregateKeySpecifier);
		fields?: AdMaxAggregateFieldPolicy;
	};
	AdMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdMinAggregateKeySpecifier | (() => undefined | AdMinAggregateKeySpecifier);
		fields?: AdMinAggregateFieldPolicy;
	};
	AdPrice?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPriceKeySpecifier | (() => undefined | AdPriceKeySpecifier);
		fields?: AdPriceFieldPolicy;
	};
	AdPromotion?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPromotionKeySpecifier | (() => undefined | AdPromotionKeySpecifier);
		fields?: AdPromotionFieldPolicy;
	};
	AdPromotionAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPromotionAvgAggregateKeySpecifier | (() => undefined | AdPromotionAvgAggregateKeySpecifier);
		fields?: AdPromotionAvgAggregateFieldPolicy;
	};
	AdPromotionCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPromotionCountAggregateKeySpecifier | (() => undefined | AdPromotionCountAggregateKeySpecifier);
		fields?: AdPromotionCountAggregateFieldPolicy;
	};
	AdPromotionMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPromotionMaxAggregateKeySpecifier | (() => undefined | AdPromotionMaxAggregateKeySpecifier);
		fields?: AdPromotionMaxAggregateFieldPolicy;
	};
	AdPromotionMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPromotionMinAggregateKeySpecifier | (() => undefined | AdPromotionMinAggregateKeySpecifier);
		fields?: AdPromotionMinAggregateFieldPolicy;
	};
	AdPromotionSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdPromotionSumAggregateKeySpecifier | (() => undefined | AdPromotionSumAggregateKeySpecifier);
		fields?: AdPromotionSumAggregateFieldPolicy;
	};
	AdSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AdSumAggregateKeySpecifier | (() => undefined | AdSumAggregateKeySpecifier);
		fields?: AdSumAggregateFieldPolicy;
	};
	AggregateAd?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AggregateAdKeySpecifier | (() => undefined | AggregateAdKeySpecifier);
		fields?: AggregateAdFieldPolicy;
	};
	AggregateCategory?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | AggregateCategoryKeySpecifier | (() => undefined | AggregateCategoryKeySpecifier);
		fields?: AggregateCategoryFieldPolicy;
	};
	Blog?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | BlogKeySpecifier | (() => undefined | BlogKeySpecifier);
		fields?: BlogFieldPolicy;
	};
	BlogAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | BlogAvgAggregateKeySpecifier | (() => undefined | BlogAvgAggregateKeySpecifier);
		fields?: BlogAvgAggregateFieldPolicy;
	};
	BlogCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | BlogCountAggregateKeySpecifier | (() => undefined | BlogCountAggregateKeySpecifier);
		fields?: BlogCountAggregateFieldPolicy;
	};
	BlogMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | BlogMaxAggregateKeySpecifier | (() => undefined | BlogMaxAggregateKeySpecifier);
		fields?: BlogMaxAggregateFieldPolicy;
	};
	BlogMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | BlogMinAggregateKeySpecifier | (() => undefined | BlogMinAggregateKeySpecifier);
		fields?: BlogMinAggregateFieldPolicy;
	};
	BlogSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | BlogSumAggregateKeySpecifier | (() => undefined | BlogSumAggregateKeySpecifier);
		fields?: BlogSumAggregateFieldPolicy;
	};
	Category?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier);
		fields?: CategoryFieldPolicy;
	};
	CategoryAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryAvgAggregateKeySpecifier | (() => undefined | CategoryAvgAggregateKeySpecifier);
		fields?: CategoryAvgAggregateFieldPolicy;
	};
	CategoryCount?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryCountKeySpecifier | (() => undefined | CategoryCountKeySpecifier);
		fields?: CategoryCountFieldPolicy;
	};
	CategoryCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryCountAggregateKeySpecifier | (() => undefined | CategoryCountAggregateKeySpecifier);
		fields?: CategoryCountAggregateFieldPolicy;
	};
	CategoryGroupBy?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryGroupByKeySpecifier | (() => undefined | CategoryGroupByKeySpecifier);
		fields?: CategoryGroupByFieldPolicy;
	};
	CategoryMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryMaxAggregateKeySpecifier | (() => undefined | CategoryMaxAggregateKeySpecifier);
		fields?: CategoryMaxAggregateFieldPolicy;
	};
	CategoryMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategoryMinAggregateKeySpecifier | (() => undefined | CategoryMinAggregateKeySpecifier);
		fields?: CategoryMinAggregateFieldPolicy;
	};
	CategorySumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | CategorySumAggregateKeySpecifier | (() => undefined | CategorySumAggregateKeySpecifier);
		fields?: CategorySumAggregateFieldPolicy;
	};
	File?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier);
		fields?: FileFieldPolicy;
	};
	FileAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | FileAvgAggregateKeySpecifier | (() => undefined | FileAvgAggregateKeySpecifier);
		fields?: FileAvgAggregateFieldPolicy;
	};
	FileCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | FileCountAggregateKeySpecifier | (() => undefined | FileCountAggregateKeySpecifier);
		fields?: FileCountAggregateFieldPolicy;
	};
	FileMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | FileMaxAggregateKeySpecifier | (() => undefined | FileMaxAggregateKeySpecifier);
		fields?: FileMaxAggregateFieldPolicy;
	};
	FileMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | FileMinAggregateKeySpecifier | (() => undefined | FileMinAggregateKeySpecifier);
		fields?: FileMinAggregateFieldPolicy;
	};
	FileSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | FileSumAggregateKeySpecifier | (() => undefined | FileSumAggregateKeySpecifier);
		fields?: FileSumAggregateFieldPolicy;
	};
	List?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListKeySpecifier | (() => undefined | ListKeySpecifier);
		fields?: ListFieldPolicy;
	};
	ListAd?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAdKeySpecifier | (() => undefined | ListAdKeySpecifier);
		fields?: ListAdFieldPolicy;
	};
	ListAdAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAdAvgAggregateKeySpecifier | (() => undefined | ListAdAvgAggregateKeySpecifier);
		fields?: ListAdAvgAggregateFieldPolicy;
	};
	ListAdCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAdCountAggregateKeySpecifier | (() => undefined | ListAdCountAggregateKeySpecifier);
		fields?: ListAdCountAggregateFieldPolicy;
	};
	ListAdMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAdMaxAggregateKeySpecifier | (() => undefined | ListAdMaxAggregateKeySpecifier);
		fields?: ListAdMaxAggregateFieldPolicy;
	};
	ListAdMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAdMinAggregateKeySpecifier | (() => undefined | ListAdMinAggregateKeySpecifier);
		fields?: ListAdMinAggregateFieldPolicy;
	};
	ListAdSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAdSumAggregateKeySpecifier | (() => undefined | ListAdSumAggregateKeySpecifier);
		fields?: ListAdSumAggregateFieldPolicy;
	};
	ListAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListAvgAggregateKeySpecifier | (() => undefined | ListAvgAggregateKeySpecifier);
		fields?: ListAvgAggregateFieldPolicy;
	};
	ListCount?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListCountKeySpecifier | (() => undefined | ListCountKeySpecifier);
		fields?: ListCountFieldPolicy;
	};
	ListCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListCountAggregateKeySpecifier | (() => undefined | ListCountAggregateKeySpecifier);
		fields?: ListCountAggregateFieldPolicy;
	};
	ListMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListMaxAggregateKeySpecifier | (() => undefined | ListMaxAggregateKeySpecifier);
		fields?: ListMaxAggregateFieldPolicy;
	};
	ListMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListMinAggregateKeySpecifier | (() => undefined | ListMinAggregateKeySpecifier);
		fields?: ListMinAggregateFieldPolicy;
	};
	ListSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | ListSumAggregateKeySpecifier | (() => undefined | ListSumAggregateKeySpecifier);
		fields?: ListSumAggregateFieldPolicy;
	};
	MessagingChannel?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MessagingChannelKeySpecifier | (() => undefined | MessagingChannelKeySpecifier);
		fields?: MessagingChannelFieldPolicy;
	};
	MessagingChannelAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MessagingChannelAvgAggregateKeySpecifier | (() => undefined | MessagingChannelAvgAggregateKeySpecifier);
		fields?: MessagingChannelAvgAggregateFieldPolicy;
	};
	MessagingChannelCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MessagingChannelCountAggregateKeySpecifier | (() => undefined | MessagingChannelCountAggregateKeySpecifier);
		fields?: MessagingChannelCountAggregateFieldPolicy;
	};
	MessagingChannelMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MessagingChannelMaxAggregateKeySpecifier | (() => undefined | MessagingChannelMaxAggregateKeySpecifier);
		fields?: MessagingChannelMaxAggregateFieldPolicy;
	};
	MessagingChannelMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MessagingChannelMinAggregateKeySpecifier | (() => undefined | MessagingChannelMinAggregateKeySpecifier);
		fields?: MessagingChannelMinAggregateFieldPolicy;
	};
	MessagingChannelSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MessagingChannelSumAggregateKeySpecifier | (() => undefined | MessagingChannelSumAggregateKeySpecifier);
		fields?: MessagingChannelSumAggregateFieldPolicy;
	};
	Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
		fields?: MutationFieldPolicy;
	};
	PromotionPlan?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanKeySpecifier | (() => undefined | PromotionPlanKeySpecifier);
		fields?: PromotionPlanFieldPolicy;
	};
	PromotionPlanAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanAvgAggregateKeySpecifier | (() => undefined | PromotionPlanAvgAggregateKeySpecifier);
		fields?: PromotionPlanAvgAggregateFieldPolicy;
	};
	PromotionPlanCount?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanCountKeySpecifier | (() => undefined | PromotionPlanCountKeySpecifier);
		fields?: PromotionPlanCountFieldPolicy;
	};
	PromotionPlanCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanCountAggregateKeySpecifier | (() => undefined | PromotionPlanCountAggregateKeySpecifier);
		fields?: PromotionPlanCountAggregateFieldPolicy;
	};
	PromotionPlanMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanMaxAggregateKeySpecifier | (() => undefined | PromotionPlanMaxAggregateKeySpecifier);
		fields?: PromotionPlanMaxAggregateFieldPolicy;
	};
	PromotionPlanMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanMinAggregateKeySpecifier | (() => undefined | PromotionPlanMinAggregateKeySpecifier);
		fields?: PromotionPlanMinAggregateFieldPolicy;
	};
	PromotionPlanRelation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanRelationKeySpecifier | (() => undefined | PromotionPlanRelationKeySpecifier);
		fields?: PromotionPlanRelationFieldPolicy;
	};
	PromotionPlanSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | PromotionPlanSumAggregateKeySpecifier | (() => undefined | PromotionPlanSumAggregateKeySpecifier);
		fields?: PromotionPlanSumAggregateFieldPolicy;
	};
	Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
		fields?: QueryFieldPolicy;
	};
	SasToken?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | SasTokenKeySpecifier | (() => undefined | SasTokenKeySpecifier);
		fields?: SasTokenFieldPolicy;
	};
	User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
		fields?: UserFieldPolicy;
	};
	UserAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserAvgAggregateKeySpecifier | (() => undefined | UserAvgAggregateKeySpecifier);
		fields?: UserAvgAggregateFieldPolicy;
	};
	UserCount?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserCountKeySpecifier | (() => undefined | UserCountKeySpecifier);
		fields?: UserCountFieldPolicy;
	};
	UserCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserCountAggregateKeySpecifier | (() => undefined | UserCountAggregateKeySpecifier);
		fields?: UserCountAggregateFieldPolicy;
	};
	UserMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserMaxAggregateKeySpecifier | (() => undefined | UserMaxAggregateKeySpecifier);
		fields?: UserMaxAggregateFieldPolicy;
	};
	UserMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserMinAggregateKeySpecifier | (() => undefined | UserMinAggregateKeySpecifier);
		fields?: UserMinAggregateFieldPolicy;
	};
	UserPromotion?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserPromotionKeySpecifier | (() => undefined | UserPromotionKeySpecifier);
		fields?: UserPromotionFieldPolicy;
	};
	UserPromotionAvgAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserPromotionAvgAggregateKeySpecifier | (() => undefined | UserPromotionAvgAggregateKeySpecifier);
		fields?: UserPromotionAvgAggregateFieldPolicy;
	};
	UserPromotionCountAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserPromotionCountAggregateKeySpecifier | (() => undefined | UserPromotionCountAggregateKeySpecifier);
		fields?: UserPromotionCountAggregateFieldPolicy;
	};
	UserPromotionMaxAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserPromotionMaxAggregateKeySpecifier | (() => undefined | UserPromotionMaxAggregateKeySpecifier);
		fields?: UserPromotionMaxAggregateFieldPolicy;
	};
	UserPromotionMinAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserPromotionMinAggregateKeySpecifier | (() => undefined | UserPromotionMinAggregateKeySpecifier);
		fields?: UserPromotionMinAggregateFieldPolicy;
	};
	UserPromotionSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserPromotionSumAggregateKeySpecifier | (() => undefined | UserPromotionSumAggregateKeySpecifier);
		fields?: UserPromotionSumAggregateFieldPolicy;
	};
	UserSumAggregate?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
		keyFields?: false | UserSumAggregateKeySpecifier | (() => undefined | UserSumAggregateKeySpecifier);
		fields?: UserSumAggregateFieldPolicy;
	};
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
