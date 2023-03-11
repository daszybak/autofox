import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdHouseUpdateManyMutationInput } from '../inputs/ad-house-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdHouseWhereInput } from '../inputs/ad-house-where.input';

@ArgsType()
export class UpdateManyAdHouseArgs {

    @Field(() => AdHouseUpdateManyMutationInput, {nullable:false})
    @Type(() => AdHouseUpdateManyMutationInput)
    data!: AdHouseUpdateManyMutationInput;

    @Field(() => AdHouseWhereInput, {nullable:true})
    @Type(() => AdHouseWhereInput)
    where?: AdHouseWhereInput;
}
