import { Injectable } from '@nestjs/common';
// import _ from 'lodash';
import { BlogCreateWithoutUserInput, DeleteOneBlogArgs, FindManyBlogArgs, FindFirstBlogArgs, FindUniqueBlogArgs, UpdateOneBlogArgs, Blog } from 'src/@generated/blog';

import { PrismaService } from 'src/prisma.service';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';

@Injectable()
export class BlogsService {
	constructor(private prisma: PrismaService) {}

	async create(args: BlogCreateWithoutUserInput, user: KeyloakUser): Promise<Blog> {
		return this.prisma.blog.create({
			data: {
				...args,
				user: {
					connectOrCreate: {
						where: { user_sub: user.sub },
						create: { user_sub: user.sub, name: user.name },
					},
				},
			},
		});
	}

	async remove(args: DeleteOneBlogArgs): Promise<Blog> {
		return this.prisma.blog.update({
			...args,
			data: { deleted_at: new Date() },
		});
	}

	async findAll(args: FindManyBlogArgs): Promise<Blog[]> {
		return this.prisma.blog.findMany(args);
	}

	async findOne(args: FindFirstBlogArgs): Promise<Blog> {
		return this.prisma.blog.findFirst({
			...args,
		});
	}

	async findUnique(args: FindUniqueBlogArgs): Promise<Blog | null> {
		return this.prisma.blog.findUnique({
			...args,
		});
	}

	async update(args: UpdateOneBlogArgs): Promise<Blog> {
		return this.prisma.blog.update(args);
	}
}
