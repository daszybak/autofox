import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutConditioningInput } from './ad-auto-update-without-conditioning.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutConditioningInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutConditioningInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutConditioningInput)
    data!: AdAutoUpdateWithoutConditioningInput;
}
