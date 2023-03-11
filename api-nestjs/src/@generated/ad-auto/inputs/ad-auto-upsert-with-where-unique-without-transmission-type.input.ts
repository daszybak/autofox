import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutTransmission_typeInput } from './ad-auto-update-without-transmission-type.input';
import { AdAutoCreateWithoutTransmission_typeInput } from './ad-auto-create-without-transmission-type.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutTransmission_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutTransmission_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutTransmission_typeInput)
    update!: AdAutoUpdateWithoutTransmission_typeInput;

    @Field(() => AdAutoCreateWithoutTransmission_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutTransmission_typeInput)
    create!: AdAutoCreateWithoutTransmission_typeInput;
}
