import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ListCreateManyInput } from '../inputs/list-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyListArgs {

    @Field(() => [ListCreateManyInput], {nullable:false})
    @Type(() => ListCreateManyInput)
    data!: Array<ListCreateManyInput>;
}
