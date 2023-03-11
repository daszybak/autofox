import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutCondition_typeInput } from './ad-auto-create-without-condition-type.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutCondition_typeInput } from './ad-auto-create-or-connect-without-condition-type.input';
import { AdAutoCreateManyCondition_typeInputEnvelope } from './ad-auto-create-many-condition-type-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoUncheckedCreateNestedManyWithoutCondition_typeInput {

    @Field(() => [AdAutoCreateWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutCondition_typeInput)
    create?: Array<AdAutoCreateWithoutCondition_typeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutCondition_typeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutCondition_typeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutCondition_typeInput>;

    @Field(() => AdAutoCreateManyCondition_typeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyCondition_typeInputEnvelope)
    createMany?: AdAutoCreateManyCondition_typeInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
