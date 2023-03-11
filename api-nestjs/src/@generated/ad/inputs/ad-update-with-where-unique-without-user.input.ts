import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdUpdateWithoutUserInput } from './ad-update-without-user.input';

@InputType()
export class AdUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutUserInput, {nullable:false})
    @Type(() => AdUpdateWithoutUserInput)
    data!: AdUpdateWithoutUserInput;
}
