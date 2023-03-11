import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class FileMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    file_id?: true;

    @Field(() => Boolean, {nullable:true})
    filename?: true;

    @Field(() => Boolean, {nullable:true})
    filesize?: true;

    @Field(() => Boolean, {nullable:true})
    code?: true;

    @Field(() => Boolean, {nullable:true})
    path?: true;

    @Field(() => Boolean, {nullable:true})
    ad_id?: true;

    @HideField()
    user_sub?: true;
}
