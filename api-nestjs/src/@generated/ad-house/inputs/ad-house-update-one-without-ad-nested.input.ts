import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdHouseCreateWithoutAdInput } from './ad-house-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdHouseCreateOrConnectWithoutAdInput } from './ad-house-create-or-connect-without-ad.input';
import { AdHouseUpsertWithoutAdInput } from './ad-house-upsert-without-ad.input';
import { AdHouseWhereUniqueInput } from './ad-house-where-unique.input';
import { AdHouseUpdateWithoutAdInput } from './ad-house-update-without-ad.input';

@InputType()
export class AdHouseUpdateOneWithoutAdNestedInput {

    @Field(() => AdHouseCreateWithoutAdInput, {nullable:true})
    @Type(() => AdHouseCreateWithoutAdInput)
    create?: AdHouseCreateWithoutAdInput;

    @Field(() => AdHouseCreateOrConnectWithoutAdInput, {nullable:true})
    @Type(() => AdHouseCreateOrConnectWithoutAdInput)
    connectOrCreate?: AdHouseCreateOrConnectWithoutAdInput;

    @Field(() => AdHouseUpsertWithoutAdInput, {nullable:true})
    @Type(() => AdHouseUpsertWithoutAdInput)
    upsert?: AdHouseUpsertWithoutAdInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AdHouseWhereUniqueInput, {nullable:true})
    @Type(() => AdHouseWhereUniqueInput)
    connect?: AdHouseWhereUniqueInput;

    @Field(() => AdHouseUpdateWithoutAdInput, {nullable:true})
    @Type(() => AdHouseUpdateWithoutAdInput)
    update?: AdHouseUpdateWithoutAdInput;
}
