import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { AdRelationFilter } from '../../ad/inputs/ad-relation-filter.input';
import { Type } from 'class-transformer';
import { IntNullableFilter } from '../../prisma/inputs/int-nullable-filter.input';

@InputType()
export class AdHouseWhereInput {

    @Field(() => [AdHouseWhereInput], {nullable:true})
    AND?: Array<AdHouseWhereInput>;

    @Field(() => [AdHouseWhereInput], {nullable:true})
    OR?: Array<AdHouseWhereInput>;

    @Field(() => [AdHouseWhereInput], {nullable:true})
    NOT?: Array<AdHouseWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_house_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => AdRelationFilter, {nullable:true})
    @Type(() => AdRelationFilter)
    ad?: AdRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    meters?: IntNullableFilter;
}
