import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdHouseUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    ad_house_id?: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:true})
    meters?: number;
}
