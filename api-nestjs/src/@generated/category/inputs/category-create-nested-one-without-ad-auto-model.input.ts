import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoModelInput } from './category-create-without-ad-auto-model.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoModelInput } from './category-create-or-connect-without-ad-auto-model.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoModelInput {

    @Field(() => CategoryCreateWithoutAdAutoModelInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoModelInput)
    create?: CategoryCreateWithoutAdAutoModelInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoModelInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoModelInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoModelInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
