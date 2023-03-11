import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthenticatedUser, Public, Resource, Scopes } from 'nest-keycloak-connect';
import { CreateOneUserPromotionArgs, FindFirstUserPromotionArgs, FindManyUserPromotionArgs, FindUniqueUserPromotionArgs, UserPromotion } from 'src/@generated/user-promotion';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';
import { UserPromotionsService } from './user-promotions.service';

@Resolver()
@Resource(UserPromotion.name)
export class UserPromotionResolver {
	constructor(private readonly userPromotionService: UserPromotionsService) {}

	@Mutation(() => UserPromotion)
	@Scopes('create')
	createUserPromotion(@AuthenticatedUser() user: KeyloakUser, @Args() args: CreateOneUserPromotionArgs) {
		return this.userPromotionService.create(args, user);
	}

	@Query(() => [UserPromotion])
	@Public(true)
	@Scopes('find')
	findAllUserPromotions(@Args() args: FindManyUserPromotionArgs) {
		return this.userPromotionService.findAll(args);
	}

	@Query(() => UserPromotion, { nullable: true })
	@Public(true)
	@Scopes('find')
	findOneUserPromotion(@Args() args: FindFirstUserPromotionArgs) {
		return this.userPromotionService.findFirst(args);
	}

	@Query(() => UserPromotion, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniqueUserPromotion(@Args() args: FindUniqueUserPromotionArgs) {
		return this.userPromotionService.findUnique(args);
	}
}
