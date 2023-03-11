import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoConditionTypeInput } from './category-create-without-ad-auto-condition-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoConditionTypeInput } from './category-create-or-connect-without-ad-auto-condition-type.input';
import { CategoryUpsertWithoutAdAutoConditionTypeInput } from './category-upsert-without-ad-auto-condition-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoConditionTypeInput } from './category-update-without-ad-auto-condition-type.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoConditionTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoConditionTypeInput)
    create?: CategoryCreateWithoutAdAutoConditionTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoConditionTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoConditionTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoConditionTypeInput;

    @Field(() => CategoryUpsertWithoutAdAutoConditionTypeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoConditionTypeInput)
    upsert?: CategoryUpsertWithoutAdAutoConditionTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoConditionTypeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoConditionTypeInput)
    update?: CategoryUpdateWithoutAdAutoConditionTypeInput;
}
