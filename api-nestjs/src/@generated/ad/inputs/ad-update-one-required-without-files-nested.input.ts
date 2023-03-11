import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateWithoutFilesInput } from './ad-create-without-files.input';
import { Type } from 'class-transformer';
import { AdCreateOrConnectWithoutFilesInput } from './ad-create-or-connect-without-files.input';
import { AdUpsertWithoutFilesInput } from './ad-upsert-without-files.input';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { AdUpdateWithoutFilesInput } from './ad-update-without-files.input';

@InputType()
export class AdUpdateOneRequiredWithoutFilesNestedInput {

    @Field(() => AdCreateWithoutFilesInput, {nullable:true})
    @Type(() => AdCreateWithoutFilesInput)
    create?: AdCreateWithoutFilesInput;

    @Field(() => AdCreateOrConnectWithoutFilesInput, {nullable:true})
    @Type(() => AdCreateOrConnectWithoutFilesInput)
    connectOrCreate?: AdCreateOrConnectWithoutFilesInput;

    @Field(() => AdUpsertWithoutFilesInput, {nullable:true})
    @Type(() => AdUpsertWithoutFilesInput)
    upsert?: AdUpsertWithoutFilesInput;

    @Field(() => AdWhereUniqueInput, {nullable:true})
    @Type(() => AdWhereUniqueInput)
    connect?: AdWhereUniqueInput;

    @Field(() => AdUpdateWithoutFilesInput, {nullable:true})
    @Type(() => AdUpdateWithoutFilesInput)
    update?: AdUpdateWithoutFilesInput;
}
