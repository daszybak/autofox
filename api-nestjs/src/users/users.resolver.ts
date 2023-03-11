import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../@generated/user/models/user.model';
import { CreateOneUserArgs, DeleteOneUserArgs, FindFirstUserArgs, FindManyUserArgs, FindUniqueUserArgs, UpdateOneUserArgs } from '../@generated/user';
import { Public, Resource, Roles, Scopes } from 'nest-keycloak-connect';
import _ from 'lodash';
import { UpdateOneUserWithModerationArgs } from './dto/update-one-user-with-moderation.args';

@Resolver(() => User)
@Resource(User.name)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation(() => User)
	@Roles({ roles: ['realm:admin'] })
	@Scopes('create')
	createUser(@Args() args: CreateOneUserArgs) {
		return this.usersService.create(args);
	}

	@Query(() => [User])
	@Roles({ roles: ['realm:admin'] })
	@Scopes('find')
	findAllUsers(@Args() args: FindManyUserArgs) {
		return this.usersService.findAll(args);
	}

	@Query(() => User, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniqueUser(@Args() args: FindUniqueUserArgs) {
		return this.usersService.findUnique(args);
	}

	@Query(() => User, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('find')
	findOneUser(@Args() args: FindFirstUserArgs) {
		return this.usersService.findOne(args);
	}

	@Mutation(() => User, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	updateUser(@Args() args: UpdateOneUserArgs) {
		return this.usersService.update(args);
	}

	@Mutation(() => User, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	adminUpdateUser(@Args() args: UpdateOneUserWithModerationArgs) {
		return this.usersService.update(args);
	}

	@Mutation(() => User, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('remove')
	removeUser(@Args() args: DeleteOneUserArgs) {
		return this.usersService.remove(args);
	}
}
