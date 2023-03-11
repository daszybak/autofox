import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutModelInput } from './ad-auto-create-without-model.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutModelInput } from './ad-auto-create-or-connect-without-model.input';
import { AdAutoCreateManyModelInputEnvelope } from './ad-auto-create-many-model-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoUncheckedCreateNestedManyWithoutModelInput {

    @Field(() => [AdAutoCreateWithoutModelInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutModelInput)
    create?: Array<AdAutoCreateWithoutModelInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutModelInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutModelInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutModelInput>;

    @Field(() => AdAutoCreateManyModelInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyModelInputEnvelope)
    createMany?: AdAutoCreateManyModelInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
