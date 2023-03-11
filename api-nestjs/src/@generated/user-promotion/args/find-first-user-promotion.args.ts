import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionWhereInput } from '../inputs/user-promotion-where.input';
import { Type } from 'class-transformer';
import { UserPromotionOrderByWithRelationInput } from '../inputs/user-promotion-order-by-with-relation.input';
import { UserPromotionWhereUniqueInput } from '../inputs/user-promotion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPromotionScalarFieldEnum } from '../enums/user-promotion-scalar-field.enum';

@ArgsType()
export class FindFirstUserPromotionArgs {

    @Field(() => UserPromotionWhereInput, {nullable:true})
    @Type(() => UserPromotionWhereInput)
    where?: UserPromotionWhereInput;

    @Field(() => [UserPromotionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserPromotionOrderByWithRelationInput>;

    @Field(() => UserPromotionWhereUniqueInput, {nullable:true})
    cursor?: UserPromotionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UserPromotionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserPromotionScalarFieldEnum>;
}
