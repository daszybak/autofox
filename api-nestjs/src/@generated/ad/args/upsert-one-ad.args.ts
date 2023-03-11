import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from '../inputs/ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateInput } from '../inputs/ad-create.input';
import { AdUpdateInput } from '../inputs/ad-update.input';

@ArgsType()
export class UpsertOneAdArgs {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateInput, {nullable:false})
    @Type(() => AdCreateInput)
    create!: AdCreateInput;

    @Field(() => AdUpdateInput, {nullable:false})
    @Type(() => AdUpdateInput)
    update!: AdUpdateInput;
}
