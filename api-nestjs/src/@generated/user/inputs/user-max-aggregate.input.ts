import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    user_sub?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @HideField()
    moderation_flag?: true;
}
