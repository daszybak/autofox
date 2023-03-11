import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from '../inputs/category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateInput } from '../inputs/category-create.input';
import { CategoryUpdateInput } from '../inputs/category-update.input';

@ArgsType()
export class UpsertOneCategoryArgs {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateInput, {nullable:false})
    @Type(() => CategoryCreateInput)
    create!: CategoryCreateInput;

    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    update!: CategoryUpdateInput;
}
