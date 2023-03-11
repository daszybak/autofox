import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAdInput } from './file-create-without-ad.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAdInput } from './file-create-or-connect-without-ad.input';
import { FileCreateManyAdInputEnvelope } from './file-create-many-ad-input-envelope.input';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutAdInput {

    @Field(() => [FileCreateWithoutAdInput], {nullable:true})
    @Type(() => FileCreateWithoutAdInput)
    create?: Array<FileCreateWithoutAdInput>;

    @Field(() => [FileCreateOrConnectWithoutAdInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAdInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutAdInput>;

    @Field(() => FileCreateManyAdInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyAdInputEnvelope)
    createMany?: FileCreateManyAdInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<FileWhereUniqueInput>;
}
