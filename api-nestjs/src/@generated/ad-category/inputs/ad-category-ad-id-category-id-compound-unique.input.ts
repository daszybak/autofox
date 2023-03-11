import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdCategoryAd_idCategory_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;
}
