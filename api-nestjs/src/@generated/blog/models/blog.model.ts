import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Category } from '../../category/models/category.model';
import { User } from '../../user/models/user.model';

@ObjectType()
export class Blog {

    @Field(() => ID, {nullable:false})
    blog_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Int, {nullable:true})
    language_cid!: number | null;

    @Field(() => Category, {nullable:true})
    language?: Category | null;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    /**
     * 0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error
     */
    @Field(() => Int, {nullable:false,defaultValue:0,description:'0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error'})
    moderation_flag!: number;
}
