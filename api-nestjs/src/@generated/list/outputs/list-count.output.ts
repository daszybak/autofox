import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ListCount {

    @Field(() => Int, {nullable:false})
    ListAd?: number;
}
