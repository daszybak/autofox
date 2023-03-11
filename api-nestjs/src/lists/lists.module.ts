import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsResolver } from './lists.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [ListsResolver, ListsService, PrismaService],
})
export class ListsModule {}
