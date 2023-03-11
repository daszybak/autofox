import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutColor_exteriorInput } from './ad-auto-create-without-color-exterior.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutColor_exteriorInput } from './ad-auto-create-or-connect-without-color-exterior.input';
import { AdAutoUpsertWithWhereUniqueWithoutColor_exteriorInput } from './ad-auto-upsert-with-where-unique-without-color-exterior.input';
import { AdAutoCreateManyColor_exteriorInputEnvelope } from './ad-auto-create-many-color-exterior-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutColor_exteriorInput } from './ad-auto-update-with-where-unique-without-color-exterior.input';
import { AdAutoUpdateManyWithWhereWithoutColor_exteriorInput } from './ad-auto-update-many-with-where-without-color-exterior.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUncheckedUpdateManyWithoutColor_exteriorNestedInput {

    @Field(() => [AdAutoCreateWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutColor_exteriorInput)
    create?: Array<AdAutoCreateWithoutColor_exteriorInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutColor_exteriorInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutColor_exteriorInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutColor_exteriorInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutColor_exteriorInput>;

    @Field(() => AdAutoCreateManyColor_exteriorInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyColor_exteriorInputEnvelope)
    createMany?: AdAutoCreateManyColor_exteriorInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutColor_exteriorInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutColor_exteriorInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutColor_exteriorInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutColor_exteriorInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
