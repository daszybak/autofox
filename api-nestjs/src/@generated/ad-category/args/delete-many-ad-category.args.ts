import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryWhereInput } from '../inputs/ad-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdCategoryArgs {

    @Field(() => AdCategoryWhereInput, {nullable:true})
    @Type(() => AdCategoryWhereInput)
    where?: AdCategoryWhereInput;
}
