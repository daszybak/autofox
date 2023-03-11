import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutAdAutoColorInteriorInput } from './category-update-without-ad-auto-color-interior.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoColorInteriorInput } from './category-create-without-ad-auto-color-interior.input';

@InputType()
export class CategoryUpsertWithoutAdAutoColorInteriorInput {

    @Field(() => CategoryUpdateWithoutAdAutoColorInteriorInput, {nullable:false})
    @Type(() => CategoryUpdateWithoutAdAutoColorInteriorInput)
    update!: CategoryUpdateWithoutAdAutoColorInteriorInput;

    @Field(() => CategoryCreateWithoutAdAutoColorInteriorInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoColorInteriorInput)
    create!: CategoryCreateWithoutAdAutoColorInteriorInput;
}
