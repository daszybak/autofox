import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { Type } from 'class-transformer';
import { ListUpdateWithoutUserInput } from './list-update-without-user.input';
import { ListCreateWithoutUserInput } from './list-create-without-user.input';

@InputType()
export class ListUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;

    @Field(() => ListUpdateWithoutUserInput, {nullable:false})
    @Type(() => ListUpdateWithoutUserInput)
    update!: ListUpdateWithoutUserInput;

    @Field(() => ListCreateWithoutUserInput, {nullable:false})
    @Type(() => ListCreateWithoutUserInput)
    create!: ListCreateWithoutUserInput;
}
