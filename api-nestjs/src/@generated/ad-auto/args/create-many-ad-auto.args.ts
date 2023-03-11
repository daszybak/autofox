import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoCreateManyInput } from '../inputs/ad-auto-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdAutoArgs {

    @Field(() => [AdAutoCreateManyInput], {nullable:false})
    @Type(() => AdAutoCreateManyInput)
    data!: Array<AdAutoCreateManyInput>;
}
