import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserPromotionResolver } from './user-promotions.resolver';
import { UserPromotionsService } from './user-promotions.service';

@Module({
	providers: [UserPromotionResolver, UserPromotionsService, PrismaService],
})
export class UserPromotionModule {}
