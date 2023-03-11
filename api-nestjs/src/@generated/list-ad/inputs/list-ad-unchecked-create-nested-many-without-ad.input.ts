import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdCreateWithoutAdInput } from './list-ad-create-without-ad.input';
import { Type } from 'class-transformer';
import { ListAdCreateOrConnectWithoutAdInput } from './list-ad-create-or-connect-without-ad.input';
import { ListAdCreateManyAdInputEnvelope } from './list-ad-create-many-ad-input-envelope.input';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';

@InputType()
export class ListAdUncheckedCreateNestedManyWithoutAdInput {

    @Field(() => [ListAdCreateWithoutAdInput], {nullable:true})
    @Type(() => ListAdCreateWithoutAdInput)
    create?: Array<ListAdCreateWithoutAdInput>;

    @Field(() => [ListAdCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => ListAdCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<ListAdCreateOrConnectWithoutAdInput>;

    @Field(() => ListAdCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => ListAdCreateManyAdInputEnvelope)
    createMany?: ListAdCreateManyAdInputEnvelope;

    @Field(() => [ListAdWhereUniqueInput], {nullable:true})
    @Type(() => ListAdWhereUniqueInput)
    connect?: Array<ListAdWhereUniqueInput>;
}
