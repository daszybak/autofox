import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutEmission_classInput } from './ad-auto-create-without-emission-class.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutEmission_classInput } from './ad-auto-create-or-connect-without-emission-class.input';
import { AdAutoCreateManyEmission_classInputEnvelope } from './ad-auto-create-many-emission-class-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedManyWithoutEmission_classInput {

    @Field(() => [AdAutoCreateWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutEmission_classInput)
    create?: Array<AdAutoCreateWithoutEmission_classInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutEmission_classInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutEmission_classInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutEmission_classInput>;

    @Field(() => AdAutoCreateManyEmission_classInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyEmission_classInputEnvelope)
    createMany?: AdAutoCreateManyEmission_classInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
