import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoModelInput } from './category-update-without-ad-auto-model.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoModelInput } from './category-create-without-ad-auto-model.input';

@InputType()
export class CategoryUpsertWithoutAdAutoModelInput {

    @Field(() => CategoryUpdateWithoutAdAutoModelInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoModelInput)
    update!: CategoryUpdateWithoutAdAutoModelInput;

    @Field(() => CategoryCreateWithoutAdAutoModelInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoModelInput)
    create!: CategoryCreateWithoutAdAutoModelInput;
}
