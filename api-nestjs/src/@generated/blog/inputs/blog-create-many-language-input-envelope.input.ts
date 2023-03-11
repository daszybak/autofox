import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateManyLanguageInput } from './blog-create-many-language.input';
import { Type } from 'class-transformer';

@InputType()
export class BlogCreateManyLanguageInputEnvelope {

    @Field(() => [BlogCreateManyLanguageInput], {nullable:false})
    @Type(() => BlogCreateManyLanguageInput)
    data!: Array<BlogCreateManyLanguageInput>;
}
