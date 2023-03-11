import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdWhereUniqueInput } from './ad-where-unique.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutFilesInput } from './ad-create-without-files.input';

@InputType()
export class AdCreateOrConnectWithoutFilesInput {

    @Field(() => AdWhereUniqueInput, {nullable:false})
    @Type(() => AdWhereUniqueInput)
    where!: AdWhereUniqueInput;

    @Field(() => AdCreateWithoutFilesInput, {nullable:false})
    @Type(() => AdCreateWithoutFilesInput)
    create!: AdCreateWithoutFilesInput;
}
