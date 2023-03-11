import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoEmissionClassInput } from './category-create-without-ad-auto-emission-class.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoEmissionClassInput } from './category-create-or-connect-without-ad-auto-emission-class.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoEmissionClassInput {

    @Field(() => CategoryCreateWithoutAdAutoEmissionClassInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoEmissionClassInput)
    create?: CategoryCreateWithoutAdAutoEmissionClassInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoEmissionClassInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoEmissionClassInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoEmissionClassInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
