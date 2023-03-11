import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListWhereInput } from '../inputs/list-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyListArgs {

    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: ListWhereInput;
}
