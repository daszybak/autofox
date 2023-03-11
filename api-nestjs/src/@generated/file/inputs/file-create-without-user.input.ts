import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutFilesInput } from '../../ad/inputs/ad-create-nested-one-without-files.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => AdCreateNestedOneWithoutFilesInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutFilesInput)
    ad!: AdCreateNestedOneWithoutFilesInput;
}
