import { Injectable, Logger } from '@nestjs/common';
import {
	CreateOnePromotionPlanArgs,
	DeleteManyPromotionPlanArgs,
	DeleteOnePromotionPlanArgs,
	FindFirstPromotionPlanArgs,
	FindManyPromotionPlanArgs,
	FindUniquePromotionPlanArgs,
	PromotionPlan,
	UpdateManyPromotionPlanArgs,
	UpdateOnePromotionPlanArgs,
} from 'src/@generated/promotion-plan';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PromotionPlansService {
	private readonly logger = new Logger(PromotionPlansService.name);

	constructor(private prisma: PrismaService) {}

	async create(args: CreateOnePromotionPlanArgs) {
		return this.prisma.promotionPlan.create(args);
	}

	async findAll(args: FindManyPromotionPlanArgs) {
		return this.prisma.promotionPlan.findMany(args);
	}

	async findUnique(args: FindUniquePromotionPlanArgs) {
		return this.prisma.promotionPlan.findUnique(args);
	}

	async findFirst(args: FindFirstPromotionPlanArgs): Promise<PromotionPlan | null> {
		return this.prisma.promotionPlan.findFirst({
			...args,
		});
	}

	async update(args: UpdateOnePromotionPlanArgs) {
		return this.prisma.promotionPlan.update(args);
	}

	async updateMany(args: UpdateManyPromotionPlanArgs) {
		return this.prisma.promotionPlan.updateMany(args);
	}

	async remove(args: DeleteOnePromotionPlanArgs): Promise<PromotionPlan> {
		return this.prisma.promotionPlan.update({
			...args,
			data: {
				deleted_at: new Date(),
			},
		});
	}

	async removeMany(args: DeleteManyPromotionPlanArgs): Promise<number> {
		return (await this.prisma.list.deleteMany(args)).count;
	}
}
