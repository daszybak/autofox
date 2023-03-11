import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutBody_typeInput } from './ad-auto-update-without-body-type.input';
import { AdAutoCreateWithoutBody_typeInput } from './ad-auto-create-without-body-type.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutBody_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutBody_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutBody_typeInput)
    update!: AdAutoUpdateWithoutBody_typeInput;

    @Field(() => AdAutoCreateWithoutBody_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutBody_typeInput)
    create!: AdAutoCreateWithoutBody_typeInput;
}
