import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutUserInput } from './blog-create-without-user.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutUserInput } from './blog-create-or-connect-without-user.input';
import { BlogCreateManyUserInputEnvelope } from './blog-create-many-user-input-envelope.input';
import { BlogWhereUniqueInput } from './blog-where-unique.input';

@InputType()
export class BlogCreateNestedManyWithoutUserInput {

    @Field(() => [BlogCreateWithoutUserInput], {nullable:true})
    @Type(() => BlogCreateWithoutUserInput)
    create?: Array<BlogCreateWithoutUserInput>;

    @Field(() => [BlogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutUserInput>;

    @Field(() => BlogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BlogCreateManyUserInputEnvelope)
    createMany?: BlogCreateManyUserInputEnvelope;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Array<BlogWhereUniqueInput>;
}
