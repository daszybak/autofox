import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutAdInput } from './file-update-without-ad.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutAdInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileUpdateWithoutAdInput, {nullable:false})
    @Type(() => FileUpdateWithoutAdInput)
    data!: FileUpdateWithoutAdInput;
}
