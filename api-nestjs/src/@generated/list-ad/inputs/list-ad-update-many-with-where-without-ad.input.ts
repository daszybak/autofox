import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdScalarWhereInput } from './list-ad-scalar-where.input';
import { Type } from 'class-transformer';
import { ListAdUncheckedUpdateManyWithoutListAdInput } from './list-ad-unchecked-update-many-without-list-ad.input';

@InputType()
export class ListAdUpdateManyWithWhereWithoutAdInput {

    @Field(() => ListAdScalarWhereInput, {nullable:false})
    @Type(() => ListAdScalarWhereInput)
    where!: ListAdScalarWhereInput;

    @Field(() => ListAdUncheckedUpdateManyWithoutListAdInput, {nullable:false})
    @Type(() => ListAdUncheckedUpdateManyWithoutListAdInput)
    data!: ListAdUncheckedUpdateManyWithoutListAdInput;
}
