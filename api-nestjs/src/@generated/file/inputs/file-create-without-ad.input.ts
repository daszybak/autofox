import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutFilesInput } from '../../user/inputs/user-create-nested-one-without-files.input';

@InputType()
export class FileCreateWithoutAdInput {

    @Field(() => String, {nullable:false})
    filename!: string;

    @Field(() => Int, {nullable:false})
    filesize!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => UserCreateNestedOneWithoutFilesInput, {nullable:true})
    user?: UserCreateNestedOneWithoutFilesInput;
}
