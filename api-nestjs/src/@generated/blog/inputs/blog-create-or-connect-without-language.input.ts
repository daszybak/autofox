import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutLanguageInput } from './blog-create-without-language.input';

@InputType()
export class BlogCreateOrConnectWithoutLanguageInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;

    @Field(() => BlogCreateWithoutLanguageInput, {nullable:false})
    @Type(() => BlogCreateWithoutLanguageInput)
    create!: BlogCreateWithoutLanguageInput;
}
