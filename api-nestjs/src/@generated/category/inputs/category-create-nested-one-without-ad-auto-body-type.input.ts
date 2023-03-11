import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoBodyTypeInput } from './category-create-without-ad-auto-body-type.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoBodyTypeInput } from './category-create-or-connect-without-ad-auto-body-type.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoBodyTypeInput {

    @Field(() => CategoryCreateWithoutAdAutoBodyTypeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoBodyTypeInput)
    create?: CategoryCreateWithoutAdAutoBodyTypeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoBodyTypeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoBodyTypeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoBodyTypeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
