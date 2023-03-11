import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';

@ObjectType()
export class Messaging {

    @Field(() => ID, {nullable:false})
    messaging_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:false})
    address!: string;

    /**
     * 0 - iOS, 1 - Android, 2 - Web, 3 - Email, 4 - SMS
     */
    @Field(() => Int, {nullable:false,description:'0 - iOS, 1 - Android, 2 - Web, 3 - Email, 4 - SMS'})
    device_type!: number;

    @Field(() => String, {nullable:false})
    platform!: string;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => User, {nullable:false})
    user?: User;
}
