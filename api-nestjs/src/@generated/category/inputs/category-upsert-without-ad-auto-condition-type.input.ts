import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoConditionTypeInput } from './category-update-without-ad-auto-condition-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoConditionTypeInput } from './category-create-without-ad-auto-condition-type.input';

@InputType()
export class CategoryUpsertWithoutAdAutoConditionTypeInput {

    @Field(() => CategoryUpdateWithoutAdAutoConditionTypeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoConditionTypeInput)
    update!: CategoryUpdateWithoutAdAutoConditionTypeInput;

    @Field(() => CategoryCreateWithoutAdAutoConditionTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoConditionTypeInput)
    create!: CategoryCreateWithoutAdAutoConditionTypeInput;
}
