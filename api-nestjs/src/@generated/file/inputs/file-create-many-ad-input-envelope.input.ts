import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateManyAdInput } from './file-create-many-ad.input';
import { Type } from 'class-transformer';

@InputType()
export class FileCreateManyAdInputEnvelope {

    @Field(() => [FileCreateManyAdInput], {nullable:false})
    @Type(() => FileCreateManyAdInput)
    data!: Array<FileCreateManyAdInput>;
}
