import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Resource, Roles, Scopes, Public, AuthenticatedUser } from 'nest-keycloak-connect';
// import _ from 'lodash';

import { BlogsService } from 'src/blogs/blogs.service';
import { Blog, BlogCreateWithoutUserInput, DeleteOneBlogArgs, FindFirstBlogArgs, FindManyBlogArgs, FindUniqueBlogArgs, UpdateOneBlogArgs } from 'src/@generated/blog';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';

@Resolver(() => Blog)
@Resource(Blog.name)
export class BlogsResolver {
	constructor(private readonly blogsService: BlogsService) {}

	@Mutation(() => Blog)
	@Roles({ roles: ['realm:admin'] })
	@Scopes('create')
	createBlog(@AuthenticatedUser() user: KeyloakUser, @Args('data') args: BlogCreateWithoutUserInput) {
		return this.blogsService.create(args, user);
	}

	@Query(() => [Blog])
	@Public(true)
	@Scopes('find')
	findAllBlogs(@Args() args: FindManyBlogArgs) {
		return this.blogsService.findAll(args);
	}

	@Query(() => Blog, { nullable: true })
	@Public(true)
	@Scopes('find')
	findUniqueBlog(@Args() args: FindUniqueBlogArgs) {
		return this.blogsService.findUnique(args);
	}

	@Query(() => Blog, { nullable: true })
	@Public(true)
	@Scopes('find')
	findOneBlog(@Args() args: FindFirstBlogArgs) {
		return this.blogsService.findOne(args);
	}

	@Mutation(() => Blog, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	updateBlog(@Args() args: UpdateOneBlogArgs) {
		return this.blogsService.update(args);
	}

	@Mutation(() => Blog, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('update')
	adminUpdateBlog(@Args() args: UpdateOneBlogArgs) {
		return this.blogsService.update(args);
	}

	@Mutation(() => Blog, { nullable: true })
	@Roles({ roles: ['realm:admin'] })
	@Scopes('remove')
	removeBlog(@Args() args: DeleteOneBlogArgs) {
		return this.blogsService.remove(args);
	}
}
