import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutBody_typeInput } from './ad-auto-update-without-body-type.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutBody_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutBody_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutBody_typeInput)
    data!: AdAutoUpdateWithoutBody_typeInput;
}
