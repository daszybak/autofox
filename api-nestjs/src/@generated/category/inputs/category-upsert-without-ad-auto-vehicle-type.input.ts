import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoVehicleTypeInput } from './category-update-without-ad-auto-vehicle-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoVehicleTypeInput } from './category-create-without-ad-auto-vehicle-type.input';

@InputType()
export class CategoryUpsertWithoutAdAutoVehicleTypeInput {

    @Field(() => CategoryUpdateWithoutAdAutoVehicleTypeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoVehicleTypeInput)
    update!: CategoryUpdateWithoutAdAutoVehicleTypeInput;

    @Field(() => CategoryCreateWithoutAdAutoVehicleTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoVehicleTypeInput)
    create!: CategoryCreateWithoutAdAutoVehicleTypeInput;
}
