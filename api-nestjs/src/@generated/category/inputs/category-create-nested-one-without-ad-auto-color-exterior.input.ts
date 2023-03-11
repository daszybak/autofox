import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoColorExteriorInput } from './category-create-without-ad-auto-color-exterior.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoColorExteriorInput } from './category-create-or-connect-without-ad-auto-color-exterior.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoColorExteriorInput {

    @Field(() => CategoryCreateWithoutAdAutoColorExteriorInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoColorExteriorInput)
    create?: CategoryCreateWithoutAdAutoColorExteriorInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoColorExteriorInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoColorExteriorInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoColorExteriorInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
