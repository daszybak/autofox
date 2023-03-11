import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { MAX_PRICE_RATING } from 'src/utils/constants';
import {
	Ad,
	AdAggregateArgs,
	AdCreateWithoutUserInput,
	AdGroupBy,
	AdGroupByArgs,
	AggregateAd,
	DeleteOneAdArgs,
	FindFirstAdArgs,
	FindManyAdArgs,
	FindUniqueAdArgs,
	UpdateOneAdArgs,
} from '../@generated/ad';
import { FileCreateNestedManyWithoutAdInput } from '../@generated/file';
import { FilesService } from '../files/files.service';
import { PrismaService } from '../prisma.service';
import { AdPrice, AdPriceRating } from './dto/estimate-price.dto';

@Injectable()
export class AdsService {
	private readonly logger = new Logger(AdsService.name);

	constructor(private prisma: PrismaService, private filesService: FilesService) {}

	async create(input: AdCreateWithoutUserInput, user_sub: string, user_name: string): Promise<Ad> {
		const files: FileCreateNestedManyWithoutAdInput = {
			create: input.files?.create ? this.filesService.processFileInput(input.files?.create, user_sub) : undefined,
			createMany: input.files?.createMany ? { data: this.filesService.processFileInput(input.files?.createMany.data, user_sub) } : undefined,
			connect: input.files?.connect,
			//connectOrCreate: args.data.files?.connectOrCreate,
		};

		const priceRating = await this.createPriceRating();

		return this.prisma.ad.create({
			data: {
				...input,
				price_rating: priceRating.price_rating,
				files,
				user: {
					connectOrCreate: {
						where: { user_sub },
						create: { user_sub, name: user_name },
					},
				},
			},
			include: {
				ad_auto: true,
				ad_house: true,
				ad_categories: true,
				user: true,
				files: true,
			},
		});
	}

	async findAll(args: FindManyAdArgs): Promise<Ad[]> {
		return this.prisma.ad.findMany({
			...args,
			include: {
				ad_auto: true,
				ad_house: true,
				ad_categories: true,
				user: true,
				files: true,
			},
		});
	}

	async findUnique(args: FindUniqueAdArgs): Promise<Ad | null> {
		return this.prisma.ad.findUnique({
			...args,
			include: {
				ad_auto: true,
				ad_house: true,
				ad_categories: true,
				user: true,
				files: true,
			},
		});
	}

	async findOne(args: FindFirstAdArgs): Promise<Ad> {
		return this.prisma.ad.findFirst({
			...args,
			include: {
				ad_auto: true,
				ad_house: true,
				ad_categories: true,
				user: true,
				files: true,
			},
		});
	}

	async update(args: UpdateOneAdArgs): Promise<Ad> {
		return this.prisma.ad.update({
			...args,
			include: {
				ad_auto: true,
				ad_house: true,
				ad_categories: true,
				user: true,
				files: true,
			},
		});
	}

	async remove(args: DeleteOneAdArgs): Promise<Ad> {
		return this.prisma.ad.update({
			...args,
			data: {
				deleted_at: new Date(),
			},
		});
	}

	async groupBy(args: AdGroupByArgs): Promise<AdGroupBy> {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await this.prisma.ad.groupBy(args);
	}

	async aggregate(args: AdAggregateArgs): Promise<AggregateAd> {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await this.prisma.ad.aggregate(args);
	}

	async findMedianPrice(): Promise<Ad['price_eurocent']> {
		const adWithOnlyMedianPrice = await this.prisma.$queryRaw<Pick<Ad, 'price_eurocent'>[]>`
			SELECT TOP(1) PERCENTILE_DISC(0.5) WITHIN GROUP ( ORDER BY [dbo].[Ad].[price_eurocent] ASC ) OVER ( ) AS price_eurocent 
			FROM [dbo].[Ad] 
			WHERE [dbo].[Ad].[deleted_at] IS NULL
		`;

		if (adWithOnlyMedianPrice.length === 0) return 0;
		return adWithOnlyMedianPrice[0].price_eurocent;
	}

	async createPriceRating(): Promise<AdPriceRating> {
		const medianPrice = await this.findMedianPrice();

		const ad = await this.prisma.ad.findFirst({
			where: {
				price_eurocent: {
					lte: medianPrice,
				},
			},
		});

		if (!ad)
			return {
				price_rating: new Prisma.Decimal(MAX_PRICE_RATING),
			};

		return {
			price_rating: ad.price_rating,
		};
	}

	async estimatePrice(/*args: EstimatePriceArgs*/): Promise<AdPrice> {
		return {
			price_eurocent: await this.findMedianPrice(),
		};
	}
}
