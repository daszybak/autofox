import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListUpdateWithoutListAdInput } from './list-update-without-list-ad.input';
import { Type } from 'class-transformer';
import { ListCreateWithoutListAdInput } from './list-create-without-list-ad.input';

@InputType()
export class ListUpsertWithoutListAdInput {

    @Field(() => ListUpdateWithoutListAdInput, {nullable:false})
    @Type(() => ListUpdateWithoutListAdInput)
    update!: ListUpdateWithoutListAdInput;

    @Field(() => ListCreateWithoutListAdInput, {nullable:false})
    @Type(() => ListCreateWithoutListAdInput)
    create!: ListCreateWithoutListAdInput;
}
