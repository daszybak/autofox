import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutUserInput } from './blog-create-without-user.input';

@InputType()
export class BlogCreateOrConnectWithoutUserInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;

    @Field(() => BlogCreateWithoutUserInput, {nullable:false})
    @Type(() => BlogCreateWithoutUserInput)
    create!: BlogCreateWithoutUserInput;
}
