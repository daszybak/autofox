import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../../user/models/user.model';
import { AdCategory } from '../../ad-category/models/ad-category.model';
import { AdAuto } from '../../ad-auto/models/ad-auto.model';
import { AdHouse } from '../../ad-house/models/ad-house.model';
import { File } from '../../file/models/file.model';
import { ListAd } from '../../list-ad/models/list-ad.model';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { AdPromotion } from '../../ad-promotion/models/ad-promotion.model';
import { AdCount } from '../outputs/ad-count.output';

@ObjectType()
export class Ad {

    @Field(() => ID, {nullable:false})
    ad_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Float, {nullable:true})
    coords_latitude!: number | null;

    @Field(() => Float, {nullable:true})
    coords_longitude!: number | null;

    @Field(() => Int, {nullable:true})
    coords_radius!: number | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Int, {nullable:true})
    price_eurocent!: number | null;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => [AdCategory], {nullable:true})
    ad_categories?: Array<AdCategory>;

    @Field(() => AdAuto, {nullable:true})
    ad_auto?: AdAuto | null;

    @Field(() => AdHouse, {nullable:true})
    ad_house?: AdHouse | null;

    @Field(() => [File], {nullable:true})
    files?: Array<File>;

    @Field(() => [ListAd], {nullable:true})
    ListAd?: Array<ListAd>;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_sold!: boolean;

    /**
     * 0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error
     */
    @Field(() => Int, {nullable:false,defaultValue:0,description:'0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error'})
    moderation_flag!: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price_rating!: Decimal | null;

    @Field(() => [AdPromotion], {nullable:true})
    AdPromotion?: Array<AdPromotion>;

    @Field(() => AdCount, {nullable:false})
    _count?: AdCount;
}
