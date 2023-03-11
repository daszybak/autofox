import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdCategoryUncheckedCreateWithoutAdInput {

    @Field(() => Int, {nullable:false})
    category_id!: number;
}
