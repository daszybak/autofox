import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoConditionTypeInput } from './category-create-without-ad-auto-condition-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoConditionTypeInput } from './category-create-or-connect-without-ad-auto-condition-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoConditionTypeInput {

    @Field(() => CategoryCreateWithoutAdAutoConditionTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoConditionTypeInput)
    create?: CategoryCreateWithoutAdAutoConditionTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoConditionTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoConditionTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoConditionTypeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
