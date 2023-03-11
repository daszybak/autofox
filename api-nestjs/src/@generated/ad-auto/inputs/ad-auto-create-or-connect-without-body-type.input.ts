import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutBody_typeInput } from './ad-auto-create-without-body-type.input';

@InputType()
export class AdAutoCreateOrConnectWithoutBody_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutBody_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutBody_typeInput)
    create!: AdAutoCreateWithoutBody_typeInput;
}
