import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereInput } from './ad-where.input';
import { Type } from 'class-transformer';

@InputType()
export class AdRelationFilter {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    is?: AdWhereInput;

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    isNot?: AdWhereInput;
}
