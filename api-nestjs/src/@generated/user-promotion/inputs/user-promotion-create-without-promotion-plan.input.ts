import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserPromotionInput } from '../../user/inputs/user-create-nested-one-without-user-promotion.input';

@InputType()
export class UserPromotionCreateWithoutPromotion_planInput {

    @Field(() => UserCreateNestedOneWithoutUserPromotionInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserPromotionInput;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;
}
