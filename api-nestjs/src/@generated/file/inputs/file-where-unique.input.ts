import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class FileWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    file_id?: number;
}
