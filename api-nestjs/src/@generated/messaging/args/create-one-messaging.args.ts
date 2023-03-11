import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingCreateInput } from '../inputs/messaging-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMessagingArgs {

    @Field(() => MessagingCreateInput, {nullable:false})
    @Type(() => MessagingCreateInput)
    data!: MessagingCreateInput;
}
