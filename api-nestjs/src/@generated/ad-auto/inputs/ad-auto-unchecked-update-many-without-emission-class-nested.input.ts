import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutEmission_classInput } from './ad-auto-create-without-emission-class.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutEmission_classInput } from './ad-auto-create-or-connect-without-emission-class.input';
import { AdAutoUpsertWithWhereUniqueWithoutEmission_classInput } from './ad-auto-upsert-with-where-unique-without-emission-class.input';
import { AdAutoCreateManyEmission_classInputEnvelope } from './ad-auto-create-many-emission-class-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutEmission_classInput } from './ad-auto-update-with-where-unique-without-emission-class.input';
import { AdAutoUpdateManyWithWhereWithoutEmission_classInput } from './ad-auto-update-many-with-where-without-emission-class.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUncheckedUpdateManyWithoutEmission_classNestedInput {

    @Field(() => [AdAutoCreateWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutEmission_classInput)
    create?: Array<AdAutoCreateWithoutEmission_classInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutEmission_classInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutEmission_classInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutEmission_classInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutEmission_classInput>;

    @Field(() => AdAutoCreateManyEmission_classInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyEmission_classInputEnvelope)
    createMany?: AdAutoCreateManyEmission_classInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutEmission_classInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutEmission_classInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutEmission_classInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutEmission_classInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
