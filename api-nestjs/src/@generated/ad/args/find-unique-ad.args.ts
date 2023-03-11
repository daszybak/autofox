import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from '../inputs/ad-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAdArgs {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;
}
