import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoFuelTypeInput } from './category-update-without-ad-auto-fuel-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoFuelTypeInput } from './category-create-without-ad-auto-fuel-type.input';

@InputType()
export class CategoryUpsertWithoutAdAutoFuelTypeInput {

    @Field(() => CategoryUpdateWithoutAdAutoFuelTypeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoFuelTypeInput)
    update!: CategoryUpdateWithoutAdAutoFuelTypeInput;

    @Field(() => CategoryCreateWithoutAdAutoFuelTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoFuelTypeInput)
    create!: CategoryCreateWithoutAdAutoFuelTypeInput;
}
