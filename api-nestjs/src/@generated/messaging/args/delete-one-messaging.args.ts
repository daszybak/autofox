import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingWhereUniqueInput } from '../inputs/messaging-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMessagingArgs {

    @Field(() => MessagingWhereUniqueInput, {nullable:false})
    @Type(() => MessagingWhereUniqueInput)
    where!: MessagingWhereUniqueInput;
}
