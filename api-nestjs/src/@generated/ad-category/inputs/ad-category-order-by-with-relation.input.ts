import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdOrderByWithRelationInput } from '../../ad/inputs/ad-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { CategoryOrderByWithRelationInput } from '../../category/inputs/category-order-by-with-relation.input';

@InputType()
export class AdCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => AdOrderByWithRelationInput, {nullable:true})
    @Type(() => AdOrderByWithRelationInput)
    ad?: AdOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    category_id?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    category?: CategoryOrderByWithRelationInput;
}
