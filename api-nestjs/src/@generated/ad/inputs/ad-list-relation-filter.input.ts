import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AdListRelationFilter {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    every?: AdWhereInput;

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    some?: AdWhereInput;

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    none?: AdWhereInput;
}
