import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryCreateManyAdInput } from './ad-category-create-many-ad.input';
import { Type } from 'class-transformer';

@InputType()
export class AdCategoryCreateManyAdInputEnvelope {

    @Field(() => [AdCategoryCreateManyAdInput], {nullable:false})
    @Type(() => AdCategoryCreateManyAdInput)
    data!: Array<AdCategoryCreateManyAdInput>;
}
