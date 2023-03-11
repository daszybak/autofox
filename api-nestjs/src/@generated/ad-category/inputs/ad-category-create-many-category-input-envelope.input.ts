import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryCreateManyCategoryInput } from './ad-category-create-many-category.input';
import { Type } from 'class-transformer';

@InputType()
export class AdCategoryCreateManyCategoryInputEnvelope {

    @Field(() => [AdCategoryCreateManyCategoryInput], {nullable:false})
    @Type(() => AdCategoryCreateManyCategoryInput)
    data!: Array<AdCategoryCreateManyCategoryInput>;
}
