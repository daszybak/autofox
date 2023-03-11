import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateWithoutListAdInput } from './list-create-without-list-ad.input';
import { Type } from 'class-transformer';
import { ListCreateOrConnectWithoutListAdInput } from './list-create-or-connect-without-list-ad.input';
import { ListWhereUniqueInput } from './list-where-unique.input';

@InputType()
export class ListCreateNestedOneWithoutListAdInput {

    @Field(() => ListCreateWithoutListAdInput, {nullable:true})
    @Type(() => ListCreateWithoutListAdInput)
    create?: ListCreateWithoutListAdInput;

    @Field(() => ListCreateOrConnectWithoutListAdInput, {nullable:true})
    @Type(() => ListCreateOrConnectWithoutListAdInput)
    connectOrCreate?: ListCreateOrConnectWithoutListAdInput;

    @Field(() => ListWhereUniqueInput, {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: ListWhereUniqueInput;
}
