import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ListAdCreateManyAdInput } from './list-ad-create-many-ad.input';
import { Type } from 'class-transformer';

@InputType()
export class ListAdCreateManyAdInputEnvelope {

    @Field(() => [ListAdCreateManyAdInput], {nullable:false})
    @Type(() => ListAdCreateManyAdInput)
    data!: Array<ListAdCreateManyAdInput>;
}
