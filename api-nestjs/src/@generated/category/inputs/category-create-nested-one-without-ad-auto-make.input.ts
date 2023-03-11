import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoMakeInput } from './category-create-without-ad-auto-make.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoMakeInput } from './category-create-or-connect-without-ad-auto-make.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoMakeInput {

    @Field(() => CategoryCreateWithoutAdAutoMakeInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoMakeInput)
    create?: CategoryCreateWithoutAdAutoMakeInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoMakeInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoMakeInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoMakeInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
