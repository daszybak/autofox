import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessagingScalarWhereInput } from './messaging-scalar-where.input';
import { Type } from 'class-transformer';
import { MessagingUpdateManyMutationInput } from './messaging-update-many-mutation.input';

@InputType()
export class MessagingUpdateManyWithWhereWithoutUserInput {

    @Field(() => MessagingScalarWhereInput, {nullable:false})
    @Type(() => MessagingScalarWhereInput)
    where!: MessagingScalarWhereInput;

    @Field(() => MessagingUpdateManyMutationInput, {nullable:false})
    @Type(() => MessagingUpdateManyMutationInput)
    data!: MessagingUpdateManyMutationInput;
}
