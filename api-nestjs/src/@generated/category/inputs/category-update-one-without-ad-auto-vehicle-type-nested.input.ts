import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoVehicleTypeInput } from './category-create-without-ad-auto-vehicle-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput } from './category-create-or-connect-without-ad-auto-vehicle-type.input';
import { CategoryUpsertWithoutAdAutoVehicleTypeInput } from './category-upsert-without-ad-auto-vehicle-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoVehicleTypeInput } from './category-update-without-ad-auto-vehicle-type.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoVehicleTypeNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoVehicleTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoVehicleTypeInput)
    create?: CategoryCreateWithoutAdAutoVehicleTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoVehicleTypeInput;

    @Field(() => CategoryUpsertWithoutAdAutoVehicleTypeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoVehicleTypeInput)
    upsert?: CategoryUpsertWithoutAdAutoVehicleTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoVehicleTypeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoVehicleTypeInput)
    update?: CategoryUpdateWithoutAdAutoVehicleTypeInput;
}
