import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutAd_houseNestedInput } from '../../ad/inputs/ad-update-one-required-without-ad-house-nested.input';
import { Type } from 'class-transformer';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';

@InputType()
export class AdHouseUpdateInput {

    @Field(() => AdUpdateOneRequiredWithoutAd_houseNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutAd_houseNestedInput)
    ad?: AdUpdateOneRequiredWithoutAd_houseNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    meters?: NullableIntFieldUpdateOperationsInput;
}
