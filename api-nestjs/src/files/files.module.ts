import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesResolver } from './files.resolver';
import { PrismaService } from '../prisma.service';
import { ConfigModule } from '../config/config.module';

@Module({
	providers: [FilesResolver, FilesService, PrismaService],
	imports: [ConfigModule],
})
export class FilesModule {}
