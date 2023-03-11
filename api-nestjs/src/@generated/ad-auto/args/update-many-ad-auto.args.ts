import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdAutoUpdateManyMutationInput } from '../inputs/ad-auto-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdAutoWhereInput } from '../inputs/ad-auto-where.input';

@ArgsType()
export class UpdateManyAdAutoArgs {

    @Field(() => AdAutoUpdateManyMutationInput, {nullable:false})
    @Type(() => AdAutoUpdateManyMutationInput)
    data!: AdAutoUpdateManyMutationInput;

    @Field(() => AdAutoWhereInput, {nullable:true})
    @Type(() => AdAutoWhereInput)
    where?: AdAutoWhereInput;
}
