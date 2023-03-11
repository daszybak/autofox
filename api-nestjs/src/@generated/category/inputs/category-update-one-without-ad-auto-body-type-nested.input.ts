import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoBodyTypeInput } from './category-create-without-ad-auto-body-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoBodyTypeInput } from './category-create-or-connect-without-ad-auto-body-type.input';
import { CategoryUpsertWithoutAdAutoBodyTypeInput } from './category-upsert-without-ad-auto-body-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoBodyTypeInput } from './category-update-without-ad-auto-body-type.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoBodyTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoBodyTypeInput)
    create?: CategoryCreateWithoutAdAutoBodyTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoBodyTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoBodyTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoBodyTypeInput;

    @Field(() => CategoryUpsertWithoutAdAutoBodyTypeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoBodyTypeInput)
    upsert?: CategoryUpsertWithoutAdAutoBodyTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoBodyTypeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoBodyTypeInput)
    update?: CategoryUpdateWithoutAdAutoBodyTypeInput;
}
