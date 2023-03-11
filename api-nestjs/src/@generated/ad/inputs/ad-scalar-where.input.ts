import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { DateTimeFilter } from '../../prisma/inputs/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/inputs/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/inputs/string-filter.input';
import { FloatNullableFilter } from '../../prisma/inputs/float-nullable-filter.input';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/inputs/string-nullable-filter.input';
import { BoolFilter } from '../../prisma/inputs/bool-filter.input';
import { HideField } from '@nestjs/graphql';
import { DecimalNullableFilter } from '../../prisma/inputs/decimal-nullable-filter.input';

@InputType()
export class AdScalarWhereInput {

    @Field(() => [AdScalarWhereInput], {nullable:true})
    @Type(() => AdScalarWhereInput)
    AND?: Array<AdScalarWhereInput>;

    @Field(() => [AdScalarWhereInput], {nullable:true})
    @Type(() => AdScalarWhereInput)
    OR?: Array<AdScalarWhereInput>;

    @Field(() => [AdScalarWhereInput], {nullable:true})
    @Type(() => AdScalarWhereInput)
    NOT?: Array<AdScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    text?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    coords_latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    coords_longitude?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    coords_radius?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    price_eurocent?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    user_sub?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_sold?: BoolFilter;

    @HideField()
    moderation_flag?: IntFilter;

    @Field(() => DecimalNullableFilter, {nullable:true})
    @Type(() => DecimalNullableFilter)
    price_rating?: DecimalNullableFilter;
}
