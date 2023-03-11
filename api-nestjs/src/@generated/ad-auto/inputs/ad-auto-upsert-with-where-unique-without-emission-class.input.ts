import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutEmission_classInput } from './ad-auto-update-without-emission-class.input';
import { AdAutoCreateWithoutEmission_classInput } from './ad-auto-create-without-emission-class.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutEmission_classInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutEmission_classInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutEmission_classInput)
    update!: AdAutoUpdateWithoutEmission_classInput;

    @Field(() => AdAutoCreateWithoutEmission_classInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutEmission_classInput)
    create!: AdAutoCreateWithoutEmission_classInput;
}
