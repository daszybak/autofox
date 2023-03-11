import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutModelInput } from './ad-auto-update-without-model.input';
import { AdAutoCreateWithoutModelInput } from './ad-auto-create-without-model.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutModelInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutModelInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutModelInput)
    update!: AdAutoUpdateWithoutModelInput;

    @Field(() => AdAutoCreateWithoutModelInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutModelInput)
    create!: AdAutoCreateWithoutModelInput;
}
