import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from '../inputs/list-ad-where-unique.input';
import { Type } from 'class-transformer';
import { ListAdCreateInput } from '../inputs/list-ad-create.input';
import { ListAdUpdateInput } from '../inputs/list-ad-update.input';

@ArgsType()
export class UpsertOneListAdArgs {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;

    @Field(() => ListAdCreateInput, {nullable:false})
    @Type(() => ListAdCreateInput)
    create!: ListAdCreateInput;

    @Field(() => ListAdUpdateInput, {nullable:false})
    @Type(() => ListAdUpdateInput)
    update!: ListAdUpdateInput;
}
