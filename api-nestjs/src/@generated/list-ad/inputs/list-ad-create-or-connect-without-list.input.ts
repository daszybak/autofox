import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { Type } from 'class-transformer';
import { ListAdCreateWithoutListInput } from './list-ad-create-without-list.input';

@InputType()
export class ListAdCreateOrConnectWithoutListInput {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;

    @Field(() => ListAdCreateWithoutListInput, {nullable:false})
    @Type(() => ListAdCreateWithoutListInput)
    create!: ListAdCreateWithoutListInput;
}
