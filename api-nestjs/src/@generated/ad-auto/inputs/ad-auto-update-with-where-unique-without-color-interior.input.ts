import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutColor_interiorInput } from './ad-auto-update-without-color-interior.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutColor_interiorInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutColor_interiorInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutColor_interiorInput)
    data!: AdAutoUpdateWithoutColor_interiorInput;
}
