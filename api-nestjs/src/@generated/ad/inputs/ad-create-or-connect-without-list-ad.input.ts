import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutListAdInput } from './ad-create-without-list-ad.input';

@InputType()
export class AdCreateOrConnectWithoutListAdInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutListAdInput, {nullable:false})
    @Type(() => AdCreateWithoutListAdInput)
    create!: AdCreateWithoutListAdInput;
}
