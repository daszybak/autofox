import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingWhereUniqueInput } from './messaging-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingUpdateWithoutUserInput } from './messaging-update-without-user.input';

@InputType()
export class MessagingUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => MessagingWhereUniqueInput, {nullable:false})
    @Type(() => MessagingWhereUniqueInput)
    where!: MessagingWhereUniqueInput;

    @Field(() => MessagingUpdateWithoutUserInput, {nullable:false})
    @Type(() => MessagingUpdateWithoutUserInput)
    data!: MessagingUpdateWithoutUserInput;
}
