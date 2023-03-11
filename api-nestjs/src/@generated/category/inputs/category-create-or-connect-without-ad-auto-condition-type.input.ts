import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoConditionTypeInput } from './category-create-without-ad-auto-condition-type.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoConditionTypeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoConditionTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoConditionTypeInput)
    create!: CategoryCreateWithoutAdAutoConditionTypeInput;
}
