import { Injectable } from '@nestjs/common';
import {
	AggregateCategory,
	Category,
	CategoryAggregateArgs,
	CategoryAvgAggregate,
	CategoryGroupBy,
	CategoryGroupByArgs,
	CreateOneCategoryArgs,
	DeleteOneCategoryArgs,
	FindFirstCategoryArgs,
	FindManyCategoryArgs,
	FindUniqueCategoryArgs,
	UpdateOneCategoryArgs,
} from '../@generated/category';
import { PrismaService } from '../prisma.service';
import { UpdateManyCategoriesArgs } from './dto/update-many-categories';

@Injectable()
export class CategoriesService {
	constructor(private prisma: PrismaService) {}

	async create(args: CreateOneCategoryArgs): Promise<Category> {
		return this.prisma.category.create({
			data: args.data,
		});
	}

	async findAll(args: FindManyCategoryArgs): Promise<Category[]> {
		return this.prisma.category.findMany(args);
	}

	async findUnique(args: FindUniqueCategoryArgs): Promise<Category | null> {
		return this.prisma.category.findUnique(args);
	}

	async findOne(args: FindFirstCategoryArgs): Promise<Category | null> {
		return this.prisma.category.findFirst(args);
	}

	async update(args: UpdateOneCategoryArgs): Promise<Category> {
		return this.prisma.category.update(args);
	}

	async updateMany(args: UpdateManyCategoriesArgs): Promise<Category[]> {
		return await this.prisma.$transaction(args.items.map((e) => this.prisma.category.update(e)));
	}

	async remove(args: DeleteOneCategoryArgs): Promise<Category> {
		return this.prisma.category.update({
			...args,
			data: {
				deleted_at: new Date(),
			},
		});
	}

	async groupBy(args: CategoryGroupByArgs): Promise<CategoryGroupBy> {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await this.prisma.category.groupBy(args);
	}

	async aggregate(args: CategoryAggregateArgs): Promise<AggregateCategory> {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await this.prisma.category.aggregate(args);
	}
}
