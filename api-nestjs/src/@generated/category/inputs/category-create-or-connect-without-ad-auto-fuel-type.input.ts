import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoFuelTypeInput } from './category-create-without-ad-auto-fuel-type.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoFuelTypeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoFuelTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoFuelTypeInput)
    create!: CategoryCreateWithoutAdAutoFuelTypeInput;
}
