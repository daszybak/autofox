import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateWithoutFilesInput } from './ad-update-without-files.input';
import { Type } from 'class-transformer';
import { AdCreateWithoutFilesInput } from './ad-create-without-files.input';

@InputType()
export class AdUpsertWithoutFilesInput {

    @Field(() => AdUpdateWithoutFilesInput, {nullable:false})
    @Type(() => AdUpdateWithoutFilesInput)
    update!: AdUpdateWithoutFilesInput;

    @Field(() => AdCreateWithoutFilesInput, {nullable:false})
    @Type(() => AdCreateWithoutFilesInput)
    create!: AdCreateWithoutFilesInput;
}
