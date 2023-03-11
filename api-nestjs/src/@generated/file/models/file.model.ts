import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ad } from '../../ad/models/ad.model';
import { User } from '../../user/models/user.model';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    file_id!: number;

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Ad, {nullable:false})
    ad?: Ad;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
