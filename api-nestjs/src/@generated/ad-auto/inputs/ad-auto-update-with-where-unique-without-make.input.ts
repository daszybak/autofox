import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutMakeInput } from './ad-auto-update-without-make.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutMakeInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutMakeInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutMakeInput)
    data!: AdAutoUpdateWithoutMakeInput;
}
