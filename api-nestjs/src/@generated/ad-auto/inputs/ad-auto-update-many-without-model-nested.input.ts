import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutModelInput } from './ad-auto-create-without-model.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutModelInput } from './ad-auto-create-or-connect-without-model.input';
import { AdAutoUpsertWithWhereUniqueWithoutModelInput } from './ad-auto-upsert-with-where-unique-without-model.input';
import { AdAutoCreateManyModelInputEnvelope } from './ad-auto-create-many-model-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutModelInput } from './ad-auto-update-with-where-unique-without-model.input';
import { AdAutoUpdateManyWithWhereWithoutModelInput } from './ad-auto-update-many-with-where-without-model.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutModelNestedInput {

    @Field(() => [AdAutoCreateWithoutModelInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutModelInput)
    create?: Array<AdAutoCreateWithoutModelInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutModelInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutModelInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutModelInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutModelInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutModelInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutModelInput>;

    @Field(() => AdAutoCreateManyModelInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyModelInputEnvelope)
    createMany?: AdAutoCreateManyModelInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutModelInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutModelInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutModelInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutModelInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutModelInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutModelInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
