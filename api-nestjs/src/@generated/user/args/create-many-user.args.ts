import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCreateManyInput } from '../inputs/user-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserArgs {

    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
}
