import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingUpdateManyMutationInput } from '../inputs/messaging-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MessagingWhereInput } from '../inputs/messaging-where.input';

@ArgsType()
export class UpdateManyMessagingArgs {

    @Field(() => MessagingUpdateManyMutationInput, {nullable:false})
    @Type(() => MessagingUpdateManyMutationInput)
    data!: MessagingUpdateManyMutationInput;

    @Field(() => MessagingWhereInput, {nullable:true})
    @Type(() => MessagingWhereInput)
    where?: MessagingWhereInput;
}
