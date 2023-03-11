import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Ad } from '../../ad/models/ad.model';
import { File } from '../../file/models/file.model';
import { List } from '../../list/models/list.model';
import { Blog } from '../../blog/models/blog.model';
import { Int } from '@nestjs/graphql';
import { UserPromotion } from '../../user-promotion/models/user-promotion.model';
import { AdPromotion } from '../../ad-promotion/models/ad-promotion.model';
import { MessagingChannel } from '../../messaging-channel/models/messaging-channel.model';
import { UserCount } from '../outputs/user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    user_sub!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => [Ad], {nullable:true})
    ads?: Array<Ad>;

    @Field(() => [File], {nullable:true})
    files?: Array<File>;

    @Field(() => [List], {nullable:true})
    lists?: Array<List>;

    @Field(() => [Blog], {nullable:true})
    blogs?: Array<Blog>;

    /**
     * 0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error
     */
    @Field(() => Int, {nullable:false,defaultValue:0,description:'0 - Not-moderated, 1 - Blocked, 11 - Auto-moderated success, 12 - Auto-moderated error, 21 - Manually-moderated success, 22 - Manually-moderated error'})
    moderation_flag!: number;

    @Field(() => [UserPromotion], {nullable:true})
    UserPromotion?: Array<UserPromotion>;

    @Field(() => [AdPromotion], {nullable:true})
    AdPromotion?: Array<AdPromotion>;

    @Field(() => [MessagingChannel], {nullable:true})
    MessagingChannel?: Array<MessagingChannel>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
