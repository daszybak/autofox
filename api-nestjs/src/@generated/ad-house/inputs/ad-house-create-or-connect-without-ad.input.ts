import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdHouseWhereUniqueInput } from './ad-house-where-unique.input';
import { Type } from 'class-transformer';
import { AdHouseCreateWithoutAdInput } from './ad-house-create-without-ad.input';

@InputType()
export class AdHouseCreateOrConnectWithoutAdInput {

    @Field(() => AdHouseWhereUniqueInput, {nullable:false})
    @Type(() => AdHouseWhereUniqueInput)
    where!: AdHouseWhereUniqueInput;

    @Field(() => AdHouseCreateWithoutAdInput, {nullable:false})
    @Type(() => AdHouseCreateWithoutAdInput)
    create!: AdHouseCreateWithoutAdInput;
}
