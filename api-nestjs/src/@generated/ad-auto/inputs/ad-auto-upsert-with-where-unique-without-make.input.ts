import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutMakeInput } from './ad-auto-update-without-make.input';
import { AdAutoCreateWithoutMakeInput } from './ad-auto-create-without-make.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutMakeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutMakeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutMakeInput)
    update!: AdAutoUpdateWithoutMakeInput;

    @Field(() => AdAutoCreateWithoutMakeInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutMakeInput)
    create!: AdAutoCreateWithoutMakeInput;
}
