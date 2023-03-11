import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
	private readonly logger = new Logger(TasksService.name);

	constructor(private prisma: PrismaService) {}

	@Cron(CronExpression.EVERY_DAY_AT_1AM)
	async updatePriceEstimatesTask(): Promise<void> {
		await this.prisma.$queryRaw`
			WITH cte as (
				SELECT [dbo].[Ad].[ad_id], PERCENT_RANK() OVER ( ORDER BY [dbo].[Ad].[price_eurocent] DESC) * 5 AS pctRankPrice
				FROM [dbo].[Ad]
			)
			UPDATE [dbo].[Ad] SET [dbo].[Ad].[price_rating] = cte.pctRankPrice
			FROM cte
			WHERE [dbo].[Ad].[deleted_at] IS NULL AND [dbo].[Ad].[ad_id] = cte.ad_id
		`;
	}
}
