import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsResolver } from './blogs.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
	providers: [BlogsResolver, BlogsService, PrismaService],
})
export class BlogsModule {}
