import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdWhereUniqueInput } from './list-ad-where-unique.input';
import { Type } from 'class-transformer';
import { ListAdUpdateWithoutAdInput } from './list-ad-update-without-ad.input';

@InputType()
export class ListAdUpdateWithWhereUniqueWithoutAdInput {

    @Field(() => ListAdWhereUniqueInput, {nullable:false})
    @Type(() => ListAdWhereUniqueInput)
    where!: ListAdWhereUniqueInput;

    @Field(() => ListAdUpdateWithoutAdInput, {nullable:false})
    @Type(() => ListAdUpdateWithoutAdInput)
    data!: ListAdUpdateWithoutAdInput;
}
