import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { Type } from 'class-transformer';
import { ListUpdateWithoutUserInput } from './list-update-without-user.input';

@InputType()
export class ListUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;

    @Field(() => ListUpdateWithoutUserInput, {nullable:false})
    @Type(() => ListUpdateWithoutUserInput)
    data!: ListUpdateWithoutUserInput;
}
