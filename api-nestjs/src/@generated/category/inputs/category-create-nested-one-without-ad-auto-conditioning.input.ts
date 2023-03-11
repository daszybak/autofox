import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoConditioningInput } from './category-create-without-ad-auto-conditioning.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoConditioningInput } from './category-create-or-connect-without-ad-auto-conditioning.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoConditioningInput {

    @Field(() => CategoryCreateWithoutAdAutoConditioningInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoConditioningInput)
    create?: CategoryCreateWithoutAdAutoConditioningInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoConditioningInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoConditioningInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoConditioningInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
