import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from '../inputs/ad-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAdCategoryArgs {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;
}
