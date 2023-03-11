import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PromotionPlansResolver } from './promotion-plans.resolver';
import { PromotionPlansService } from './promotion-plans.service';

@Module({
	providers: [PromotionPlansResolver, PromotionPlansService, PrismaService],
})
export class PromotionPlansModule {}
