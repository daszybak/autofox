import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateManyUserInput } from './ad-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AdCreateManyUserInputEnvelope {

    @Field(() => [AdCreateManyUserInput], {nullable:false})
    @Type(() => AdCreateManyUserInput)
    data!: Array<AdCreateManyUserInput>;
}
