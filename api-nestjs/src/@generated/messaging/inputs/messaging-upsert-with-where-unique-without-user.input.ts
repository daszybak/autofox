import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingWhereUniqueInput } from './messaging-where-unique.input';
import { Type } from 'class-transformer';
import { MessagingUpdateWithoutUserInput } from './messaging-update-without-user.input';
import { MessagingCreateWithoutUserInput } from './messaging-create-without-user.input';

@InputType()
export class MessagingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => MessagingWhereUniqueInput, {nullable:false})
    @Type(() => MessagingWhereUniqueInput)
    where!: MessagingWhereUniqueInput;

    @Field(() => MessagingUpdateWithoutUserInput, {nullable:false})
    @Type(() => MessagingUpdateWithoutUserInput)
    update!: MessagingUpdateWithoutUserInput;

    @Field(() => MessagingCreateWithoutUserInput, {nullable:false})
    @Type(() => MessagingCreateWithoutUserInput)
    create!: MessagingCreateWithoutUserInput;
}
