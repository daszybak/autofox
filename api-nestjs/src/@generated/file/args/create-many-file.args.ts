import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileCreateManyInput } from '../inputs/file-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFileArgs {

    @Field(() => [FileCreateManyInput], {nullable:false})
    @Type(() => FileCreateManyInput)
    data!: Array<FileCreateManyInput>;
}
