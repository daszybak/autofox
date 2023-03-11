import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoTransmissionTypeInput } from './category-update-without-ad-auto-transmission-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoTransmissionTypeInput } from './category-create-without-ad-auto-transmission-type.input';

@InputType()
export class CategoryUpsertWithoutAdAutoTransmissionTypeInput {

    @Field(() => CategoryUpdateWithoutAdAutoTransmissionTypeInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoTransmissionTypeInput)
    update!: CategoryUpdateWithoutAdAutoTransmissionTypeInput;

    @Field(() => CategoryCreateWithoutAdAutoTransmissionTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoTransmissionTypeInput)
    create!: CategoryCreateWithoutAdAutoTransmissionTypeInput;
}
