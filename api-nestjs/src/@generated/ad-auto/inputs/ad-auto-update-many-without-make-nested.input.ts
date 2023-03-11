import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutMakeInput } from './ad-auto-create-without-make.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutMakeInput } from './ad-auto-create-or-connect-without-make.input';
import { AdAutoUpsertWithWhereUniqueWithoutMakeInput } from './ad-auto-upsert-with-where-unique-without-make.input';
import { AdAutoCreateManyMakeInputEnvelope } from './ad-auto-create-many-make-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';
import { AdAutoUpdateWithWhereUniqueWithoutMakeInput } from './ad-auto-update-with-where-unique-without-make.input';
import { AdAutoUpdateManyWithWhereWithoutMakeInput } from './ad-auto-update-many-with-where-without-make.input';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';

@InputType()
export class AdAutoUpdateManyWithoutMakeNestedInput {

    @Field(() => [AdAutoCreateWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutMakeInput)
    create?: Array<AdAutoCreateWithoutMakeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutMakeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutMakeInput>;

    @Field(() => [AdAutoUpsertWithWhereUniqueWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoUpsertWithWhereUniqueWithoutMakeInput)
    upsert?: Array<AdAutoUpsertWithWhereUniqueWithoutMakeInput>;

    @Field(() => AdAutoCreateManyMakeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyMakeInputEnvelope)
    createMany?: AdAutoCreateManyMakeInputEnvelope;

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

    @Field(() => [AdAutoUpdateWithWhereUniqueWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoUpdateWithWhereUniqueWithoutMakeInput)
    update?: Array<AdAutoUpdateWithWhereUniqueWithoutMakeInput>;

    @Field(() => [AdAutoUpdateManyWithWhereWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoUpdateManyWithWhereWithoutMakeInput)
    updateMany?: Array<AdAutoUpdateManyWithWhereWithoutMakeInput>;

    @Field(() => [AdAutoScalarWhereInput], {nullable:true})
    @Type(() => AdAutoScalarWhereInput)
    deleteMany?: Array<AdAutoScalarWhereInput>;
}
