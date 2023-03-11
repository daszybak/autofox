import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { Type } from 'class-transformer';
import { AdCategoryUpdateWithoutAdInput } from './ad-category-update-without-ad.input';

@InputType()
export class AdCategoryUpdateWithWhereUniqueWithoutAdInput {

    @Field(() => AdCategoryWhereUniqueInput, {nullable:false})
    @Type(() => AdCategoryWhereUniqueInput)
    where!: AdCategoryWhereUniqueInput;

    @Field(() => AdCategoryUpdateWithoutAdInput, {nullable:false})
    @Type(() => AdCategoryUpdateWithoutAdInput)
    data!: AdCategoryUpdateWithoutAdInput;
}
