import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ad } from '../../ad/models/ad.model';
import { List } from '../../list/models/list.model';

@ObjectType()
export class ListAd {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Ad, {nullable:false})
    ad?: Ad;

    @Field(() => Int, {nullable:false})
    list_id!: number;

    @Field(() => List, {nullable:false})
    list?: List;
}
