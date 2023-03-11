import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutEmission_classInput } from './ad-auto-create-without-emission-class.input';

@InputType()
export class AdAutoCreateOrConnectWithoutEmission_classInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutEmission_classInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutEmission_classInput)
    create!: AdAutoCreateWithoutEmission_classInput;
}
