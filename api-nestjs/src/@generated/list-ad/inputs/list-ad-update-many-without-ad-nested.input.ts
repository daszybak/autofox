import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdCreateWithoutAdInput } from './list-ad-create-without-ad.input';
import { Type } from 'class-transformer';
import { ListAdCreateOrConnectWithoutAdInput } from './list-ad-create-or-connect-without-ad.input';
import { ListAdUpsertWithWhereUniqueWithoutAdInput } from './list-ad-upsert-with-where-unique-without-ad.input';
import { ListAdCreateManyAdInputEnvelope } from './list-ad-create-many-ad-input-envelope.input';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { ListAdUpdateWithWhereUniqueWithoutAdInput } from './list-ad-update-with-where-unique-without-ad.input';
import { ListAdUpdateManyWithWhereWithoutAdInput } from './list-ad-update-many-with-where-without-ad.input';
import { ListAdScalarWhereInput } from './list-ad-scalar-where.input';

@InputType()
export class ListAdUpdateManyWithoutAdNestedInput {

    @Field(() => [ListAdCreateWithoutAdInput], {nullable:true})
    @Type(() => ListAdCreateWithoutAdInput)
    create?: Array<ListAdCreateWithoutAdInput>;

    @Field(() => [ListAdCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => ListAdCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<ListAdCreateOrConnectWithoutAdInput>;

    @Field(() => [ListAdUpsertWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => ListAdUpsertWithWhereUniqueWithoutAdInput)
    upsert?: Array<ListAdUpsertWithWhereUniqueWithoutAdInput>;

    @Field(() => ListAdCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => ListAdCreateManyAdInputEnvelope)
    createMany?: ListAdCreateManyAdInputEnvelope;

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

    @Field(() => [ListAdUpdateWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => ListAdUpdateWithWhereUniqueWithoutAdInput)
    update?: Array<ListAdUpdateWithWhereUniqueWithoutAdInput>;

    @Field(() => [ListAdUpdateManyWithWhereWithoutAdInput], {nullable:true})
    @Type(() => ListAdUpdateManyWithWhereWithoutAdInput)
    updateMany?: Array<ListAdUpdateManyWithWhereWithoutAdInput>;

    @Field(() => [ListAdScalarWhereInput], {nullable:true})
    @Type(() => ListAdScalarWhereInput)
    deleteMany?: Array<ListAdScalarWhereInput>;
}
