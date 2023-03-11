import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutTransmission_typeInput } from './ad-auto-create-without-transmission-type.input';

@InputType()
export class AdAutoCreateOrConnectWithoutTransmission_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutTransmission_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutTransmission_typeInput)
    create!: AdAutoCreateWithoutTransmission_typeInput;
}
