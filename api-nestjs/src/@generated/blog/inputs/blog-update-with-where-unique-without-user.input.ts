import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogUpdateWithoutUserInput } from './blog-update-without-user.input';

@InputType()
export class BlogUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;

    @Field(() => BlogUpdateWithoutUserInput, {nullable:false})
    @Type(() => BlogUpdateWithoutUserInput)
    data!: BlogUpdateWithoutUserInput;
}
