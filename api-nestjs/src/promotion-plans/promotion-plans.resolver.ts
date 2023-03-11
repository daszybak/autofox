import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Public, Resource, Roles, Scopes } from 'nest-keycloak-connect';
import {
	PromotionPlan,
	CreateOnePromotionPlanArgs,
	UpdateOnePromotionPlanArgs,
	FindManyPromotionPlanArgs,
	FindUniquePromotionPlanArgs,
	FindFirstPromotionPlanArgs,
	DeleteOnePromotionPlanArgs,
} from 'src/@generated/promotion-plan';
import { PromotionPlansService } from './promotion-plans.service';

@Resolver(() => PromotionPlan)
@Resource(PromotionPlan.name)
export class PromotionPlansResolver {
	constructor(private readonly promotionPlansService: PromotionPlansService) {}

	@Mutation(() => PromotionPlan)
	@Roles({ roles: ['realm:admin'] })
	@Scopes('create')
	createPromotionPlan(@Args() args: CreateOnePromotionPlanArgs) {
		return this.promotionPlansService.create(args);
	}

	@Query(() => [PromotionPlan])
	@Public(true)
	@Scopes('find')
	findAllPromotionPlans(@Args() args: FindManyPromotionPlanArgs) {
		return this.promotionPlansService.findAll(args);
	}

	@Query(() => PromotionPlan, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniquePromotionPlan(@Args() args: FindUniquePromotionPlanArgs) {
		return this.promotionPlansService.findUnique(args);
	}

	@Query(() => PromotionPlan, { nullable: true })
	@Public(true)
	@Scopes('find')
	findFirstPromotionPlan(@Args() args: FindFirstPromotionPlanArgs) {
		return this.promotionPlansService.findFirst(args);
	}

	@Mutation(() => PromotionPlan)
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	updatePromotionPlan(@Args() args: UpdateOnePromotionPlanArgs) {
		return this.promotionPlansService.update(args);
	}

	@Mutation(() => PromotionPlan)
	@Roles({ roles: ['realm:admin'] })
	@Scopes('remove')
	removePromotionPlan(@Args() args: DeleteOnePromotionPlanArgs) {
		return this.promotionPlansService.remove(args);
	}
}
