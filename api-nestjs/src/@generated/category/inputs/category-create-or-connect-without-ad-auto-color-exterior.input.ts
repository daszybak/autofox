import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoColorExteriorInput } from './category-create-without-ad-auto-color-exterior.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoColorExteriorInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoColorExteriorInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoColorExteriorInput)
    create!: CategoryCreateWithoutAdAutoColorExteriorInput;
}
