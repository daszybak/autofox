import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyMakeInput } from './ad-auto-create-many-make.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyMakeInputEnvelope {

    @Field(() => [AdAutoCreateManyMakeInput], {nullable:false})
    @Type(() => AdAutoCreateManyMakeInput)
    data!: Array<AdAutoCreateManyMakeInput>;
}
