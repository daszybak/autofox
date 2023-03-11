import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutAdAutoColorInteriorInput } from './category-create-without-ad-auto-color-interior.input';

@InputType()
export class CategoryCreateOrConnectWithoutAdAutoColorInteriorInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutAdAutoColorInteriorInput, {nullable:false})
    @Type(() => CategoryCreateWithoutAdAutoColorInteriorInput)
    create!: CategoryCreateWithoutAdAutoColorInteriorInput;
}
