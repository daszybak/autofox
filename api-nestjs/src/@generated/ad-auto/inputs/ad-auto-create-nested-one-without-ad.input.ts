import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutAdInput } from './ad-auto-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutAdInput } from './ad-auto-create-or-connect-without-ad.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedOneWithoutAdInput {

    @Field(() => AdAutoCreateWithoutAdInput, {nullable:true})
    @Type(() => AdAutoCreateWithoutAdInput)
    create?: AdAutoCreateWithoutAdInput;

    @Field(() => AdAutoCreateOrConnectWithoutAdInput, {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutAdInput)
    connectOrCreate?: AdAutoCreateOrConnectWithoutAdInput;

    @Field(() => AdAutoWhereUniqueInput, {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: AdAutoWhereUniqueInput;
}
