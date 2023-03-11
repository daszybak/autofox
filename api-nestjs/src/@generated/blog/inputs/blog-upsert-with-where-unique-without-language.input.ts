import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogUpdateWithoutLanguageInput } from './blog-update-without-language.input';
import { BlogCreateWithoutLanguageInput } from './blog-create-without-language.input';

@InputType()
export class BlogUpsertWithWhereUniqueWithoutLanguageInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;

    @Field(() => BlogUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => BlogUpdateWithoutLanguageInput)
    update!: BlogUpdateWithoutLanguageInput;

    @Field(() => BlogCreateWithoutLanguageInput, {nullable:false})
    @Type(() => BlogCreateWithoutLanguageInput)
    create!: BlogCreateWithoutLanguageInput;
}
