import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoMakeInput } from './category-create-without-ad-auto-make.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoMakeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoMakeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoMakeInput)
    create!: CategoryCreateWithoutAdAutoMakeInput;
}
