import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutColor_exteriorInput } from './ad-auto-create-without-color-exterior.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutColor_exteriorInput } from './ad-auto-create-or-connect-without-color-exterior.input';
import { AdAutoCreateManyColor_exteriorInputEnvelope } from './ad-auto-create-many-color-exterior-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedManyWithoutColor_exteriorInput {

    @Field(() => [AdAutoCreateWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutColor_exteriorInput)
    create?: Array<AdAutoCreateWithoutColor_exteriorInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutColor_exteriorInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutColor_exteriorInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutColor_exteriorInput>;

    @Field(() => AdAutoCreateManyColor_exteriorInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyColor_exteriorInputEnvelope)
    createMany?: AdAutoCreateManyColor_exteriorInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
