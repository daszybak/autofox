import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsResolver } from './ads.resolver';
import { PrismaService } from '../prisma.service';
import { FilesService } from '../files/files.service';
import { ConfigModule } from '../config/config.module';
import { GqlThrottlerGuard } from 'src/guards/gql-throttler.guard';

@Module({
	providers: [AdsResolver, AdsService, PrismaService, FilesService, GqlThrottlerGuard],
	imports: [ConfigModule],
	exports: [AdsService],
})
export class AdsModule {}
