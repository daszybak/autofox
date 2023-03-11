import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ad } from '../../ad/models/ad.model';
import { Category } from '../../category/models/category.model';

@ObjectType()
export class AdCategory {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Ad, {nullable:false})
    ad?: Ad;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Category, {nullable:false})
    category?: Category;
}
