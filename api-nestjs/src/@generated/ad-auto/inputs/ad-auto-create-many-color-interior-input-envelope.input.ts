import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdAutoCreateManyColor_interiorInput } from './ad-auto-create-many-color-interior.input';
import { Type } from 'class-transformer';

@InputType()
export class AdAutoCreateManyColor_interiorInputEnvelope {

    @Field(() => [AdAutoCreateManyColor_interiorInput], {nullable:false})
    @Type(() => AdAutoCreateManyColor_interiorInput)
    data!: Array<AdAutoCreateManyColor_interiorInput>;
}
