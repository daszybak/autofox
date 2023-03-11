import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoMakeInput } from './category-create-without-ad-auto-make.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoMakeInput } from './category-create-or-connect-without-ad-auto-make.input';
import { CategoryUpsertWithoutAdAutoMakeInput } from './category-upsert-without-ad-auto-make.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoMakeInput } from './category-update-without-ad-auto-make.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoMakeNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoMakeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoMakeInput)
    create?: CategoryCreateWithoutAdAutoMakeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoMakeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoMakeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoMakeInput;

    @Field(() => CategoryUpsertWithoutAdAutoMakeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoMakeInput)
    upsert?: CategoryUpsertWithoutAdAutoMakeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoMakeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoMakeInput)
    update?: CategoryUpdateWithoutAdAutoMakeInput;
}
