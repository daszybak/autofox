import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutColor_interiorInput } from './ad-auto-update-without-color-interior.input';
import { AdAutoCreateWithoutColor_interiorInput } from './ad-auto-create-without-color-interior.input';

@InputType()
export class AdAutoUpsertWithWhereUniqueWithoutColor_interiorInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutColor_interiorInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutColor_interiorInput)
    update!: AdAutoUpdateWithoutColor_interiorInput;

    @Field(() => AdAutoCreateWithoutColor_interiorInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutColor_interiorInput)
    create!: AdAutoCreateWithoutColor_interiorInput;
}
