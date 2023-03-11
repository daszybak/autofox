import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdHouseUpdateWithoutAdInput } from './ad-house-update-without-ad.input';
import { Type } from 'class-transformer';
import { AdHouseCreateWithoutAdInput } from './ad-house-create-without-ad.input';

@InputType()
export class AdHouseUpsertWithoutAdInput {

    @Field(() => AdHouseUpdateWithoutAdInput, {nullable:false})
    @Type(() => AdHouseUpdateWithoutAdInput)
    update!: AdHouseUpdateWithoutAdInput;

    @Field(() => AdHouseCreateWithoutAdInput, {nullable:false})
    @Type(() => AdHouseCreateWithoutAdInput)
    create!: AdHouseCreateWithoutAdInput;
}
