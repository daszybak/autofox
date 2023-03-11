import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutCondition_typeInput } from './ad-auto-create-without-condition-type.input';

@InputType()
export class AdAutoCreateOrConnectWithoutCondition_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutCondition_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutCondition_typeInput)
    create!: AdAutoCreateWithoutCondition_typeInput;
}
