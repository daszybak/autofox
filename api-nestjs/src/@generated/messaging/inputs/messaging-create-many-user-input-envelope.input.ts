import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingCreateManyUserInput } from './messaging-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class MessagingCreateManyUserInputEnvelope {

    @Field(() => [MessagingCreateManyUserInput], {nullable:false})
    @Type(() => MessagingCreateManyUserInput)
    data!: Array<MessagingCreateManyUserInput>;
}
