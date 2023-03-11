import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdAutoWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    ad_auto_id?: number;

    @Field(() => Int, {nullable:true})
    ad_id?: number;
}
