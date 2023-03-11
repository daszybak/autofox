import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListCreateNestedOneWithoutListAdInput } from '../../list/inputs/list-create-nested-one-without-list-ad.input';

@InputType()
export class ListAdCreateWithoutAdInput {

    @Field(() => ListCreateNestedOneWithoutListAdInput, {nullable:false})
    list!: ListCreateNestedOneWithoutListAdInput;
}
