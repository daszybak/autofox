import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutListAdInput } from '../../ad/inputs/ad-create-nested-one-without-list-ad.input';
import { Type } from 'class-transformer';
import { ListCreateNestedOneWithoutListAdInput } from '../../list/inputs/list-create-nested-one-without-list-ad.input';

@InputType()
export class ListAdCreateInput {

    @Field(() => AdCreateNestedOneWithoutListAdInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutListAdInput)
    ad!: AdCreateNestedOneWithoutListAdInput;

    @Field(() => ListCreateNestedOneWithoutListAdInput, {nullable:false})
    list!: ListCreateNestedOneWithoutListAdInput;
}
