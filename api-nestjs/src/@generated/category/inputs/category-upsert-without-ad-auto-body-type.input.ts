import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoBodyTypeInput } from './category-update-without-ad-auto-body-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoBodyTypeInput } from './category-create-without-ad-auto-body-type.input';

@InputType()
export class CategoryUpsertWithoutAdAutoBodyTypeInput {

    @Field(() => CategoryUpdateWithoutAdAutoBodyTypeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoBodyTypeInput)
    update!: CategoryUpdateWithoutAdAutoBodyTypeInput;

    @Field(() => CategoryCreateWithoutAdAutoBodyTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoBodyTypeInput)
    create!: CategoryCreateWithoutAdAutoBodyTypeInput;
}
