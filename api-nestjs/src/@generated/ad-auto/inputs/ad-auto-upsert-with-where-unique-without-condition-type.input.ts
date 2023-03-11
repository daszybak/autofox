import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutCondition_typeInput } from './ad-auto-update-without-condition-type.input';
import { AdAutoCreateWithoutCondition_typeInput } from './ad-auto-create-without-condition-type.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutCondition_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutCondition_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutCondition_typeInput)
    update!: AdAutoUpdateWithoutCondition_typeInput;

    @Field(() => AdAutoCreateWithoutCondition_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutCondition_typeInput)
    create!: AdAutoCreateWithoutCondition_typeInput;
}
