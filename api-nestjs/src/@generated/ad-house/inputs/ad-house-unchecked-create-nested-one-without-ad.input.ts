import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdHouseCreateWithoutAdInput } from './ad-house-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdHouseCreateOrConnectWithoutAdInput } from './ad-house-create-or-connect-without-ad.input';
import { AdHouseWhereUniqueInput } from './ad-house-where-unique.input';

@InputType()
export class AdHouseUncheckedCreateNestedOneWithoutAdInput {

    @Field(() => AdHouseCreateWithoutAdInput, {nullable:true})
    @Type(() => AdHouseCreateWithoutAdInput)
    create?: AdHouseCreateWithoutAdInput;

    @Field(() => AdHouseCreateOrConnectWithoutAdInput, {nullable:true})
    @Type(() => AdHouseCreateOrConnectWithoutAdInput)
    connectOrCreate?: AdHouseCreateOrConnectWithoutAdInput;

    @Field(() => AdHouseWhereUniqueInput, {nullable:true})
    @Type(() => AdHouseWhereUniqueInput)
    connect?: AdHouseWhereUniqueInput;
}
