import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoColorExteriorInput } from './category-update-without-ad-auto-color-exterior.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoColorExteriorInput } from './category-create-without-ad-auto-color-exterior.input';

@InputType()
export class CategoryUpsertWithoutAdAutoColorExteriorInput {

    @Field(() => CategoryUpdateWithoutAdAutoColorExteriorInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoColorExteriorInput)
    update!: CategoryUpdateWithoutAdAutoColorExteriorInput;

    @Field(() => CategoryCreateWithoutAdAutoColorExteriorInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoColorExteriorInput)
    create!: CategoryCreateWithoutAdAutoColorExteriorInput;
}
