import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutListAdNestedInput } from '../../ad/inputs/ad-update-one-required-without-list-ad-nested.input';
import { Type } from 'class-transformer';
import { ListUpdateOneRequiredWithoutListAdNestedInput } from '../../list/inputs/list-update-one-required-without-list-ad-nested.input';

@InputType()
export class ListAdUpdateInput {

    @Field(() => AdUpdateOneRequiredWithoutListAdNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutListAdNestedInput)
    ad?: AdUpdateOneRequiredWithoutListAdNestedInput;

    @Field(() => ListUpdateOneRequiredWithoutListAdNestedInput, {nullable:true})
    list?: ListUpdateOneRequiredWithoutListAdNestedInput;
}
