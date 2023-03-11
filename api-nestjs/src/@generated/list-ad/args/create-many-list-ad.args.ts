import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListAdCreateManyInput } from '../inputs/list-ad-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyListAdArgs {

    @Field(() => [ListAdCreateManyInput], {nullable:false})
    @Type(() => ListAdCreateManyInput)
    data!: Array<ListAdCreateManyInput>;
}
