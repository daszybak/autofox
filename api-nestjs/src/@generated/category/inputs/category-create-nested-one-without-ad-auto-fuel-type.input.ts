import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoFuelTypeInput } from './category-create-without-ad-auto-fuel-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoFuelTypeInput } from './category-create-or-connect-without-ad-auto-fuel-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoFuelTypeInput {

    @Field(() => CategoryCreateWithoutAdAutoFuelTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoFuelTypeInput)
    create?: CategoryCreateWithoutAdAutoFuelTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoFuelTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoFuelTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoFuelTypeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
