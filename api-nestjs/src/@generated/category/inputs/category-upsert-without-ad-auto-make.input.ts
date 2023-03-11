import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoMakeInput } from './category-update-without-ad-auto-make.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoMakeInput } from './category-create-without-ad-auto-make.input';

@InputType()
export class CategoryUpsertWithoutAdAutoMakeInput {

    @Field(() => CategoryUpdateWithoutAdAutoMakeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoMakeInput)
    update!: CategoryUpdateWithoutAdAutoMakeInput;

    @Field(() => CategoryCreateWithoutAdAutoMakeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoMakeInput)
    create!: CategoryCreateWithoutAdAutoMakeInput;
}
