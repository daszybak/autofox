import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutListAdInput } from '../../ad/inputs/ad-create-nested-one-without-list-ad.input';
import { Type } from 'class-transformer';

@InputType()
export class ListAdCreateWithoutListInput {

    @Field(() => AdCreateNestedOneWithoutListAdInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutListAdInput)
    ad!: AdCreateNestedOneWithoutListAdInput;
}
