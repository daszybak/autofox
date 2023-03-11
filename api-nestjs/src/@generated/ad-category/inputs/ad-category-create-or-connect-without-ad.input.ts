import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateWithoutAdInput } from './ad-category-create-without-ad.input';

@InputType()
export class AdCategoryCreateOrConnectWithoutAdInput {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;

    @Field(() => AdCategoryCreateWithoutAdInput, {nullable:false})
    @Type(() => AdCategoryCreateWithoutAdInput)
    create!: AdCategoryCreateWithoutAdInput;
}
