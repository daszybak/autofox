import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoUpdateInput } from '../inputs/ad-auto-update.input';
import { Type } from 'class-transformer';
import { AdAutoWhereUniqueInput } from '../inputs/ad-auto-where-unique.input';

@ArgsType()
export class UpdateOneAdAutoArgs {

    @Field(() => AdAutoUpdateInput, {nullable:false})
    @Type(() => AdAutoUpdateInput)
    data!: AdAutoUpdateInput;

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;
}
