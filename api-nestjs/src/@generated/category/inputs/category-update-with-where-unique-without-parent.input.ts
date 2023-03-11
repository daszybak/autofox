import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryUpdateWithoutParentInput } from './category-update-without-parent.input';

@InputType()
export class CategoryUpdateWithWhereUniqueWithoutParentInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutParentInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutParentInput)
    data!: CategoryUpdateWithoutParentInput;
}
