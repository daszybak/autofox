import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserSumAggregateInput {

    @HideField()
    moderation_flag?: true;
}
