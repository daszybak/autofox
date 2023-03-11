import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdUpdateInput } from '../inputs/ad-update.input';
import { Type } from 'class-transformer';
import { AdWhereUniqueInput } from '../inputs/ad-where-unique.input';

@ArgsType()
export class UpdateOneAdArgs {

    @Field(() => AdUpdateInput, {nullable:false})
    @Type(() => AdUpdateInput)
    data!: AdUpdateInput;

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;
}
