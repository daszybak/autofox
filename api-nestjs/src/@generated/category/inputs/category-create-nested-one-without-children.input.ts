import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutChildrenInput } from './category-create-without-children.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutChildrenInput } from './category-create-or-connect-without-children.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutChildrenInput {

    @Field(() => CategoryCreateWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryCreateWithoutChildrenInput)
    create?: CategoryCreateWithoutChildrenInput;

    @Field(() => CategoryCreateOrConnectWithoutChildrenInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutChildrenInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
