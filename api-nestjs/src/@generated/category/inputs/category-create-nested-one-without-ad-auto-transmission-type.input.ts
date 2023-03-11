import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoTransmissionTypeInput } from './category-create-without-ad-auto-transmission-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput } from './category-create-or-connect-without-ad-auto-transmission-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput {

    @Field(() => CategoryCreateWithoutAdAutoTransmissionTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoTransmissionTypeInput)
    create?: CategoryCreateWithoutAdAutoTransmissionTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
