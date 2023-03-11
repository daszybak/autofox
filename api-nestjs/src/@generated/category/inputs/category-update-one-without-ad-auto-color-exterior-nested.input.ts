import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoColorExteriorInput } from './category-create-without-ad-auto-color-exterior.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoColorExteriorInput } from './category-create-or-connect-without-ad-auto-color-exterior.input';
import { CategoryUpsertWithoutAdAutoColorExteriorInput } from './category-upsert-without-ad-auto-color-exterior.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoColorExteriorInput } from './category-update-without-ad-auto-color-exterior.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoColorExteriorInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoColorExteriorInput)
    create?: CategoryCreateWithoutAdAutoColorExteriorInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoColorExteriorInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoColorExteriorInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoColorExteriorInput;

    @Field(() => CategoryUpsertWithoutAdAutoColorExteriorInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoColorExteriorInput)
    upsert?: CategoryUpsertWithoutAdAutoColorExteriorInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoColorExteriorInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoColorExteriorInput)
    update?: CategoryUpdateWithoutAdAutoColorExteriorInput;
}
