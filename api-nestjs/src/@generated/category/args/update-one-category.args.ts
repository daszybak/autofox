import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryUpdateInput } from '../inputs/category-update.input';
import { Type } from 'class-transformer';
import { CategoryWhereUniqueInput } from '../inputs/category-where-unique.input';

@ArgsType()
export class UpdateOneCategoryArgs {

    @Field(() => CategoryUpdateInput, {nullable:false})
    @Type(() => CategoryUpdateInput)
    data!: CategoryUpdateInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;
}
