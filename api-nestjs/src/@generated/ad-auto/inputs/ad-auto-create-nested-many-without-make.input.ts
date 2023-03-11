import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutMakeInput } from './ad-auto-create-without-make.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutMakeInput } from './ad-auto-create-or-connect-without-make.input';
import { AdAutoCreateManyMakeInputEnvelope } from './ad-auto-create-many-make-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedManyWithoutMakeInput {

    @Field(() => [AdAutoCreateWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutMakeInput)
    create?: Array<AdAutoCreateWithoutMakeInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutMakeInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutMakeInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutMakeInput>;

    @Field(() => AdAutoCreateManyMakeInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyMakeInputEnvelope)
    createMany?: AdAutoCreateManyMakeInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
