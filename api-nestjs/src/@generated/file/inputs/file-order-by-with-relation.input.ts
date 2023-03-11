import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { AdOrderByWithRelationInput } from '../../ad/inputs/ad-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../../user/inputs/user-order-by-with-relation.input';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    file_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filename?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filesize?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => AdOrderByWithRelationInput, {nullable:true})
    @Type(() => AdOrderByWithRelationInput)
    ad?: AdOrderByWithRelationInput;

    @HideField()
    user_sub?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;
}
