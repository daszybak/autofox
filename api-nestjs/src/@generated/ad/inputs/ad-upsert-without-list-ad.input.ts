import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateWithoutListAdInput } from './ad-update-without-list-ad.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutListAdInput } from './ad-create-without-list-ad.input';

@InputType()
export class AdUpsertWithoutListAdInput {

    @Field(() => AdUpdateWithoutListAdInput, {nullable:false})
    @Type(() => AdUpdateWithoutListAdInput)
    update!: AdUpdateWithoutListAdInput;

    @Field(() => AdCreateWithoutListAdInput, {nullable:false})
    @Type(() => AdCreateWithoutListAdInput)
    create!: AdCreateWithoutListAdInput;
}
