import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticatedUser, Public, Resource, Scopes } from 'nest-keycloak-connect';
import { CreateOneAdPromotionArgs, FindFirstAdPromotionArgs, FindManyAdPromotionArgs, FindUniqueAdPromotionArgs, AdPromotion } from 'src/@generated/ad-promotion';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';
import { AdPromotionsService } from './ad-promotions.service';

@Resolver()
@Resource(AdPromotion.name)
export class AdPromotionResolver {
	constructor(private readonly AdPromotionService: AdPromotionsService) {}

	@Mutation(() => AdPromotion)
	@Scopes('create')
	createAdPromotion(@AuthenticatedUser() user: KeyloakUser, @Args() args: CreateOneAdPromotionArgs) {
		return this.AdPromotionService.create(args, user);
	}

	@Query(() => [AdPromotion])
	@Public(true)
	@Scopes('find')
	findAllAdPromotions(@Args() args: FindManyAdPromotionArgs) {
		return this.AdPromotionService.findAll(args);
	}

	@Query(() => AdPromotion, { nullable: true })
	@Public(true)
	@Scopes('find')
	findOneAdPromotion(@Args() args: FindFirstAdPromotionArgs) {
		return this.AdPromotionService.findFirst(args);
	}

	@Query(() => AdPromotion, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniqueAdPromotion(@Args() args: FindUniqueAdPromotionArgs) {
		return this.AdPromotionService.findUnique(args);
	}
}
