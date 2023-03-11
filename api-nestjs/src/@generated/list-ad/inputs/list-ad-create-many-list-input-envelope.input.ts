import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdCreateManyListInput } from './list-ad-create-many-list.input';
import { Type } from 'class-transformer';

@InputType()
export class ListAdCreateManyListInputEnvelope {

    @Field(() => [ListAdCreateManyListInput], {nullable:false})
    @Type(() => ListAdCreateManyListInput)
    data!: Array<ListAdCreateManyListInput>;
}
