import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateWithoutListAdInput } from './list-create-without-list-ad.input';
import { Type } from 'class-transformer';
import { ListCreateOrConnectWithoutListAdInput } from './list-create-or-connect-without-list-ad.input';
import { ListUpsertWithoutListAdInput } from './list-upsert-without-list-ad.input';
import { ListWhereUniqueInput } from './list-where-unique.input';
import { ListUpdateWithoutListAdInput } from './list-update-without-list-ad.input';

@InputType()
export class ListUpdateOneRequiredWithoutListAdNestedInput {

    @Field(() => ListCreateWithoutListAdInput, {nullable:true})
    @Type(() => ListCreateWithoutListAdInput)
    create?: ListCreateWithoutListAdInput;

    @Field(() => ListCreateOrConnectWithoutListAdInput, {nullable:true})
    @Type(() => ListCreateOrConnectWithoutListAdInput)
    connectOrCreate?: ListCreateOrConnectWithoutListAdInput;

    @Field(() => ListUpsertWithoutListAdInput, {nullable:true})
    @Type(() => ListUpsertWithoutListAdInput)
    upsert?: ListUpsertWithoutListAdInput;

    @Field(() => ListWhereUniqueInput, {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: ListWhereUniqueInput;

    @Field(() => ListUpdateWithoutListAdInput, {nullable:true})
    @Type(() => ListUpdateWithoutListAdInput)
    update?: ListUpdateWithoutListAdInput;
}
