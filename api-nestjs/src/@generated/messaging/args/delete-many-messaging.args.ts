import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingWhereInput } from '../inputs/messaging-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMessagingArgs {

    @Field(() => MessagingWhereInput, {nullable:true})
    @Type(() => MessagingWhereInput)
    where?: MessagingWhereInput;
}
