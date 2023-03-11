import { registerEnumType } from '@nestjs/graphql';

export enum AdHouseScalarFieldEnum {
    ad_house_id = "ad_house_id",
    ad_id = "ad_id",
    meters = "meters"
}


registerEnumType(AdHouseScalarFieldEnum, { name: 'AdHouseScalarFieldEnum', description: undefined })
