import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListWhereUniqueInput } from '../inputs/list-where-unique.input';
import { Type } from 'class-transformer';
import { ListCreateInput } from '../inputs/list-create.input';
import { ListUpdateInput } from '../inputs/list-update.input';

@ArgsType()
export class UpsertOneListArgs {

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;

    @Field(() => ListCreateInput, {nullable:false})
    @Type(() => ListCreateInput)
    create!: ListCreateInput;

    @Field(() => ListUpdateInput, {nullable:false})
    @Type(() => ListUpdateInput)
    update!: ListUpdateInput;
}
