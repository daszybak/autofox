import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutAd_categoriesInput } from './ad-create-without-ad-categories.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutAd_categoriesInput } from './ad-create-or-connect-without-ad-categories.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';

@InputType()
export class AdCreateNestedOneWithoutAd_categoriesInput {

    @Field(() => AdCreateWithoutAd_categoriesInput, {nullable:true})
    @Type(() => AdCreateWithoutAd_categoriesInput)
    create?: AdCreateWithoutAd_categoriesInput;

    @Field(() => AdCreateOrConnectWithoutAd_categoriesInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutAd_categoriesInput)
    connectOrCreate?: AdCreateOrConnectWithoutAd_categoriesInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;
}
