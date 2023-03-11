import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionCreateManyPromotion_planInput } from './user-promotion-create-many-promotion-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPromotionCreateManyPromotion_planInputEnvelope {

    @Field(() => [UserPromotionCreateManyPromotion_planInput], {nullable:false})
    @Type(() => UserPromotionCreateManyPromotion_planInput)
    data!: Array<UserPromotionCreateManyPromotion_planInput>;
}
