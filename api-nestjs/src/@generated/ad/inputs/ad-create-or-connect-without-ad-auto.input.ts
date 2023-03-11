import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutAd_autoInput } from './ad-create-without-ad-auto.input';

@InputType()
export class AdCreateOrConnectWithoutAd_autoInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutAd_autoInput, {nullable:false})
    @Type(() => AdCreateWithoutAd_autoInput)
    create!: AdCreateWithoutAd_autoInput;
}
