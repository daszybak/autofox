import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdWhereInput } from '../inputs/ad-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdArgs {

    @Field(() => AdWhereInput, {nullable:true})
    @Type(() => AdWhereInput)
    where?: AdWhereInput;
}
