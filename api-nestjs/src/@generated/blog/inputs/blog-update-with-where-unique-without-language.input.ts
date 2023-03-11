import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogUpdateWithoutLanguageInput } from './blog-update-without-language.input';

@InputType()
export class BlogUpdateWithWhereUniqueWithoutLanguageInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;

    @Field(() => BlogUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => BlogUpdateWithoutLanguageInput)
    data!: BlogUpdateWithoutLanguageInput;
}
