import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutListAdInput } from './ad-create-without-list-ad.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutListAdInput } from './ad-create-or-connect-without-list-ad.input';
import { AdUpsertWithoutListAdInput } from './ad-upsert-without-list-ad.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithoutListAdInput } from './ad-update-without-list-ad.input';

@InputType()
export class AdUpdateOneRequiredWithoutListAdNestedInput {

    @Field(() => AdCreateWithoutListAdInput, {nullable:true})
    @Type(() => AdCreateWithoutListAdInput)
    create?: AdCreateWithoutListAdInput;

    @Field(() => AdCreateOrConnectWithoutListAdInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutListAdInput)
    connectOrCreate?: AdCreateOrConnectWithoutListAdInput;

    @Field(() => AdUpsertWithoutListAdInput, {nullable:true})
    @Type(() => AdUpsertWithoutListAdInput)
    upsert?: AdUpsertWithoutListAdInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutListAdInput, {nullable:true})
    @Type(() => AdUpdateWithoutListAdInput)
    update?: AdUpdateWithoutListAdInput;
}
