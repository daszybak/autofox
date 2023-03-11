import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutAdInput } from './ad-auto-create-without-ad.input';

@InputType()
export class AdAutoCreateOrConnectWithoutAdInput {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateWithoutAdInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutAdInput)
    create!: AdAutoCreateWithoutAdInput;
}
