import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingCreateManyInput } from '../inputs/messaging-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessagingArgs {

    @Field(() => [MessagingCreateManyInput], {nullable:false})
    @Type(() => MessagingCreateManyInput)
    data!: Array<MessagingCreateManyInput>;
}
