import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from '../inputs/file-where.input';
import { Type } from 'class-transformer';
import { FileOrderByWithRelationInput } from '../inputs/file-order-by-with-relation.input';
import { FileWhereUniqueInput } from '../inputs/file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FileScalarFieldEnum } from '../enums/file-scalar-field.enum';

@ArgsType()
export class FindFirstFileArgs {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: FileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FileScalarFieldEnum>;
}
