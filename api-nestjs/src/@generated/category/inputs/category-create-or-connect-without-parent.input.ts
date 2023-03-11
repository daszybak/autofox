import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutParentInput } from './category-create-without-parent.input';

@InputType()
export class CategoryCreateOrConnectWithoutParentInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutParentInput, {nullable:false})
    @Type(() => CategoryCreateWithoutParentInput)
    create!: CategoryCreateWithoutParentInput;
}
