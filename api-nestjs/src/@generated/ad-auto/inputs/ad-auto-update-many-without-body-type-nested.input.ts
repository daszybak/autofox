import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutBody_typeInput } from './ad-auto-create-without-body-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutBody_typeInput } from './ad-auto-create-or-connect-without-body-type.input';
import { AdAutoUpsertWithWhereUniqueWithoutBody_typeInput } from './ad-auto-upsert-with-where-unique-without-body-type.input';
import { AdAutoCreateManyBody_typeInputEnvelope } from './ad-auto-create-many-body-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutBody_typeInput } from './ad-auto-update-with-where-unique-without-body-type.input';
import { AdAutoUpdateManyWithWhereWithoutBody_typeInput } from './ad-auto-update-many-with-where-without-body-type.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutBody_typeNestedInput {

    @Field(() => [AdAutoCreateWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutBody_typeInput)
    create?: Array<AdAutoCreateWithoutBody_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutBody_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutBody_typeInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutBody_typeInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutBody_typeInput>;

    @Field(() => AdAutoCreateManyBody_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyBody_typeInputEnvelope)
    createMany?: AdAutoCreateManyBody_typeInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutBody_typeInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutBody_typeInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutBody_typeInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutBody_typeInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
