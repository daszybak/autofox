import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutListAdInput } from './ad-create-without-list-ad.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutListAdInput } from './ad-create-or-connect-without-list-ad.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';

@InputType()
export class AdCreateNestedOneWithoutListAdInput {

    @Field(() => AdCreateWithoutListAdInput, {nullable:true})
    @Type(() => AdCreateWithoutListAdInput)
    create?: AdCreateWithoutListAdInput;

    @Field(() => AdCreateOrConnectWithoutListAdInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutListAdInput)
    connectOrCreate?: AdCreateOrConnectWithoutListAdInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;
}
