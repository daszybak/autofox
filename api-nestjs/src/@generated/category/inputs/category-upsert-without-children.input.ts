import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutChildrenInput } from './category-update-without-children.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutChildrenInput } from './category-create-without-children.input';

@InputType()
export class CategoryUpsertWithoutChildrenInput {

    @Field(() => CategoryUpdateWithoutChildrenInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutChildrenInput)
    update!: CategoryUpdateWithoutChildrenInput;

    @Field(() => CategoryCreateWithoutChildrenInput, {nullable:false})
    @Type(() => CategoryCreateWithoutChildrenInput)
    create!: CategoryCreateWithoutChildrenInput;
}
