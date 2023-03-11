import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutUserInput } from './ad-create-without-user.input';

@InputType()
export class AdCreateOrConnectWithoutUserInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutUserInput, {nullable:false})
    @Type(() => AdCreateWithoutUserInput)
    create!: AdCreateWithoutUserInput;
}
