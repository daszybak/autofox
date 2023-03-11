import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { Type } from 'class-transformer';
import { ListCreateWithoutListAdInput } from './list-create-without-list-ad.input';

@InputType()
export class ListCreateOrConnectWithoutListAdInput {

    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: ListWhereUniqueInput;

    @Field(() => ListCreateWithoutListAdInput, {nullable:false})
    @Type(() => ListCreateWithoutListAdInput)
    create!: ListCreateWithoutListAdInput;
}
