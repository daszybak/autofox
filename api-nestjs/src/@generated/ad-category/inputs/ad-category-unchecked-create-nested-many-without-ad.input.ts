import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCategoryCreateWithoutAdInput } from './ad-category-create-without-ad.input';
import { Type } from 'class-transformer';
import { AdCategoryCreateOrConnectWithoutAdInput } from './ad-category-create-or-connect-without-ad.input';
import { AdCategoryCreateManyAdInputEnvelope } from './ad-category-create-many-ad-input-envelope.input';
import { AdCategoryWhereUniqueInput } from './ad-category-where-unique.input';

@InputType()
export class AdCategoryUncheckedCreateNestedManyWithoutAdInput {

    @Field(() => [AdCategoryCreateWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryCreateWithoutAdInput)
    create?: Array<AdCategoryCreateWithoutAdInput>;

    @Field(() => [AdCategoryCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => AdCategoryCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<AdCategoryCreateOrConnectWithoutAdInput>;

    @Field(() => AdCategoryCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => AdCategoryCreateManyAdInputEnvelope)
    createMany?: AdCategoryCreateManyAdInputEnvelope;

    @Field(() => [AdCategoryWhereUniqueInput], {nullable:true})
    @Type(() => AdCategoryWhereUniqueInput)
    connect?: Array<AdCategoryWhereUniqueInput>;
}
