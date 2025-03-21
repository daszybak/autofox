import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../inputs/user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateInput } from '../inputs/user-create.input';
import { UserUpdateInput } from '../inputs/user-update.input';

@ArgsType()
export class UpsertOneUserArgs {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: UserCreateInput;

    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: UserUpdateInput;
}
