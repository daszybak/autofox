import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutBody_typeInput } from './ad-auto-create-without-body-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutBody_typeInput } from './ad-auto-create-or-connect-without-body-type.input';
import { AdAutoCreateManyBody_typeInputEnvelope } from './ad-auto-create-many-body-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoUncheckedCreateNestedManyWithoutBody_typeInput {

    @Field(() => [AdAutoCreateWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutBody_typeInput)
    create?: Array<AdAutoCreateWithoutBody_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutBody_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutBody_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutBody_typeInput>;

    @Field(() => AdAutoCreateManyBody_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyBody_typeInputEnvelope)
    createMany?: AdAutoCreateManyBody_typeInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
