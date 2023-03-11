import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAd_houseInput } from './ad-create-without-ad-house.input';

@InputType()
export class AdCreateOrConnectWithoutAd_houseInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutAd_houseInput, {nullable:false})
    @Type(() => AdCreateWithoutAd_houseInput)
    create!: AdCreateWithoutAd_houseInput;
}
