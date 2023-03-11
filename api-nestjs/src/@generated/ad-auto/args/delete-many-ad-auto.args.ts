import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoWhereInput } from '../inputs/ad-auto-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAdAutoArgs {

    @Field(() => AdAutoWhereInput, {nullable:true})
    @Type(() => AdAutoWhereInput)
    where?: AdAutoWhereInput;
}
