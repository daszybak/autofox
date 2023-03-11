import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoColorInteriorInput } from './category-create-without-ad-auto-color-interior.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoColorInteriorInput } from './category-create-or-connect-without-ad-auto-color-interior.input';
import { CategoryUpsertWithoutAdAutoColorInteriorInput } from './category-upsert-without-ad-auto-color-interior.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutAdAutoColorInteriorInput } from './category-update-without-ad-auto-color-interior.input';

@InputType()
export class CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput {

    @Field(() => CategoryCreateWithoutAdAutoColorInteriorInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoColorInteriorInput)
    create?: CategoryCreateWithoutAdAutoColorInteriorInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoColorInteriorInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoColorInteriorInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoColorInteriorInput;

    @Field(() => CategoryUpsertWithoutAdAutoColorInteriorInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutAdAutoColorInteriorInput)
    upsert?: CategoryUpsertWithoutAdAutoColorInteriorInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutAdAutoColorInteriorInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutAdAutoColorInteriorInput)
    update?: CategoryUpdateWithoutAdAutoColorInteriorInput;
}
