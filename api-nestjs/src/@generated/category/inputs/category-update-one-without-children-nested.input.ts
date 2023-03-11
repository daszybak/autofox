import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutChildrenInput } from './category-create-without-children.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutChildrenInput } from './category-create-or-connect-without-children.input';
import { CategoryUpsertWithoutChildrenInput } from './category-upsert-without-children.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutChildrenInput } from './category-update-without-children.input';

@InputType()
export class CategoryUpdateOneWithoutChildrenNestedInput {

    @Field(() => CategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryCreateWithoutChildrenInput)
    create?: CategoryCreateWithoutChildrenInput;

    @Field(() => CategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => CategoryUpsertWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutChildrenInput)
    upsert?: CategoryUpsertWithoutChildrenInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutChildrenInput)
    update?: CategoryUpdateWithoutChildrenInput;
}
