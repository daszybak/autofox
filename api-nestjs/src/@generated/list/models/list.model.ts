import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { ListAd } from '../../list-ad/models/list-ad.model';
import { ListCount } from '../outputs/list-count.output';

@ObjectType()
export class List {

    @Field(() => ID, {nullable:false})
    list_id!: number;

    /**
     * 0 - Favorites, 1 - Saved Search
     */
    @Field(() => Int, {nullable:false,defaultValue:0,description:'0 - Favorites, 1 - Saved Search'})
    list_type!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    search_params!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_notifiable_by_email!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_notifiable_by_push!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_notifiable_by_sms!: boolean;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [ListAd], {nullable:true})
    ListAd?: Array<ListAd>;

    @Field(() => ListCount, {nullable:false})
    _count?: ListCount;
}
