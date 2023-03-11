import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';

@InputType()
export class CategoryScalarWhereInput {

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    AND?: Array<CategoryScalarWhereInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    OR?: Array<CategoryScalarWhereInput>;

    @Field(() => [CategoryScalarWhereInput], {nullable:true})
    NOT?: Array<CategoryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parent_category_id?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    weight?: IntNullableFilter;
}
