import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoVehicleTypeInput } from './category-create-without-ad-auto-vehicle-type.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoVehicleTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoVehicleTypeInput)
    create!: CategoryCreateWithoutAdAutoVehicleTypeInput;
}
