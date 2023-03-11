import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutAdAutoColorInteriorInput } from './category-create-without-ad-auto-color-interior.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutAdAutoColorInteriorInput } from './category-create-or-connect-without-ad-auto-color-interior.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutAdAutoColorInteriorInput {

    @Field(() => CategoryCreateWithoutAdAutoColorInteriorInput, {nullable:true})
    @Type(() => CategoryCreateWithoutAdAutoColorInteriorInput)
    create?: CategoryCreateWithoutAdAutoColorInteriorInput;

    @Field(() => CategoryCreateOrConnectWithoutAdAutoColorInteriorInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutAdAutoColorInteriorInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutAdAutoColorInteriorInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: CategoryWhereUniqueInput;
}
