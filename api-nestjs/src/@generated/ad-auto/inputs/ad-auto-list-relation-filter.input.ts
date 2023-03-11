import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereInput } from './ad-auto-where.input';

@InputType()
export class AdAutoListRelationFilter {

    @Field(() => AdAutoWhereInput, {nullable:true})
    every?: AdAutoWhereInput;

    @Field(() => AdAutoWhereInput, {nullable:true})
    some?: AdAutoWhereInput;

    @Field(() => AdAutoWhereInput, {nullable:true})
    none?: AdAutoWhereInput;
}
