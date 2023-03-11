import { registerEnumType } from '@nestjs/graphql';

export enum ListAdScalarFieldEnum {
    ad_id = "ad_id",
    list_id = "list_id"
}


registerEnumType(ListAdScalarFieldEnum, { name: 'ListAdScalarFieldEnum', description: undefined })
