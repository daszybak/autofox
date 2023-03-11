import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListUpdateManyMutationInput } from '../inputs/list-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ListWhereInput } from '../inputs/list-where.input';

@ArgsType()
export class UpdateManyListArgs {

    @Field(() => ListUpdateManyMutationInput, {nullable:false})
    @Type(() => ListUpdateManyMutationInput)
    data!: ListUpdateManyMutationInput;

    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: ListWhereInput;
}
