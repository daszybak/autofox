import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { Type } from 'class-transformer';
import { AdCategoryUpdateWithoutAdInput } from './ad-category-update-without-ad.input';
import { AdCategoryCreateWithoutAdInput } from './ad-category-create-without-ad.input';

@InputType()
export class AdCategoryUpsertWithWhereUniqueWithoutAdInput {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;

    @Field(() => AdCategoryUpdateWithoutAdInput, {nullable:false})
    @Type(() => AdCategoryUpdateWithoutAdInput)
    update!: AdCategoryUpdateWithoutAdInput;

    @Field(() => AdCategoryCreateWithoutAdInput, {nullable:false})
    @Type(() => AdCategoryCreateWithoutAdInput)
    create!: AdCategoryCreateWithoutAdInput;
}
