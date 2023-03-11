import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateManyUserInput } from './list-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class ListCreateManyUserInputEnvelope {

    @Field(() => [ListCreateManyUserInput], {nullable:false})
    @Type(() => ListCreateManyUserInput)
    data!: Array<ListCreateManyUserInput>;
}
