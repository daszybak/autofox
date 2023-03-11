import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdCreateInput } from '../inputs/list-ad-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneListAdArgs {

    @Field(() => ListAdCreateInput, {nullable:false})
    @Type(() => ListAdCreateInput)
    data!: ListAdCreateInput;
}
