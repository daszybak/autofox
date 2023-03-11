import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdCreateManyInput } from '../inputs/ad-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdArgs {

    @Field(() => [AdCreateManyInput], {nullable:false})
    @Type(() => AdCreateManyInput)
    data!: Array<AdCreateManyInput>;
}
