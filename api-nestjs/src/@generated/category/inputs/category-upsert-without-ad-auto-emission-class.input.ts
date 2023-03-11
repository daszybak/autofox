import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoEmissionClassInput } from './category-update-without-ad-auto-emission-class.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoEmissionClassInput } from './category-create-without-ad-auto-emission-class.input';

@InputType()
export class CategoryUpsertWithoutAdAutoEmissionClassInput {

    @Field(() => CategoryUpdateWithoutAdAutoEmissionClassInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoEmissionClassInput)
    update!: CategoryUpdateWithoutAdAutoEmissionClassInput;

    @Field(() => CategoryCreateWithoutAdAutoEmissionClassInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoEmissionClassInput)
    create!: CategoryCreateWithoutAdAutoEmissionClassInput;
}
