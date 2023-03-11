import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutAd_houseInput } from '../../ad/inputs/ad-create-nested-one-without-ad-house.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdHouseCreateInput {

    @Field(() => AdCreateNestedOneWithoutAd_houseInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutAd_houseInput)
    ad!: AdCreateNestedOneWithoutAd_houseInput;

    @Field(() => Int, {nullable:true})
    meters?: number;
}
