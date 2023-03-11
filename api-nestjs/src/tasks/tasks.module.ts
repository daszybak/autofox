import { Module } from '@nestjs/common';
import { AdsModule } from 'src/ads/ads.module';
import { TasksService } from './tasks.service';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [TasksService, PrismaService],
	imports: [AdsModule],
	exports: [TasksService],
})
export class TasksModule {}
