import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoConditioningInput } from './category-create-without-ad-auto-conditioning.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoConditioningInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoConditioningInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoConditioningInput)
    create!: CategoryCreateWithoutAdAutoConditioningInput;
}
