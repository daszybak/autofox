import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdHouseCreateWithoutAdInput {

    @Field(() => Int, {nullable:true})
    meters?: number;
}
