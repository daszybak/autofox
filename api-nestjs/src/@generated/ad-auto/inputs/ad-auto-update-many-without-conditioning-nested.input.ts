import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutConditioningInput } from './ad-auto-create-without-conditioning.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutConditioningInput } from './ad-auto-create-or-connect-without-conditioning.input';
import { AdAutoUpsertWithWhereUniqueWithoutConditioningInput } from './ad-auto-upsert-with-where-unique-without-conditioning.input';
import { AdAutoCreateManyConditioningInputEnvelope } from './ad-auto-create-many-conditioning-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutConditioningInput } from './ad-auto-update-with-where-unique-without-conditioning.input';
import { AdAutoUpdateManyWithWhereWithoutConditioningInput } from './ad-auto-update-many-with-where-without-conditioning.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutConditioningNestedInput {

    @Field(() => [AdAutoCreateWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutConditioningInput)
    create?: Array<AdAutoCreateWithoutConditioningInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutConditioningInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutConditioningInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutConditioningInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutConditioningInput>;

    @Field(() => AdAutoCreateManyConditioningInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyConditioningInputEnvelope)
    createMany?: AdAutoCreateManyConditioningInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutConditioningInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutConditioningInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutConditioningInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutConditioningInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
