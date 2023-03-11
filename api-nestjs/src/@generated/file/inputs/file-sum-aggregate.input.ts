import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FileSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    file_id?: true;

    @Field(() => Boolean, {nullable:true})
    filesize?: true;

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;
}
