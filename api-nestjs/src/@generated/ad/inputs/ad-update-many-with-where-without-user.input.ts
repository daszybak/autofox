import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdScalarWhereInput } from './ad-scalar-where.input';
import { Type } from 'class-transformer';
import { AdUpdateManyMutationInput } from './ad-update-many-mutation.input';

@InputType()
export class AdUpdateManyWithWhereWithoutUserInput {

    @Field(() => AdScalarWhereInput, {nullable:false})
    @Type(() => AdScalarWhereInput)
    where!: AdScalarWhereInput;

    @Field(() => AdUpdateManyMutationInput, {nullable:false})
    @Type(() => AdUpdateManyMutationInput)
    data!: AdUpdateManyMutationInput;
}
