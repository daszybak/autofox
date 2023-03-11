import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseCreateManyInput } from '../inputs/ad-house-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdHouseArgs {

    @Field(() => [AdHouseCreateManyInput], {nullable:false})
    @Type(() => AdHouseCreateManyInput)
    data!: Array<AdHouseCreateManyInput>;
}
