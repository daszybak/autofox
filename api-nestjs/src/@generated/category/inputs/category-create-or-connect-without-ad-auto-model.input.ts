import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoModelInput } from './category-create-without-ad-auto-model.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoModelInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoModelInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoModelInput)
    create!: CategoryCreateWithoutAdAutoModelInput;
}
