import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoTransmissionTypeInput } from './category-create-without-ad-auto-transmission-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput } from './category-create-or-connect-without-ad-auto-transmission-type.input';
import { CategoryUpsertWithoutAdAutoTransmissionTypeInput } from './category-upsert-without-ad-auto-transmission-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoTransmissionTypeInput } from './category-update-without-ad-auto-transmission-type.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoTransmissionTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoTransmissionTypeInput)
    create?: CategoryCreateWithoutAdAutoTransmissionTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput;

    @Field(() => CategoryUpsertWithoutAdAutoTransmissionTypeInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoTransmissionTypeInput)
    upsert?: CategoryUpsertWithoutAdAutoTransmissionTypeInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoTransmissionTypeInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoTransmissionTypeInput)
    update?: CategoryUpdateWithoutAdAutoTransmissionTypeInput;
}
