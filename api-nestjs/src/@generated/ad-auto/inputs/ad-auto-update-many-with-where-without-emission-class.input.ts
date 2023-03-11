import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoScalarWhereInput } from './ad-auto-scalar-where.input';
import { Type } from 'class-transformer';
import { AdAutoUpdateManyMutationInput } from './ad-auto-update-many-mutation.input';

@InputType()
export class AdAutoUpdateManyWithWhereWithoutEmission_classInput {

    @Field(() => AdAutoScalarWhereInput, {nullable:false})
    @Type(() => AdAutoScalarWhereInput)
    where!: AdAutoScalarWhereInput;

    @Field(() => AdAutoUpdateManyMutationInput, {nullable:false})
    @Type(() => AdAutoUpdateManyMutationInput)
    data!: AdAutoUpdateManyMutationInput;
}
