import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Throttle } from '@nestjs/throttler';
import { AuthenticatedUser, Public, Resource, Roles, Scopes } from 'nest-keycloak-connect';
import { GqlThrottlerGuard } from 'src/guards/gql-throttler.guard';
import {
	Ad,
	AdAggregateArgs,
	AdCreateWithoutUserInput,
	AdGroupBy,
	AdGroupByArgs,
	AggregateAd,
	DeleteOneAdArgs,
	FindFirstAdArgs,
	FindManyAdArgs,
	FindUniqueAdArgs,
	UpdateOneAdArgs,
} from '../@generated/ad';
import { AdsService } from './ads.service';
import { AdPrice /*, EstimateAdPriceArgs*/ } from './dto/estimate-price.dto';
import { UpdateOneAdWithModerationArgs } from './dto/update-one-ad-with-moderation.args';

@Resolver(() => Ad)
@Resource(Ad.name)
export class AdsResolver {
	constructor(private readonly adsService: AdsService) {}

	@Mutation(() => Ad)
	@Scopes('create')
	createAd(@AuthenticatedUser() user: any, @Args('data') args: AdCreateWithoutUserInput) {
		return this.adsService.create(args, user.sub, user.name);
	}

	@Query(() => [Ad])
	@Public(true)
	@Scopes('find')
	findAllAds(@Args() args: FindManyAdArgs) {
		return this.adsService.findAll(args);
	}

	@Query(() => Ad, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniqueAd(@Args() args: FindUniqueAdArgs) {
		return this.adsService.findUnique(args);
	}

	@Query(() => Ad, { nullable: true })
	@Public(true)
	@Scopes('find')
	findOneAd(@Args() args: FindFirstAdArgs) {
		return this.adsService.findOne(args);
	}

	@Mutation(() => Ad, { nullable: true })
	@Scopes('update')
	updateAd(@Args() args: UpdateOneAdArgs) {
		return this.adsService.update(args);
	}

	@Mutation(() => Ad, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	adminUpdateAd(@Args() args: UpdateOneAdWithModerationArgs) {
		return this.adsService.update(args);
	}

	@Mutation(() => Ad, { nullable: true })
	@Scopes('remove')
	removeAd(@Args() args: DeleteOneAdArgs) {
		return this.adsService.remove(args);
	}

	@Query(() => [AdGroupBy], { nullable: true })
	@Public(true)
	@Scopes('find')
	groupByAds(@Args() args: AdGroupByArgs) {
		return this.adsService.groupBy(args);
	}

	@Query(() => AggregateAd, { nullable: false })
	@Public(true)
	@Scopes('find')
	aggregateAds(@Args() args: AdAggregateArgs) {
		return this.adsService.aggregate(args);
	}

	@Query(() => AdPrice, { nullable: false })
	@UseGuards(GqlThrottlerGuard)
	@Throttle()
	@Public(true)
	@Scopes('find')
	estimateAdPrice(/*@Args() args: EstimateAdPriceArgs*/) {
		return this.adsService.estimatePrice();
	}
}
