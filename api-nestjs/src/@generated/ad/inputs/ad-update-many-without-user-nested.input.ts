import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutUserInput } from './ad-create-without-user.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutUserInput } from './ad-create-or-connect-without-user.input';
import { AdUpsertWithWhereUniqueWithoutUserInput } from './ad-upsert-with-where-unique-without-user.input';
import { AdCreateManyUserInputEnvelope } from './ad-create-many-user-input-envelope.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithWhereUniqueWithoutUserInput } from './ad-update-with-where-unique-without-user.input';
import { AdUpdateManyWithWhereWithoutUserInput } from './ad-update-many-with-where-without-user.input';
import { AdScalarWhereInput } from './ad-scalar-where.input';

@InputType()
export class AdUpdateManyWithoutUserNestedInput {

    @Field(() => [AdCreateWithoutUserInput], {nullable:true})
    @Type(() => AdCreateWithoutUserInput)
    create?: Array<AdCreateWithoutUserInput>;

    @Field(() => [AdCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AdCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AdCreateOrConnectWithoutUserInput>;

    @Field(() => [AdUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AdUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AdUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AdCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AdCreateManyUserInputEnvelope)
    createMany?: AdCreateManyUserInputEnvelope;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    set?: Array<AdWhereUniqueInput>;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    disconnect?: Array<AdWhereUniqueInput>;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    delete?: Array<AdWhereUniqueInput>;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: Array<AdWhereUniqueInput>;

    @Field(() => [AdUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AdUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AdUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AdUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AdUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AdUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AdScalarWhereInput], {nullable:true})
    @Type(() => AdScalarWhereInput)
    deleteMany?: Array<AdScalarWhereInput>;
}
