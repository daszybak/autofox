import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from '../inputs/file-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;
}
