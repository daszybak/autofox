import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutColor_interiorInput } from './ad-auto-create-without-color-interior.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutColor_interiorInput } from './ad-auto-create-or-connect-without-color-interior.input';
import { AdAutoUpsertWithWhereUniqueWithoutColor_interiorInput } from './ad-auto-upsert-with-where-unique-without-color-interior.input';
import { AdAutoCreateManyColor_interiorInputEnvelope } from './ad-auto-create-many-color-interior-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutColor_interiorInput } from './ad-auto-update-with-where-unique-without-color-interior.input';
import { AdAutoUpdateManyWithWhereWithoutColor_interiorInput } from './ad-auto-update-many-with-where-without-color-interior.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutColor_interiorNestedInput {

    @Field(() => [AdAutoCreateWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutColor_interiorInput)
    create?: Array<AdAutoCreateWithoutColor_interiorInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutColor_interiorInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutColor_interiorInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutColor_interiorInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutColor_interiorInput>;

    @Field(() => AdAutoCreateManyColor_interiorInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyColor_interiorInputEnvelope)
    createMany?: AdAutoCreateManyColor_interiorInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    set?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    disconnect?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    delete?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutColor_interiorInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutColor_interiorInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutColor_interiorInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutColor_interiorInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
