import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryCreateWithoutAdInput } from './ad-category-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateOrConnectWithoutAdInput } from './ad-category-create-or-connect-without-ad.input';
import { AdCategoryUpsertWithWhereUniqueWithoutAdInput } from './ad-category-upsert-with-where-unique-without-ad.input';
import { AdCategoryCreateManyAdInputEnvelope } from './ad-category-create-many-ad-input-envelope.input';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';
import { AdCategoryUpdateWithWhereUniqueWithoutAdInput } from './ad-category-update-with-where-unique-without-ad.input';
import { AdCategoryUpdateManyWithWhereWithoutAdInput } from './ad-category-update-many-with-where-without-ad.input';
import { AdCategoryScalarWhereInput } from './ad-category-scalar-where.input';

@InputType()
export class AdCategoryUncheckedUpdateManyWithoutAdNestedInput {

    @Field(() => [AdCategoryCreateWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryCreateWithoutAdInput)
    create?: Array<AdCategoryCreateWithoutAdInput>;

    @Field(() => [AdCategoryCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<AdCategoryCreateOrConnectWithoutAdInput>;

    @Field(() => [AdCategoryUpsertWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryUpsertWithWhereUniqueWithoutAdInput)
    upsert?: Array<AdCategoryUpsertWithWhereUniqueWithoutAdInput>;

    @Field(() => AdCategoryCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => AdCategoryCreateManyAdInputEnvelope)
    createMany?: AdCategoryCreateManyAdInputEnvelope;

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

    @Field(() => [AdCategoryUpdateWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryUpdateWithWhereUniqueWithoutAdInput)
    update?: Array<AdCategoryUpdateWithWhereUniqueWithoutAdInput>;

    @Field(() => [AdCategoryUpdateManyWithWhereWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryUpdateManyWithWhereWithoutAdInput)
    updateMany?: Array<AdCategoryUpdateManyWithWhereWithoutAdInput>;

    @Field(() => [AdCategoryScalarWhereInput], {nullable:true})
    @Type(() => AdCategoryScalarWhereInput)
    deleteMany?: Array<AdCategoryScalarWhereInput>;
}
