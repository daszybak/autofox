import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutColor_interiorInput } from './ad-auto-create-without-color-interior.input';

@InputType()
export class AdAutoCreateOrConnectWithoutColor_interiorInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutColor_interiorInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutColor_interiorInput)
    create!: AdAutoCreateWithoutColor_interiorInput;
}
