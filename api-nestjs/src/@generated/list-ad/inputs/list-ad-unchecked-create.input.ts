import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ListAdUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    list_id!: number;
}
