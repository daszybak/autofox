import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutEmission_classInput } from './ad-auto-update-without-emission-class.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutEmission_classInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutEmission_classInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutEmission_classInput)
    data!: AdAutoUpdateWithoutEmission_classInput;
}
