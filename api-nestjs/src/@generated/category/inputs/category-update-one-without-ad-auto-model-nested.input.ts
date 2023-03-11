import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoModelInput } from './category-create-without-ad-auto-model.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoModelInput } from './category-create-or-connect-without-ad-auto-model.input';
import { CategoryUpsertWithoutAdAutoModelInput } from './category-upsert-without-ad-auto-model.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoModelInput } from './category-update-without-ad-auto-model.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoModelNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoModelInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoModelInput)
    create?: CategoryCreateWithoutAdAutoModelInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoModelInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoModelInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoModelInput;

    @Field(() => CategoryUpsertWithoutAdAutoModelInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoModelInput)
    upsert?: CategoryUpsertWithoutAdAutoModelInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoModelInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoModelInput)
    update?: CategoryUpdateWithoutAdAutoModelInput;
}
