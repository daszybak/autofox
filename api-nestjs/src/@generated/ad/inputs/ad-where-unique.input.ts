import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    ad_id?: number;
}
