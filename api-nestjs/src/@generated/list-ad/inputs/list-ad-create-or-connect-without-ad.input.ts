import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { Type } from 'class-transformer';
import { ListAdCreateWithoutAdInput } from './list-ad-create-without-ad.input';

@InputType()
export class ListAdCreateOrConnectWithoutAdInput {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;

    @Field(() => ListAdCreateWithoutAdInput, {nullable:false})
    @Type(() => ListAdCreateWithoutAdInput)
    create!: ListAdCreateWithoutAdInput;
}
