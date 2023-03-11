import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutListAdNestedInput } from '../../ad/inputs/ad-update-one-required-without-list-ad-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ListAdUpdateWithoutListInput {

    @Field(() => AdUpdateOneRequiredWithoutListAdNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutListAdNestedInput)
    ad?: AdUpdateOneRequiredWithoutListAdNestedInput;
}
