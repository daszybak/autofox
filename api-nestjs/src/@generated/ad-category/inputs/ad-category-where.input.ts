import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { AdRelationFilter } from '../../ad/inputs/ad-relation-filter.input';
import { Type } from 'class-transformer';
import { CategoryRelationFilter } from '../../category/inputs/category-relation-filter.input';

@InputType()
export class AdCategoryWhereInput {

    @Field(() => [AdCategoryWhereInput], {nullable:true})
    AND?: Array<AdCategoryWhereInput>;

    @Field(() => [AdCategoryWhereInput], {nullable:true})
    OR?: Array<AdCategoryWhereInput>;

    @Field(() => [AdCategoryWhereInput], {nullable:true})
    NOT?: Array<AdCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => AdRelationFilter, {nullable:true})
    @Type(() => AdRelationFilter)
    ad?: AdRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;
}
