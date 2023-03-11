import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoBodyTypeInput } from './category-create-without-ad-auto-body-type.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoBodyTypeInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoBodyTypeInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoBodyTypeInput)
    create!: CategoryCreateWithoutAdAutoBodyTypeInput;
}
