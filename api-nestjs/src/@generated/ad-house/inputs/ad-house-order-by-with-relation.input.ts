import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdOrderByWithRelationInput } from '../../ad/inputs/ad-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class AdHouseOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_house_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => AdOrderByWithRelationInput, {nullable:true})
    @Type(() => AdOrderByWithRelationInput)
    ad?: AdOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    meters?: keyof typeof SortOrder;
}
