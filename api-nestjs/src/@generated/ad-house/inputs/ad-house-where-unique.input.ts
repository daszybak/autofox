import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdHouseWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    ad_house_id?: number;

    @Field(() => Int, {nullable:true})
    ad_id?: number;
}
