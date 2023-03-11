import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessagingWhereInput } from '../inputs/messaging-where.input';
import { Type } from 'class-transformer';
import { MessagingOrderByWithRelationInput } from '../inputs/messaging-order-by-with-relation.input';
import { MessagingWhereUniqueInput } from '../inputs/messaging-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MessagingScalarFieldEnum } from '../enums/messaging-scalar-field.enum';

@ArgsType()
export class FindFirstMessagingArgs {

    @Field(() => MessagingWhereInput, {nullable:true})
    @Type(() => MessagingWhereInput)
    where?: MessagingWhereInput;

    @Field(() => [MessagingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MessagingOrderByWithRelationInput>;

    @Field(() => MessagingWhereUniqueInput, {nullable:true})
    cursor?: MessagingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MessagingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MessagingScalarFieldEnum>;
}
