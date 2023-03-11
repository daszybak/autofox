import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereUniqueInput } from '../inputs/file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateInput } from '../inputs/file-create.input';
import { FileUpdateInput } from '../inputs/file-update.input';

@ArgsType()
export class UpsertOneFileArgs {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: FileWhereUniqueInput;

    @Field(() => FileCreateInput, {nullable:false})
    @Type(() => FileCreateInput)
    create!: FileCreateInput;

    @Field(() => FileUpdateInput, {nullable:false})
    @Type(() => FileUpdateInput)
    update!: FileUpdateInput;
}
