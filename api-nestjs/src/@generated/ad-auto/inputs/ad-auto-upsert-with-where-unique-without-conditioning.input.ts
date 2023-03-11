import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutConditioningInput } from './ad-auto-update-without-conditioning.input';
import { AdAutoCreateWithoutConditioningInput } from './ad-auto-create-without-conditioning.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutConditioningInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutConditioningInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutConditioningInput)
    update!: AdAutoUpdateWithoutConditioningInput;

    @Field(() => AdAutoCreateWithoutConditioningInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutConditioningInput)
    create!: AdAutoCreateWithoutConditioningInput;
}
