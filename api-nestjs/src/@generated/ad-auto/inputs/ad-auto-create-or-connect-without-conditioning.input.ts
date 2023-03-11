import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutConditioningInput } from './ad-auto-create-without-conditioning.input';

@InputType()
export class AdAutoCreateOrConnectWithoutConditioningInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutConditioningInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutConditioningInput)
    create!: AdAutoCreateWithoutConditioningInput;
}
