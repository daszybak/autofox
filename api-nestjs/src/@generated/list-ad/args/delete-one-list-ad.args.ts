import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from '../inputs/list-ad-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneListAdArgs {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;
}
