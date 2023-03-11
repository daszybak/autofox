import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs, DeleteOneUserArgs, FindFirstUserArgs, FindManyUserArgs, FindUniqueUserArgs, UpdateOneUserArgs } from '../@generated/user';
import { User } from '../@generated/user/models/user.model';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async create(args: CreateOneUserArgs): Promise<User> {
		return this.prisma.user.create({
			data: args.data,
		});
	}

	async findAll(args: FindManyUserArgs): Promise<User[]> {
		return this.prisma.user.findMany(args);
	}

	async findUnique(args: FindUniqueUserArgs): Promise<User | null> {
		return this.prisma.user.findUnique(args);
	}

	async findOne(args: FindFirstUserArgs): Promise<User> {
		return this.prisma.user.findFirst(args);
	}

	async update(args: UpdateOneUserArgs): Promise<User> {
		return this.prisma.user.update(args);
	}

	async remove(args: DeleteOneUserArgs): Promise<User> {
		return this.prisma.user.delete(args);
	}
}
