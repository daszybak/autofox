import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryCreateWithoutCategoryInput } from './ad-category-create-without-category.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateOrConnectWithoutCategoryInput } from './ad-category-create-or-connect-without-category.input';
import { AdCategoryUpsertWithWhereUniqueWithoutCategoryInput } from './ad-category-upsert-with-where-unique-without-category.input';
import { AdCategoryCreateManyCategoryInputEnvelope } from './ad-category-create-many-category-input-envelope.input';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { AdCategoryUpdateWithWhereUniqueWithoutCategoryInput } from './ad-category-update-with-where-unique-without-category.input';
import { AdCategoryUpdateManyWithWhereWithoutCategoryInput } from './ad-category-update-many-with-where-without-category.input';
import { AdCategoryScalarWhereInput } from './ad-category-scalar-where.input';

@InputType()
export class AdCategoryUncheckedUpdateManyWithoutCategoryNestedInput {

    @Field(() => [AdCategoryCreateWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryCreateWithoutCategoryInput)
    create?: Array<AdCategoryCreateWithoutCategoryInput>;

    @Field(() => [AdCategoryCreateOrConnectWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryCreateOrConnectWithoutCategoryInput)
    connectOrCreate?: Array<AdCategoryCreateOrConnectWithoutCategoryInput>;

    @Field(() => [AdCategoryUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryUpsertWithWhereUniqueWithoutCategoryInput)
    upsert?: Array<AdCategoryUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => AdCategoryCreateManyCategoryInputEnvelope, {nullable:true})
    @Type(() => AdCategoryCreateManyCategoryInputEnvelope)
    createMany?: AdCategoryCreateManyCategoryInputEnvelope;

    @Field(() => [AdCategoryWhereUniqueInput], {nullable:true})
    @Type(() => AdCategoryWhereUniqueInput)
    set?: Array<AdCategoryWhereUniqueInput>;

    @Field(() => [AdCategoryWhereUniqueInput], {nullable:true})
    @Type(() => AdCategoryWhereUniqueInput)
    disconnect?: Array<AdCategoryWhereUniqueInput>;

    @Field(() => [AdCategoryWhereUniqueInput], {nullable:true})
    @Type(() => AdCategoryWhereUniqueInput)
    delete?: Array<AdCategoryWhereUniqueInput>;

    @Field(() => [AdCategoryWhereUniqueInput], {nullable:true})
    @Type(() => AdCategoryWhereUniqueInput)
    connect?: Array<AdCategoryWhereUniqueInput>;

    @Field(() => [AdCategoryUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryUpdateWithWhereUniqueWithoutCategoryInput)
    update?: Array<AdCategoryUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [AdCategoryUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    @Type(() => AdCategoryUpdateManyWithWhereWithoutCategoryInput)
    updateMany?: Array<AdCategoryUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [AdCategoryScalarWhereInput], {nullable:true})
    @Type(() => AdCategoryScalarWhereInput)
    deleteMany?: Array<AdCategoryScalarWhereInput>;
}
