import { registerEnumType } from '@nestjs/graphql';

export enum FileScalarFieldEnum {
    file_id = "file_id",
    filename = "filename",
    filesize = "filesize",
    code = "code",
    path = "path",
    ad_id = "ad_id",
    user_sub = "user_sub"
}


registerEnumType(FileScalarFieldEnum, { name: 'FileScalarFieldEnum', description: undefined })
