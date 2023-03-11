import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoVehicleTypeInput } from './category-create-without-ad-auto-vehicle-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput } from './category-create-or-connect-without-ad-auto-vehicle-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput {

    @Field(() => CategoryCreateWithoutAdAutoVehicleTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoVehicleTypeInput)
    create?: CategoryCreateWithoutAdAutoVehicleTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
