import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryCreateWithoutCategoryInput } from './ad-category-create-without-category.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateOrConnectWithoutCategoryInput } from './ad-category-create-or-connect-without-category.input';
import { AdCategoryCreateManyCategoryInputEnvelope } from './ad-category-create-many-category-input-envelope.input';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';

@InputType()
export class AdCategoryUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [AdCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryCreateWithoutCategoryInput)
    create?: Array<AdCategoryCreateWithoutCategoryInput>;

    @Field(() => [AdCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<AdCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => AdCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => AdCategoryCreateManyCategoryInputEnvelope)
    createMany?: AdCategoryCreateManyCategoryInputEnvelope;

    @Field(() => [AdCategoryWhereUniqueInput], {nullable:true})
    @Type(() => AdCategoryWhereUniqueInput)
    connect?: Array<AdCategoryWhereUniqueInput>;
}
