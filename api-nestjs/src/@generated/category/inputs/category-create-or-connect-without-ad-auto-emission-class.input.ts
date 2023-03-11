import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoEmissionClassInput } from './category-create-without-ad-auto-emission-class.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoEmissionClassInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoEmissionClassInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoEmissionClassInput)
    create!: CategoryCreateWithoutAdAutoEmissionClassInput;
}
