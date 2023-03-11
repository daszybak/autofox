import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoConditioningInput } from './category-update-without-ad-auto-conditioning.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoConditioningInput } from './category-create-without-ad-auto-conditioning.input';

@InputType()
export class CategoryUpsertWithoutAdAutoConditioningInput {

    @Field(() => CategoryUpdateWithoutAdAutoConditioningInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoConditioningInput)
    update!: CategoryUpdateWithoutAdAutoConditioningInput;

    @Field(() => CategoryCreateWithoutAdAutoConditioningInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoConditioningInput)
    create!: CategoryCreateWithoutAdAutoConditioningInput;
}
