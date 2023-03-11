import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoWhereUniqueInput } from '../inputs/ad-auto-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdAutoArgs {

    @Field(() => AdAutoWhereUniqueInput, {nullable:false})
    @Type(() => AdAutoWhereUniqueInput)
    where!: AdAutoWhereUniqueInput;
}
