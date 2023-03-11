import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutVariantInput } from './ad-auto-create-without-variant.input';

@InputType()
export class AdAutoCreateOrConnectWithoutVariantInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutVariantInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutVariantInput)
    create!: AdAutoCreateWithoutVariantInput;
}
