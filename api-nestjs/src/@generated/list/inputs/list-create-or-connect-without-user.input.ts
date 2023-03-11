import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { Type } from 'class-transformer';
import { ListCreateWithoutUserInput } from './list-create-without-user.input';

@InputType()
export class ListCreateOrConnectWithoutUserInput {

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;

    @Field(() => ListCreateWithoutUserInput, {nullable:false})
    @Type(() => ListCreateWithoutUserInput)
    create!: ListCreateWithoutUserInput;
}
