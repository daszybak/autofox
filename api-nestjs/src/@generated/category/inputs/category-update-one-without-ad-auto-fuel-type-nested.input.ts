import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoFuelTypeInput } from './category-create-without-ad-auto-fuel-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoFuelTypeInput } from './category-create-or-connect-without-ad-auto-fuel-type.input';
import { CategoryUpsertWithoutAdAutoFuelTypeInput } from './category-upsert-without-ad-auto-fuel-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoFuelTypeInput } from './category-update-without-ad-auto-fuel-type.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoFuelTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoFuelTypeInput)
    create?: CategoryCreateWithoutAdAutoFuelTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoFuelTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoFuelTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoFuelTypeInput;

    @Field(() => CategoryUpsertWithoutAdAutoFuelTypeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoFuelTypeInput)
    upsert?: CategoryUpsertWithoutAdAutoFuelTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoFuelTypeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoFuelTypeInput)
    update?: CategoryUpdateWithoutAdAutoFuelTypeInput;
}
