import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutAdInput } from './ad-auto-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutAdInput } from './ad-auto-create-or-connect-without-ad.input';
import { AdAutoUpsertWithoutAdInput } from './ad-auto-upsert-without-ad.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithoutAdInput } from './ad-auto-update-without-ad.input';

@InputType()
export class AdAutoUpdateOneWithoutAdNestedInput {

    @Field(() => AdAutoCreateWithoutAdInput, {nullable:true})
    @Type(() => AdAutoCreateWithoutAdInput)
    create?: AdAutoCreateWithoutAdInput;

    @Field(() => AdAutoCreateOrConnectWithoutAdInput, {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutAdInput)
    connectOrCreate?: AdAutoCreateOrConnectWithoutAdInput;

    @Field(() => AdAutoUpsertWithoutAdInput, {nullable:true})
    @Type(() => AdAutoUpsertWithoutAdInput)
    upsert?: AdAutoUpsertWithoutAdInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AdAutoWhereUniqueInput, {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: AdAutoWhereUniqueInput;

    @Field(() => AdAutoUpdateWithoutAdInput, {nullable:true})
    @Type(() => AdAutoUpdateWithoutAdInput)
    update?: AdAutoUpdateWithoutAdInput;
}
