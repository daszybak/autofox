import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutFilesInput } from './ad-create-without-files.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutFilesInput } from './ad-create-or-connect-without-files.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';

@InputType()
export class AdCreateNestedOneWithoutFilesInput {

    @Field(() => AdCreateWithoutFilesInput, {nullable:true})
    @Type(() => AdCreateWithoutFilesInput)
    create?: AdCreateWithoutFilesInput;

    @Field(() => AdCreateOrConnectWithoutFilesInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutFilesInput)
    connectOrCreate?: AdCreateOrConnectWithoutFilesInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;
}
