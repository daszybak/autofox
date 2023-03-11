import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateWithoutColor_interiorInput } from './ad-auto-create-without-color-interior.input';
import { Type } from 'class-transformer';
import { AdAutoCreateOrConnectWithoutColor_interiorInput } from './ad-auto-create-or-connect-without-color-interior.input';
import { AdAutoCreateManyColor_interiorInputEnvelope } from './ad-auto-create-many-color-interior-input-envelope.input';
import { AdAutoWhereUniqueInput } from './ad-auto-where-unique.input';

@InputType()
export class AdAutoCreateNestedManyWithoutColor_interiorInput {

    @Field(() => [AdAutoCreateWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoCreateWithoutColor_interiorInput)
    create?: Array<AdAutoCreateWithoutColor_interiorInput>;

    @Field(() => [AdAutoCreateOrConnectWithoutColor_interiorInput], {nullable:true})
    @Type(() => AdAutoCreateOrConnectWithoutColor_interiorInput)
    connectOrCreate?: Array<AdAutoCreateOrConnectWithoutColor_interiorInput>;

    @Field(() => AdAutoCreateManyColor_interiorInputEnvelope, {nullable:true})
    @Type(() => AdAutoCreateManyColor_interiorInputEnvelope)
    createMany?: AdAutoCreateManyColor_interiorInputEnvelope;

    @Field(() => [AdAutoWhereUniqueInput], {nullable:true})
    @Type(() => AdAutoWhereUniqueInput)
    connect?: Array<AdAutoWhereUniqueInput>;
}
