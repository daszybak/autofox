import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionWhereInput } from './user-promotion-where.input';

@InputType()
export class UserPromotionListRelationFilter {

    @Field(() => UserPromotionWhereInput, {nullable:true})
    every?: UserPromotionWhereInput;

    @Field(() => UserPromotionWhereInput, {nullable:true})
    some?: UserPromotionWhereInput;

    @Field(() => UserPromotionWhereInput, {nullable:true})
    none?: UserPromotionWhereInput;
}
