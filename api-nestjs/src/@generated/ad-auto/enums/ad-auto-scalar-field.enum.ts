import { registerEnumType } from '@nestjs/graphql';

export enum AdAutoScalarFieldEnum {
    ad_auto_id = "ad_auto_id",
    ad_id = "ad_id",
    condition_type_cid = "condition_type_cid",
    vehicle_type_cid = "vehicle_type_cid",
    fuel_type_cid = "fuel_type_cid",
    transmission_type_cid = "transmission_type_cid",
    make_cid = "make_cid",
    model_cid = "model_cid",
    year = "year",
    km = "km",
    power_kw = "power_kw",
    body_type_cid = "body_type_cid",
    variant_cid = "variant_cid",
    registered_until = "registered_until",
    doors_num = "doors_num",
    seats_num = "seats_num",
    is_first_owner = "is_first_owner",
    is_service_book_available = "is_service_book_available",
    is_vehicle_garaged = "is_vehicle_garaged",
    engine_displacement_cm3 = "engine_displacement_cm3",
    emission_class_cid = "emission_class_cid",
    battery_capacity_kwh = "battery_capacity_kwh",
    conditioning_cid = "conditioning_cid",
    color_exterior_cid = "color_exterior_cid",
    color_interior_cid = "color_interior_cid"
}


registerEnumType(AdAutoScalarFieldEnum, { name: 'AdAutoScalarFieldEnum', description: undefined })
