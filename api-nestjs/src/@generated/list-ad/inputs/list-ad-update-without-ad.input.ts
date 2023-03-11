import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListUpdateOneRequiredWithoutListAdNestedInput } from '../../list/inputs/list-update-one-required-without-list-ad-nested.input';

@InputType()
export class ListAdUpdateWithoutAdInput {

    @Field(() => ListUpdateOneRequiredWithoutListAdNestedInput, {nullable:true})
    list?: ListUpdateOneRequiredWithoutListAdNestedInput;
}
