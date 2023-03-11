import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdCategoryCreateManyCategoryInput {

    @Field(() => Int, {nullable:false})
    ad_id!: number;
}
