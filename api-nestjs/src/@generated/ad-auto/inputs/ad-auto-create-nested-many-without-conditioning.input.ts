import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutConditioningInput } from './ad-auto-create-without-conditioning.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutConditioningInput } from './ad-auto-create-or-connect-without-conditioning.input';
import { AdAutoCreateManyConditioningInputEnvelope } from './ad-auto-create-many-conditioning-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedManyWithoutConditioningInput {

    @Field(() => [AdAutoCreateWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutConditioningInput)
    create?: Array<AdAutoCreateWithoutConditioningInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutConditioningInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutConditioningInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutConditioningInput>;

    @Field(() => AdAutoCreateManyConditioningInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyConditioningInputEnvelope)
    createMany?: AdAutoCreateManyConditioningInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
