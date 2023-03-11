import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    user_sub?: string;
}
