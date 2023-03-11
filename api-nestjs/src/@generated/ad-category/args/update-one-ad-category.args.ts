import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryUpdateInput } from '../inputs/ad-category-update.input';
import { Type } from 'class-transformer';
import { AdCategoryWhereUniqueInput } from '../inputs/ad-category-where-unique.input';

@ArgsType()
export class UpdateOneAdCategoryArgs {

    @Field(() => AdCategoryUpdateInput, {nullable:false})
    @Type(() => AdCategoryUpdateInput)
    data!: AdCategoryUpdateInput;

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;
}
