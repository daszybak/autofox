import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutColor_exteriorInput } from './ad-auto-update-without-color-exterior.input';
import { AdAutoCreateWithoutColor_exteriorInput } from './ad-auto-create-without-color-exterior.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutColor_exteriorInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutColor_exteriorInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutColor_exteriorInput)
    update!: AdAutoUpdateWithoutColor_exteriorInput;

    @Field(() => AdAutoCreateWithoutColor_exteriorInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutColor_exteriorInput)
    create!: AdAutoCreateWithoutColor_exteriorInput;
}
