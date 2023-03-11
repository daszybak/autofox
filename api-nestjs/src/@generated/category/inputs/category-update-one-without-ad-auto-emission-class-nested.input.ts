import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoEmissionClassInput } from './category-create-without-ad-auto-emission-class.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoEmissionClassInput } from './category-create-or-connect-without-ad-auto-emission-class.input';
import { CategoryUpsertWithoutAdAutoEmissionClassInput } from './category-upsert-without-ad-auto-emission-class.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoEmissionClassInput } from './category-update-without-ad-auto-emission-class.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoEmissionClassInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoEmissionClassInput)
    create?: CategoryCreateWithoutAdAutoEmissionClassInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoEmissionClassInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoEmissionClassInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoEmissionClassInput;

    @Field(() => CategoryUpsertWithoutAdAutoEmissionClassInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoEmissionClassInput)
    upsert?: CategoryUpsertWithoutAdAutoEmissionClassInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoEmissionClassInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoEmissionClassInput)
    update?: CategoryUpdateWithoutAdAutoEmissionClassInput;
}
