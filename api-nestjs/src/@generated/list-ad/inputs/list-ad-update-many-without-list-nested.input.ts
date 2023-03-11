import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdCreateWithoutListInput } from './list-ad-create-without-list.input';
import { Type } from 'class-transformer';
import { ListAdCreateOrConnectWithoutListInput } from './list-ad-create-or-connect-without-list.input';
import { ListAdUpsertWithWhereUniqueWithoutListInput } from './list-ad-upsert-with-where-unique-without-list.input';
import { ListAdCreateManyListInputEnvelope } from './list-ad-create-many-list-input-envelope.input';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { ListAdUpdateWithWhereUniqueWithoutListInput } from './list-ad-update-with-where-unique-without-list.input';
import { ListAdUpdateManyWithWhereWithoutListInput } from './list-ad-update-many-with-where-without-list.input';
import { ListAdScalarWhereInput } from './list-ad-scalar-where.input';

@InputType()
export class ListAdUpdateManyWithoutListNestedInput {

    @Field(() => [ListAdCreateWithoutListInput], {nullable:true})
    @Type(() => ListAdCreateWithoutListInput)
    create?: Array<ListAdCreateWithoutListInput>;

    @Field(() => [ListAdCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => ListAdCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<ListAdCreateOrConnectWithoutListInput>;

    @Field(() => [ListAdUpsertWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => ListAdUpsertWithWhereUniqueWithoutListInput)
    upsert?: Array<ListAdUpsertWithWhereUniqueWithoutListInput>;

    @Field(() => ListAdCreateManyListInputEnvelope, {nullable:true})
    @Type(() => ListAdCreateManyListInputEnvelope)
    createMany?: ListAdCreateManyListInputEnvelope;

    @Field(() => [ListAdWhereUniqueInput], {nullable:true})
    @Type(() => ListAdWhereUniqueInput)
    set?: Array<ListAdWhereUniqueInput>;

    @Field(() => [ListAdWhereUniqueInput], {nullable:true})
    @Type(() => ListAdWhereUniqueInput)
    disconnect?: Array<ListAdWhereUniqueInput>;

    @Field(() => [ListAdWhereUniqueInput], {nullable:true})
    @Type(() => ListAdWhereUniqueInput)
    delete?: Array<ListAdWhereUniqueInput>;

    @Field(() => [ListAdWhereUniqueInput], {nullable:true})
    @Type(() => ListAdWhereUniqueInput)
    connect?: Array<ListAdWhereUniqueInput>;

    @Field(() => [ListAdUpdateWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => ListAdUpdateWithWhereUniqueWithoutListInput)
    update?: Array<ListAdUpdateWithWhereUniqueWithoutListInput>;

    @Field(() => [ListAdUpdateManyWithWhereWithoutListInput], {nullable:true})
    @Type(() => ListAdUpdateManyWithWhereWithoutListInput)
    updateMany?: Array<ListAdUpdateManyWithWhereWithoutListInput>;

    @Field(() => [ListAdScalarWhereInput], {nullable:true})
    @Type(() => ListAdScalarWhereInput)
    deleteMany?: Array<ListAdScalarWhereInput>;
}
