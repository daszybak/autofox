import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';

@InputType()
export class AdCategoryScalarWhereInput {

    @Field(() => [AdCategoryScalarWhereInput], {nullable:true})
    AND?: Array<AdCategoryScalarWhereInput>;

    @Field(() => [AdCategoryScalarWhereInput], {nullable:true})
    OR?: Array<AdCategoryScalarWhereInput>;

    @Field(() => [AdCategoryScalarWhereInput], {nullable:true})
    NOT?: Array<AdCategoryScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;
}
