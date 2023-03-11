import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutAdInput } from './file-update-without-ad.input';
import { FileCreateWithoutAdInput } from './file-create-without-ad.input';

@InputType()
export class FileUpsertWithWhereUniqueWithoutAdInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutAdInput, {nullable:false})
    @Type(() => FileUpdateWithoutAdInput)
    update!: FileUpdateWithoutAdInput;

    @Field(() => FileCreateWithoutAdInput, {nullable:false})
    @Type(() => FileCreateWithoutAdInput)
    create!: FileCreateWithoutAdInput;
}
