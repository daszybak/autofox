import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserAvgAggregateInput {

    @HideField()
    moderation_flag?: true;
}
