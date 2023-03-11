import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutLanguageInput } from './blog-create-without-language.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutLanguageInput } from './blog-create-or-connect-without-language.input';
import { BlogUpsertWithWhereUniqueWithoutLanguageInput } from './blog-upsert-with-where-unique-without-language.input';
import { BlogCreateManyLanguageInputEnvelope } from './blog-create-many-language-input-envelope.input';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { BlogUpdateWithWhereUniqueWithoutLanguageInput } from './blog-update-with-where-unique-without-language.input';
import { BlogUpdateManyWithWhereWithoutLanguageInput } from './blog-update-many-with-where-without-language.input';
import { BlogScalarWhereInput } from './blog-scalar-where.input';

@InputType()
export class BlogUncheckedUpdateManyWithoutLanguageNestedInput {

    @Field(() => [BlogCreateWithoutLanguageInput], {nullable:true})
    @Type(() => BlogCreateWithoutLanguageInput)
    create?: Array<BlogCreateWithoutLanguageInput>;

    @Field(() => [BlogCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutLanguageInput>;

    @Field(() => [BlogUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => BlogUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<BlogUpsertWithWhereUniqueWithoutLanguageInput>;

    @Field(() => BlogCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => BlogCreateManyLanguageInputEnvelope)
    createMany?: BlogCreateManyLanguageInputEnvelope;

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

    @Field(() => [BlogUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => BlogUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<BlogUpdateWithWhereUniqueWithoutLanguageInput>;

    @Field(() => [BlogUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => BlogUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<BlogUpdateManyWithWhereWithoutLanguageInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    @Type(() => BlogScalarWhereInput)
    deleteMany?: Array<BlogScalarWhereInput>;
}
