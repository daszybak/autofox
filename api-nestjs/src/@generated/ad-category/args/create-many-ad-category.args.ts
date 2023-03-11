import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryCreateManyInput } from '../inputs/ad-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdCategoryArgs {

    @Field(() => [AdCategoryCreateManyInput], {nullable:false})
    @Type(() => AdCategoryCreateManyInput)
    data!: Array<AdCategoryCreateManyInput>;
}
