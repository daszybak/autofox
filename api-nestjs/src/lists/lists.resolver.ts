import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Resource, Roles, Scopes, Public, AuthenticatedUser } from 'nest-keycloak-connect';
import { ListsService } from 'src/lists/lists.service';
import {
	List,
	CreateOneListArgs,
	FindManyListArgs,
	FindUniqueListArgs,
	FindFirstListArgs,
	UpdateOneListArgs,
	DeleteOneListArgs,
	ListGroupBy,
	ListGroupByArgs,
	AggregateList,
	ListAggregateArgs,
} from 'src/@generated/list';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';
import * as _ from 'lodash';
import { CreateOneListAdArgs, DeleteOneListAdArgs, FindFirstListAdArgs, FindUniqueListAdArgs, ListAd } from 'src/@generated/list-ad';
import { FindUniqueAdArgs } from 'src/@generated/ad';

@Resolver(() => List)
@Resource(List.name)
export class ListsResolver {
	constructor(private readonly listsService: ListsService) {}

	@Mutation(() => List)
	@Scopes('create')
	createList(@AuthenticatedUser() user: KeyloakUser, @Args() args: CreateOneListArgs) {
		_.set(args, 'data.user.connect.user_sub', user.sub);
		return this.listsService.create(args, user);
	}

	@Query(() => [List])
	@Scopes('find')
	findMyLists(@AuthenticatedUser() user: KeyloakUser, @Args() args: FindManyListArgs) {
		_.set(args, 'where.user_sub', { equals: user.sub });
		return this.listsService.findAll(args);
	}

	@Query(() => List, { nullable: true })
	@Scopes('find')
	findOneList(@AuthenticatedUser() user: KeyloakUser, @Args() args: FindFirstListArgs) {
		_.set(args, 'where.user_sub', { equals: user.sub });
		return this.listsService.findOne(args);
	}

	@Mutation(() => List, { nullable: true })
	@Scopes('update')
	async updateList(@AuthenticatedUser() user: KeyloakUser, @Args() args: UpdateOneListArgs) {
		if (!args.where.list_id) {
			throw Error('list_id is required');
		}
		const where = { list_id: { equals: args.where.list_id }, user_sub: { equals: user.sub } };
		await this.listsService.updateMany({ where, data: args.data });
		return this.listsService.findOne({ where });
	}

	@Mutation(() => Int, { nullable: true })
	@Scopes('remove')
	removeList(@AuthenticatedUser() user: KeyloakUser, @Args() args: DeleteOneListArgs) {
		if (!args.where.list_id) {
			throw Error('list_id is required');
		}
		const where = { list_id: { equals: args.where.list_id }, user_sub: { equals: user.sub } };

		return this.listsService.removeMany({ where });
	}

	@Mutation(() => ListAd, { nullable: true })
	@Scopes('update')
	async createListAd(@AuthenticatedUser() user: KeyloakUser, @Args() args: CreateOneListAdArgs) {
		let list;
		if (args.data.list.connect.list_id) {
			list = await this.listsService.findOne({ where: { user_sub: { equals: user.sub }, list_id: { equals: args.data.list.connect.list_id } } });
		}
		if (!list) {
			throw Error('connect.list_id is required');
		}

		return this.listsService.createListAd(args);
	}

	@Mutation(() => ListAd, { nullable: true })
	@Scopes('remove')
	async removeListAd(@AuthenticatedUser() user: KeyloakUser, @Args() args: DeleteOneListAdArgs) {
		let list;
		if (args.where.ad_id_list_id.list_id) {
			list = await this.listsService.findOne({ where: { user_sub: { equals: user.sub }, list_id: { equals: args.where.ad_id_list_id.list_id } } });
		}
		if (!list) {
			throw Error('connect.list_id is required');
		}

		return this.listsService.removeListAd(args);
	}

	@Mutation(() => ListAd, { nullable: true })
	@Scopes('update')
	async addToFavorites(@AuthenticatedUser() user: KeyloakUser, @Args() args: FindUniqueAdArgs) {
		let list = await this.listsService.findOne({ where: { list_type: { equals: 0 }, user_sub: { equals: user.sub } } });
		if (!list) {
			list = await this.listsService.create({ data: { title: 'Favorites', list_type: 0, search_params: '{}' } } as any, user);
		}

		return await this.listsService.createListAd({
			data: {
				list: { connect: { list_id: list.list_id } },
				ad: { connect: args.where },
			},
		});
	}
}
