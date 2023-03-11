import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutLanguageInput } from './blog-create-without-language.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutLanguageInput } from './blog-create-or-connect-without-language.input';
import { BlogCreateManyLanguageInputEnvelope } from './blog-create-many-language-input-envelope.input';
import { BlogWhereUniqueInput } from './blog-where-unique.input';

@InputType()
export class BlogUncheckedCreateNestedManyWithoutLanguageInput {

    @Field(() => [BlogCreateWithoutLanguageInput], {nullable:true})
    @Type(() => BlogCreateWithoutLanguageInput)
    create?: Array<BlogCreateWithoutLanguageInput>;

    @Field(() => [BlogCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutLanguageInput>;

    @Field(() => BlogCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => BlogCreateManyLanguageInputEnvelope)
    createMany?: BlogCreateManyLanguageInputEnvelope;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Array<BlogWhereUniqueInput>;
}
