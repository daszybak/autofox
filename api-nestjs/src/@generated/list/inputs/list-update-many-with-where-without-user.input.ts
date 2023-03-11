import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListScalarWhereInput } from './list-scalar-where.input';
import { Type } from 'class-transformer';
import { ListUpdateManyMutationInput } from './list-update-many-mutation.input';

@InputType()
export class ListUpdateManyWithWhereWithoutUserInput {

    @Field(() => ListScalarWhereInput, {nullable:false})
    @Type(() => ListScalarWhereInput)
    where!: ListScalarWhereInput;

    @Field(() => ListUpdateManyMutationInput, {nullable:false})
    @Type(() => ListUpdateManyMutationInput)
    data!: ListUpdateManyMutationInput;
}
