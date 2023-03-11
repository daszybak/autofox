import { Injectable } from '@nestjs/common/decorators';
import { Logger } from '@nestjs/common/services';
import { UserPromotion } from '@prisma/client';
import { AuthenticatedUser } from 'nest-keycloak-connect';
import {
	CreateOneUserPromotionArgs,
	FindManyUserPromotionArgs,
	FindUniqueUserPromotionArgs,
	FindFirstUserPromotionArgs,
	UpdateOneUserPromotionArgs,
} from 'src/@generated/user-promotion';
import { PrismaService } from 'src/prisma.service';
import { KeyloakUser } from 'src/users/dto/keycloakUser.typescript';

@Injectable()
export class UserPromotionsService {
	private readonly logger = new Logger(UserPromotionsService.name);

	constructor(private prisma: PrismaService) {}

	async create(args: CreateOneUserPromotionArgs, @AuthenticatedUser() user: KeyloakUser): Promise<UserPromotion> {
		return this.prisma.userPromotion.create({
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

	async findAll(args: FindManyUserPromotionArgs): Promise<UserPromotion[]> {
		return this.prisma.userPromotion.findMany(args);
	}

	async findFirst(args: FindFirstUserPromotionArgs): Promise<UserPromotion | null> {
		return this.prisma.userPromotion.findFirst(args);
	}

	async findUnique(args: FindUniqueUserPromotionArgs): Promise<UserPromotion | null> {
		return this.prisma.userPromotion.findUnique(args);
	}

	async update(args: UpdateOneUserPromotionArgs): Promise<UserPromotion> {
		return this.prisma.userPromotion.update(args);
	}
}
