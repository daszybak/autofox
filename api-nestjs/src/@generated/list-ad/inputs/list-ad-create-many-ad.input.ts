import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ListAdCreateManyAdInput {

    @Field(() => Int, {nullable:false})
    list_id!: number;
}
