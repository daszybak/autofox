import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdWhereInput } from '../inputs/list-ad-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyListAdArgs {

    @Field(() => ListAdWhereInput, {nullable:true})
    @Type(() => ListAdWhereInput)
    where?: ListAdWhereInput;
}
