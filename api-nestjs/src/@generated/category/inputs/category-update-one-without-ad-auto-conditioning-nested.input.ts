import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoConditioningInput } from './category-create-without-ad-auto-conditioning.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoConditioningInput } from './category-create-or-connect-without-ad-auto-conditioning.input';
import { CategoryUpsertWithoutAdAutoConditioningInput } from './category-upsert-without-ad-auto-conditioning.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoConditioningInput } from './category-update-without-ad-auto-conditioning.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoConditioningNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoConditioningInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoConditioningInput)
    create?: CategoryCreateWithoutAdAutoConditioningInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoConditioningInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoConditioningInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoConditioningInput;

    @Field(() => CategoryUpsertWithoutAdAutoConditioningInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoConditioningInput)
    upsert?: CategoryUpsertWithoutAdAutoConditioningInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoConditioningInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoConditioningInput)
    update?: CategoryUpdateWithoutAdAutoConditioningInput;
}
