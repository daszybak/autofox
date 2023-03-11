import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingWhereUniqueInput } from './messaging-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingCreateWithoutUserInput } from './messaging-create-without-user.input';

@InputType()
export class MessagingCreateOrConnectWithoutUserInput {

    @Field(() => MessagingWhereUniqueInput, {nullable:false})
    @Type(() => MessagingWhereUniqueInput)
    where!: MessagingWhereUniqueInput;

    @Field(() => MessagingCreateWithoutUserInput, {nullable:false})
    @Type(() => MessagingCreateWithoutUserInput)
    create!: MessagingCreateWithoutUserInput;
}
