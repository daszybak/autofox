import { registerEnumType } from '@nestjs/graphql';

export enum MessagingScalarFieldEnum {
    messaging_id = "messaging_id",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at",
    address = "address",
    device_type = "device_type",
    platform = "platform",
    user_sub = "user_sub"
}


registerEnumType(MessagingScalarFieldEnum, { name: 'MessagingScalarFieldEnum', description: undefined })
