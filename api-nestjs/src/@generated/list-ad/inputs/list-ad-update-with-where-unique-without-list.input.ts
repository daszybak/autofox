import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { Type } from 'class-transformer';
import { ListAdUpdateWithoutListInput } from './list-ad-update-without-list.input';

@InputType()
export class ListAdUpdateWithWhereUniqueWithoutListInput {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;

    @Field(() => ListAdUpdateWithoutListInput, {nullable:false})
    @Type(() => ListAdUpdateWithoutListInput)
    data!: ListAdUpdateWithoutListInput;
}
