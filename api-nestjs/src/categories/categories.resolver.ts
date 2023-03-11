import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import {
	AggregateCategory,
	Category,
	CategoryAggregateArgs,
	CategoryGroupBy,
	CategoryGroupByArgs,
	CreateOneCategoryArgs,
	DeleteOneCategoryArgs,
	FindFirstCategoryArgs,
	FindManyCategoryArgs,
	FindUniqueCategoryArgs,
	UpdateOneCategoryArgs,
} from '../@generated/category';
import { Public, Resource, Roles, Scopes } from 'nest-keycloak-connect';
import { UpdateManyCategoriesArgs } from './dto/update-many-categories';

@Resolver(() => Category)
@Resource(Category.name)
export class CategoriesResolver {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Mutation(() => Category)
	@Roles({ roles: ['realm:admin'] })
	@Scopes('create')
	createCategory(@Args() args: CreateOneCategoryArgs) {
		return this.categoriesService.create(args);
	}

	@Query(() => [Category])
	@Public(true)
	@Scopes('find')
	findAllCategories(@Args() args: FindManyCategoryArgs) {
		return this.categoriesService.findAll(args);
	}

	@Query(() => Category, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniqueCategory(@Args() args: FindUniqueCategoryArgs) {
		return this.categoriesService.findUnique(args);
	}

	@Query(() => Category, { nullable: true })
	@Public(true)
	@Scopes('find')
	findOneCategory(@Args() args: FindFirstCategoryArgs) {
		return this.categoriesService.findOne(args);
	}

	@Mutation(() => Category, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	updateCategory(@Args() args: UpdateOneCategoryArgs) {
		return this.categoriesService.update(args);
	}

	@Mutation(() => Category, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('remove')
	removeCategory(@Args() args: DeleteOneCategoryArgs) {
		return this.categoriesService.remove(args);
	}

	@Mutation(() => [Category], { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	updateManyCategories(@Args() args: UpdateManyCategoriesArgs) {
		return this.categoriesService.updateMany(args);
	}

	@Query(() => [CategoryGroupBy], { nullable: true })
	@Public(true)
	@Scopes('find')
	groupByCategories(@Args() args: CategoryGroupByArgs) {
		return this.categoriesService.groupBy(args);
	}

	@Query(() => AggregateCategory, { nullable: false })
	@Public(true)
	@Scopes('find')
	aggregateCategories(@Args() args: CategoryAggregateArgs) {
		return this.categoriesService.aggregate(args);
	}
}
