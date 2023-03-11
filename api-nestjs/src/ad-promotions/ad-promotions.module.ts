import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdPromotionResolver } from './ad-promotions.resolver';
import { AdPromotionsService } from './ad-promotions.service';

@Module({
	providers: [AdPromotionResolver, AdPromotionsService, PrismaService],
})
export class AdPromotionModule {}
