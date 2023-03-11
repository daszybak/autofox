import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { Type } from 'class-transformer';
import { ListAdUpdateWithoutListInput } from './list-ad-update-without-list.input';
import { ListAdCreateWithoutListInput } from './list-ad-create-without-list.input';

@InputType()
export class ListAdUpsertWithWhereUniqueWithoutListInput {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;

    @Field(() => ListAdUpdateWithoutListInput, {nullable:false})
    @Type(() => ListAdUpdateWithoutListInput)
    update!: ListAdUpdateWithoutListInput;

    @Field(() => ListAdCreateWithoutListInput, {nullable:false})
    @Type(() => ListAdCreateWithoutListInput)
    create!: ListAdCreateWithoutListInput;
}
