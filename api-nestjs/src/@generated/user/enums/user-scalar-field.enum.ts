import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    user_sub = "user_sub",
    name = "name",
    moderation_flag = "moderation_flag"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
