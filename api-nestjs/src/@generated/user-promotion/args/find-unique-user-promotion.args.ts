import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from '../inputs/user-promotion-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserPromotionArgs {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;
}
