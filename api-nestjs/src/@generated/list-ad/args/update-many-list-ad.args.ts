import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdUncheckedUpdateManyInput } from '../inputs/list-ad-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ListAdWhereInput } from '../inputs/list-ad-where.input';

@ArgsType()
export class UpdateManyListAdArgs {

    @Field(() => ListAdUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ListAdUncheckedUpdateManyInput)
    data!: ListAdUncheckedUpdateManyInput;

    @Field(() => ListAdWhereInput, {nullable:true})
    @Type(() => ListAdWhereInput)
    where?: ListAdWhereInput;
}
