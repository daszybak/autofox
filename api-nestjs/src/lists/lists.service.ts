import { Injectable } from '@nestjs/common';
import { List } from '@prisma/client';
import * as _ from 'lodash';
import {
	CreateOneListArgs,
	FindManyListArgs,
	FindUniqueListArgs,
	FindFirstListArgs,
	UpdateOneListArgs,
	DeleteOneListArgs,
	ListGroupByArgs,
	ListGroupBy,
	ListAggregateArgs,
	AggregateList,
	UpdateManyListArgs,
	DeleteManyListArgs,
} from 'src/@generated/list';
import { CreateOneListAdArgs, DeleteOneListAdArgs, ListAd } from 'src/@generated/list-ad';

import { PrismaService } from 'src/prisma.service';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';

@Injectable()
export class ListsService {
	constructor(private prisma: PrismaService) {}

	async create(args: CreateOneListArgs, user: KeyloakUser): Promise<List> {
		return this.prisma.list.create({
			data: {
				...args.data,
				user: {
					connectOrCreate: {
						where: { user_sub: user.sub },
						create: { user_sub: user.sub, name: user.name },
					},
				},
			},
		});
	}

	async createListAd(args: CreateOneListAdArgs): Promise<ListAd> {
		return this.prisma.listAd.create(args);
	}

	async removeListAd(args: DeleteOneListAdArgs): Promise<ListAd> {
		return this.prisma.listAd.delete(args);
	}

	async findAll(args: FindManyListArgs): Promise<List[]> {
		return this.prisma.list.findMany(args);
	}

	async findFirst(args: FindFirstListArgs): Promise<List | null> {
		return this.prisma.list.findFirst({
			...args,
			include: {
				ListAd: {
					include: {
						ad: {
							include: { ad_auto: true, files: true },
						},
					},
				},
			},
		});
	}

	async findOne(args: FindFirstListArgs): Promise<List | null> {
		return this.prisma.list.findFirst({
			...args,
			include: {
				ListAd: {
					include: {
						ad: {
							include: { ad_auto: true, files: true },
						},
					},
				},
			},
		});
	}

	async updateMany(args: UpdateManyListArgs): Promise<number> {
		return (await this.prisma.list.updateMany(args)).count;
	}

	async removeMany(args: DeleteManyListArgs): Promise<number> {
		return (await this.prisma.list.deleteMany(args)).count;
	}
}
