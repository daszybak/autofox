import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from '../inputs/ad-auto-where-unique.input';
import { Type } from 'class-transformer';
import { AdAutoCreateInput } from '../inputs/ad-auto-create.input';
import { AdAutoUpdateInput } from '../inputs/ad-auto-update.input';

@ArgsType()
export class UpsertOneAdAutoArgs {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;

    @Field(() => AdAutoCreateInput, {nullable:false})
    @Type(() => AdAutoCreateInput)
    create!: AdAutoCreateInput;

    @Field(() => AdAutoUpdateInput, {nullable:false})
    @Type(() => AdAutoUpdateInput)
    update!: AdAutoUpdateInput;
}
