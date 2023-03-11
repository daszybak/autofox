import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAd_categoriesInput } from './ad-create-without-ad-categories.input';

@InputType()
export class AdCreateOrConnectWithoutAd_categoriesInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutAd_categoriesInput, {nullable:false})
    @Type(() => AdCreateWithoutAd_categoriesInput)
    create!: AdCreateWithoutAd_categoriesInput;
}
