import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoWhereInput } from './ad-auto-where.input';

@InputType()
export class AdAutoRelationFilter {

    @Field(() => AdAutoWhereInput, {nullable:true})
    is?: AdAutoWhereInput;

    @Field(() => AdAutoWhereInput, {nullable:true})
    isNot?: AdAutoWhereInput;
}
