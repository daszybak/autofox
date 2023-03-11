import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryCreateInput } from '../inputs/ad-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdCategoryArgs {

    @Field(() => AdCategoryCreateInput, {nullable:false})
    @Type(() => AdCategoryCreateInput)
    data!: AdCategoryCreateInput;
}
