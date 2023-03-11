import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyUserInput } from './file-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyUserInputEnvelope {

    @Field(() => [FileCreateManyUserInput], {nullable:false})
    @Type(() => FileCreateManyUserInput)
    data!: Array<FileCreateManyUserInput>;
}
