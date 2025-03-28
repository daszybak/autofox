import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CategoryUpdateManyMutationInput } from '../inputs/category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CategoryWhereInput } from '../inputs/category-where.input';

@ArgsType()
export class UpdateManyCategoryArgs {

    @Field(() => CategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => CategoryUpdateManyMutationInput)
    data!: CategoryUpdateManyMutationInput;

    @Field(() => CategoryWhereInput, {nullable:true})
    @Type(() => CategoryWhereInput)
    where?: CategoryWhereInput;
}
