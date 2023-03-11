import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutFuel_typeInput } from './ad-auto-update-without-fuel-type.input';
import { AdAutoCreateWithoutFuel_typeInput } from './ad-auto-create-without-fuel-type.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutFuel_typeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutFuel_typeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutFuel_typeInput)
    update!: AdAutoUpdateWithoutFuel_typeInput;

    @Field(() => AdAutoCreateWithoutFuel_typeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutFuel_typeInput)
    create!: AdAutoCreateWithoutFuel_typeInput;
}
