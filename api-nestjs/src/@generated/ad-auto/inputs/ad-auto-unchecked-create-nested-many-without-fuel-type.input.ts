import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutFuel_typeInput } from './ad-auto-create-without-fuel-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutFuel_typeInput } from './ad-auto-create-or-connect-without-fuel-type.input';
import { AdAutoCreateManyFuel_typeInputEnvelope } from './ad-auto-create-many-fuel-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoUncheckedCreateNestedManyWithoutFuel_typeInput {

    @Field(() => [AdAutoCreateWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutFuel_typeInput)
    create?: Array<AdAutoCreateWithoutFuel_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutFuel_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutFuel_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutFuel_typeInput>;

    @Field(() => AdAutoCreateManyFuel_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyFuel_typeInputEnvelope)
    createMany?: AdAutoCreateManyFuel_typeInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
