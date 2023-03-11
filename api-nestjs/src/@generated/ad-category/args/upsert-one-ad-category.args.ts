import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from '../inputs/ad-category-where-unique.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateInput } from '../inputs/ad-category-create.input';
import { AdCategoryUpdateInput } from '../inputs/ad-category-update.input';

@ArgsType()
export class UpsertOneAdCategoryArgs {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;

    @Field(() => AdCategoryCreateInput, {nullable:false})
    @Type(() => AdCategoryCreateInput)
    create!: AdCategoryCreateInput;

    @Field(() => AdCategoryUpdateInput, {nullable:false})
    @Type(() => AdCategoryUpdateInput)
    update!: AdCategoryUpdateInput;
}
