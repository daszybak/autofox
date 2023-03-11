import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutAdInput } from './file-create-without-ad.input';

@InputType()
export class FileCreateOrConnectWithoutAdInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateWithoutAdInput, {nullable:false})
    @Type(() => FileCreateWithoutAdInput)
    create!: FileCreateWithoutAdInput;
}
