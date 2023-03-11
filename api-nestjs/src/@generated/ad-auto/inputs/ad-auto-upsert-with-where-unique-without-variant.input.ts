import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutVariantInput } from './ad-auto-update-without-variant.input';
import { AdAutoCreateWithoutVariantInput } from './ad-auto-create-without-variant.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutVariantInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutVariantInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutVariantInput)
    update!: AdAutoUpdateWithoutVariantInput;

    @Field(() => AdAutoCreateWithoutVariantInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutVariantInput)
    create!: AdAutoCreateWithoutVariantInput;
}
