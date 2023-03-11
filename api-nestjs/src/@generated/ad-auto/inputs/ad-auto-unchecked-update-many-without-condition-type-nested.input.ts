import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutCondition_typeInput } from './ad-auto-create-without-condition-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutCondition_typeInput } from './ad-auto-create-or-connect-without-condition-type.input';
import { AdAutoUpsertWithWhereUniqueWithoutCondition_typeInput } from './ad-auto-upsert-with-where-unique-without-condition-type.input';
import { AdAutoCreateManyCondition_typeInputEnvelope } from './ad-auto-create-many-condition-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutCondition_typeInput } from './ad-auto-update-with-where-unique-without-condition-type.input';
import { AdAutoUpdateManyWithWhereWithoutCondition_typeInput } from './ad-auto-update-many-with-where-without-condition-type.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUncheckedUpdateManyWithoutCondition_typeNestedInput {

    @Field(() => [AdAutoCreateWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutCondition_typeInput)
    create?: Array<AdAutoCreateWithoutCondition_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutCondition_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutCondition_typeInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutCondition_typeInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutCondition_typeInput>;

    @Field(() => AdAutoCreateManyCondition_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyCondition_typeInputEnvelope)
    createMany?: AdAutoCreateManyCondition_typeInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutCondition_typeInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutCondition_typeInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutCondition_typeInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutCondition_typeInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
