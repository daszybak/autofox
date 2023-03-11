import { Injectable } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common/services';
import { AdPromotion } from '@prisma/client';
import { AuthenticatedUser } from 'nest-keycloak-connect';
import { CreateOneAdPromotionArgs, FindManyAdPromotionArgs, FindUniqueAdPromotionArgs, FindFirstAdPromotionArgs, UpdateOneAdPromotionArgs } from 'src/@generated/ad-promotion';
import { PrismaService } from 'src/prisma.service';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';

@Injectable()
export class AdPromotionsService {
	private readonly logger = new Logger(AdPromotionsService.name);

	constructor(private prisma: PrismaService) {}

	async create(args: CreateOneAdPromotionArgs, @AuthenticatedUser() user: KeyloakUser): Promise<AdPromotion> {
		return this.prisma.adPromotion.create({
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

	async findAll(args: FindManyAdPromotionArgs): Promise<AdPromotion[]> {
		return this.prisma.adPromotion.findMany(args);
	}

	async findFirst(args: FindFirstAdPromotionArgs): Promise<AdPromotion | null> {
		return this.prisma.adPromotion.findFirst(args);
	}

	async findUnique(args: FindUniqueAdPromotionArgs): Promise<AdPromotion | null> {
		return this.prisma.adPromotion.findUnique(args);
	}

	async update(args: UpdateOneAdPromotionArgs): Promise<AdPromotion> {
		return this.prisma.adPromotion.update(args);
	}
}
