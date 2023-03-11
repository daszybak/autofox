import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCategoryUncheckedUpdateManyInput } from '../inputs/ad-category-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { AdCategoryWhereInput } from '../inputs/ad-category-where.input';

@ArgsType()
export class UpdateManyAdCategoryArgs {

    @Field(() => AdCategoryUncheckedUpdateManyInput, {nullable:false})
    @Type(() => AdCategoryUncheckedUpdateManyInput)
    data!: AdCategoryUncheckedUpdateManyInput;

    @Field(() => AdCategoryWhereInput, {nullable:true})
    @Type(() => AdCategoryWhereInput)
    where?: AdCategoryWhereInput;
}
