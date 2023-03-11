import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdCreateWithoutListInput } from './list-ad-create-without-list.input';
import { Type } from 'class-transformer';
import { ListAdCreateOrConnectWithoutListInput } from './list-ad-create-or-connect-without-list.input';
import { ListAdCreateManyListInputEnvelope } from './list-ad-create-many-list-input-envelope.input';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';

@InputType()
export class ListAdCreateNestedManyWithoutListInput {

    @Field(() => [ListAdCreateWithoutListInput], {nullable:true})
    @Type(() => ListAdCreateWithoutListInput)
    create?: Array<ListAdCreateWithoutListInput>;

    @Field(() => [ListAdCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => ListAdCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<ListAdCreateOrConnectWithoutListInput>;

    @Field(() => ListAdCreateManyListInputEnvelope, {nullable:true})
    @Type(() => ListAdCreateManyListInputEnvelope)
    createMany?: ListAdCreateManyListInputEnvelope;

    @Field(() => [ListAdWhereUniqueInput], {nullable:true})
    @Type(() => ListAdWhereUniqueInput)
    connect?: Array<ListAdWhereUniqueInput>;
}
