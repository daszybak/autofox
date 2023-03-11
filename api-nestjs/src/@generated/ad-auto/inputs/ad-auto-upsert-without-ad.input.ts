import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoUpdateWithoutAdInput } from './ad-auto-update-without-ad.input';
import { Type } from 'class-transformer';
import { AdAutoCreateWithoutAdInput } from './ad-auto-create-without-ad.input';

@InputType()
export class AdAutoUpsertWithoutAdInput {

    @Field(() => AdAutoUpdateWithoutAdInput, {nullable:false})
    @Type(() => AdAutoUpdateWithoutAdInput)
    update!: AdAutoUpdateWithoutAdInput;

    @Field(() => AdAutoCreateWithoutAdInput, {nullable:false})
    @Type(() => AdAutoCreateWithoutAdInput)
    create!: AdAutoCreateWithoutAdInput;
}
