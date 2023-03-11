import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateWithoutColor_exteriorInput } from './ad-auto-update-without-color-exterior.input';

@InputType()
export class AdAutoUpdateWithWhereUniqueWithoutColor_exteriorInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutColor_exteriorInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutColor_exteriorInput)
    data!: AdAutoUpdateWithoutColor_exteriorInput;
}
