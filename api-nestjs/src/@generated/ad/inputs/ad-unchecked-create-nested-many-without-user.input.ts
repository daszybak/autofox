import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutUserInput } from './ad-create-without-user.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutUserInput } from './ad-create-or-connect-without-user.input';
import { AdCreateManyUserInputEnvelope } from './ad-create-many-user-input-envelope.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';

@InputType()
export class AdUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AdCreateWithoutUserInput], {nullable:true})
    @Type(() => AdCreateWithoutUserInput)
    create?: Array<AdCreateWithoutUserInput>;

    @Field(() => [AdCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AdCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AdCreateOrConnectWithoutUserInput>;

    @Field(() => AdCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AdCreateManyUserInputEnvelope)
    createMany?: AdCreateManyUserInputEnvelope;

    @Field(() => [AdWhereUniqueInput], {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: Array<AdWhereUniqueInput>;
}
