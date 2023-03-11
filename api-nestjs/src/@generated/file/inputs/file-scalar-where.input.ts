import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FileScalarWhereInput {

    @Field(() => [FileScalarWhereInput], {nullable:true})
    AND?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    OR?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    NOT?: Array<FileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    file_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    filename?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    filesize?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @HideField()
    user_sub?: StringFilter;
}
