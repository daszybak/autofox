import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryWhereInput } from './ad-category-where.input';

@InputType()
export class AdCategoryListRelationFilter {

    @Field(() => AdCategoryWhereInput, {nullable:true})
    every?: AdCategoryWhereInput;

    @Field(() => AdCategoryWhereInput, {nullable:true})
    some?: AdCategoryWhereInput;

    @Field(() => AdCategoryWhereInput, {nullable:true})
    none?: AdCategoryWhereInput;
}
