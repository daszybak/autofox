import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutModelInput } from './ad-auto-create-without-model.input';

@InputType()
export class AdAutoCreateOrConnectWithoutModelInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutModelInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutModelInput)
    create!: AdAutoCreateWithoutModelInput;
}
