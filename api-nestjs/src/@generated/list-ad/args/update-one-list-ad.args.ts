import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdUpdateInput } from '../inputs/list-ad-update.input';
import { Type } from 'class-transformer';
import { ListAdWhereUniqueInput } from '../inputs/list-ad-where-unique.input';

@ArgsType()
export class UpdateOneListAdArgs {

    @Field(() => ListAdUpdateInput, {nullable:false})
    @Type(() => ListAdUpdateInput)
    data!: ListAdUpdateInput;

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;
}
