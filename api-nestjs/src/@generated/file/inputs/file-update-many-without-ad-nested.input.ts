import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAdInput } from './file-create-without-ad.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAdInput } from './file-create-or-connect-without-ad.input';
import { FileUpsertWithWhereUniqueWithoutAdInput } from './file-upsert-with-where-unique-without-ad.input';
import { FileCreateManyAdInputEnvelope } from './file-create-many-ad-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutAdInput } from './file-update-with-where-unique-without-ad.input';
import { FileUpdateManyWithWhereWithoutAdInput } from './file-update-many-with-where-without-ad.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutAdNestedInput {

    @Field(() => [FileCreateWithoutAdInput], {nullable:true})
    @Type(() => FileCreateWithoutAdInput)
    create?: Array<FileCreateWithoutAdInput>;

    @Field(() => [FileCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutAdInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutAdInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutAdInput>;

    @Field(() => FileCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyAdInputEnvelope)
    createMany?: FileCreateManyAdInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<FileWhereUniqueInput>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutAdInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutAdInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutAdInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutAdInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutAdInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutAdInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
