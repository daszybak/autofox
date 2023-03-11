import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FileScalarWhereWithAggregatesInput {

    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FileScalarWhereWithAggregatesInput>;

    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FileScalarWhereWithAggregatesInput>;

    @Field(() => [FileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FileScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    file_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    filename?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    filesize?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    path?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_id?: IntWithAggregatesFilter;

    @HideField()
    user_sub?: StringWithAggregatesFilter;
}
