import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutMakeInput } from './ad-auto-create-without-make.input';

@InputType()
export class AdAutoCreateOrConnectWithoutMakeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutMakeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutMakeInput)
    create!: AdAutoCreateWithoutMakeInput;
}
