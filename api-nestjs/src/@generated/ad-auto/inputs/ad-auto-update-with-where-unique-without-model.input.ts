import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutModelInput } from './ad-auto-update-without-model.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutModelInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutModelInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutModelInput)
    data!: AdAutoUpdateWithoutModelInput;
}
