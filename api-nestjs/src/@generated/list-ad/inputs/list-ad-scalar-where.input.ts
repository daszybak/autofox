import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';

@InputType()
export class ListAdScalarWhereInput {

    @Field(() => [ListAdScalarWhereInput], {nullable:true})
    AND?: Array<ListAdScalarWhereInput>;

    @Field(() => [ListAdScalarWhereInput], {nullable:true})
    OR?: Array<ListAdScalarWhereInput>;

    @Field(() => [ListAdScalarWhereInput], {nullable:true})
    NOT?: Array<ListAdScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    ad_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    list_id?: IntFilter;
}
