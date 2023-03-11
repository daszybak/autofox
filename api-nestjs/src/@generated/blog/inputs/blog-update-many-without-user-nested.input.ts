import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutUserInput } from './blog-create-without-user.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutUserInput } from './blog-create-or-connect-without-user.input';
import { BlogUpsertWithWhereUniqueWithoutUserInput } from './blog-upsert-with-where-unique-without-user.input';
import { BlogCreateManyUserInputEnvelope } from './blog-create-many-user-input-envelope.input';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { BlogUpdateWithWhereUniqueWithoutUserInput } from './blog-update-with-where-unique-without-user.input';
import { BlogUpdateManyWithWhereWithoutUserInput } from './blog-update-many-with-where-without-user.input';
import { BlogScalarWhereInput } from './blog-scalar-where.input';

@InputType()
export class BlogUpdateManyWithoutUserNestedInput {

    @Field(() => [BlogCreateWithoutUserInput], {nullable:true})
    @Type(() => BlogCreateWithoutUserInput)
    create?: Array<BlogCreateWithoutUserInput>;

    @Field(() => [BlogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutUserInput>;

    @Field(() => [BlogUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BlogUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BlogUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BlogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BlogCreateManyUserInputEnvelope)
    createMany?: BlogCreateManyUserInputEnvelope;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    set?: Array<BlogWhereUniqueInput>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    disconnect?: Array<BlogWhereUniqueInput>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    delete?: Array<BlogWhereUniqueInput>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Array<BlogWhereUniqueInput>;

    @Field(() => [BlogUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BlogUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BlogUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BlogUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BlogUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BlogUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    @Type(() => BlogScalarWhereInput)
    deleteMany?: Array<BlogScalarWhereInput>;
}
