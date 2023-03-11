import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import * as Scalars from 'graphql-scalars';
import { ListAdCreateNestedManyWithoutListInput } from '../../list-ad/inputs/list-ad-create-nested-many-without-list.input';

@InputType()
export class ListCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    @Validator.IsIn([0, 1])
    list_type?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => Scalars.GraphQLJSON, {nullable:false})
    search_params!: string;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_email?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_push?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_notifiable_by_sms?: boolean;

    @Field(() => ListAdCreateNestedManyWithoutListInput, {nullable:true})
    ListAd?: ListAdCreateNestedManyWithoutListInput;
}
