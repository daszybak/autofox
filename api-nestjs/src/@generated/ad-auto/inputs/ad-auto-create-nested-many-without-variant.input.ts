import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutVariantInput } from './ad-auto-create-without-variant.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutVariantInput } from './ad-auto-create-or-connect-without-variant.input';
import { AdAutoCreateManyVariantInputEnvelope } from './ad-auto-create-many-variant-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedManyWithoutVariantInput {

    @Field(() => [AdAutoCreateWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutVariantInput)
    create?: Array<AdAutoCreateWithoutVariantInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutVariantInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutVariantInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutVariantInput>;

    @Field(() => AdAutoCreateManyVariantInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyVariantInputEnvelope)
    createMany?: AdAutoCreateManyVariantInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
