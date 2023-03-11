import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/inputs/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/inputs/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/inputs/string-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../../prisma/inputs/float-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../../prisma/inputs/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/inputs/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../../prisma/inputs/bool-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { DecimalNullableWithAggregatesFilter } from '../../prisma/inputs/decimal-nullable-with-aggregates-filter.input';

@InputType()
export class AdScalarWhereWithAggregatesInput {

    @Field(() => [AdScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => AdScalarWhereWithAggregatesInput)
    AND?: Array<AdScalarWhereWithAggregatesInput>;

    @Field(() => [AdScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => AdScalarWhereWithAggregatesInput)
    OR?: Array<AdScalarWhereWithAggregatesInput>;

    @Field(() => [AdScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => AdScalarWhereWithAggregatesInput)
    NOT?: Array<AdScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ad_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deleted_at?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    text?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    coords_latitude?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    coords_longitude?: FloatNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    coords_radius?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    price_eurocent?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_sub?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    is_sold?: BoolWithAggregatesFilter;

    @HideField()
    moderation_flag?: IntWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalNullableWithAggregatesFilter)
    price_rating?: DecimalNullableWithAggregatesFilter;
}
