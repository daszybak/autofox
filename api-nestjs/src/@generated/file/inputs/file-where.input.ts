import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { AdRelationFilter } from '../../ad/inputs/ad-relation-filter.input';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { UserRelationFilter } from '../../user/inputs/user-relation-filter.input';

@InputType()
export class FileWhereInput {

    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;

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

    @Field(() => AdRelationFilter, {nullable:true})
    @Type(() => AdRelationFilter)
    ad?: AdRelationFilter;

    @HideField()
    user_sub?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
