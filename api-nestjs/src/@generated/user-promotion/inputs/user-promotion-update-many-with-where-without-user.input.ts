import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionScalarWhereInput } from './user-promotion-scalar-where.input';
import { Type } from 'class-transformer';
import { UserPromotionUpdateManyMutationInput } from './user-promotion-update-many-mutation.input';

@InputType()
export class UserPromotionUpdateManyWithWhereWithoutUserInput {

    @Field(() => UserPromotionScalarWhereInput, {nullable:false})
    @Type(() => UserPromotionScalarWhereInput)
    where!: UserPromotionScalarWhereInput;

    @Field(() => UserPromotionUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPromotionUpdateManyMutationInput)
    data!: UserPromotionUpdateManyMutationInput;
}
