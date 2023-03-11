import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoTransmissionTypeInput } from './category-create-without-ad-auto-transmission-type.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoTransmissionTypeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoTransmissionTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoTransmissionTypeInput)
    create!: CategoryCreateWithoutAdAutoTransmissionTypeInput;
}
