import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyColor_exteriorInput } from './ad-auto-create-many-color-exterior.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyColor_exteriorInputEnvelope {

    @Field(() => [AdAutoCreateManyColor_exteriorInput], {nullable:false})
    @Type(() => AdAutoCreateManyColor_exteriorInput)
    data!: Array<AdAutoCreateManyColor_exteriorInput>;
}
