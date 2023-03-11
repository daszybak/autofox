import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdsModule } from './ads/ads.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { KeycloakConfigService } from './config/keycloak-config.service';
import { ConfigModule } from './config/config.module';
import { APP_GUARD } from '@nestjs/core';
import { FilesModule } from './files/files.module';
import { ListsModule } from './lists/lists.module';
import { BlogsModule } from './blogs/blogs.module';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { PromotionPlansModule } from './promotion-plans/promotion-plans.module';
import { AdPromotionModule } from './ad-promotions/ad-promotions.module';
import { UserPromotionModule } from './user-promotion/user-promotions.module';
import { MessagingChannelModule } from './messaging-channel/messaging-channel.module';

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			debug: true,
			playground: true,
			autoSchemaFile: join(process.cwd(), '../@generated/schema.gql'),
		}),
		KeycloakConnectModule.registerAsync({
			useExisting: KeycloakConfigService,
			imports: [ConfigModule],
		}),
		ScheduleModule.forRoot(),
		ThrottlerModule.forRoot({
			ttl: 60,
			limit: 60,
		}),
		UsersModule,
		AdsModule,
		CategoriesModule,
		FilesModule,
		ListsModule,
		BlogsModule,
		TasksModule,
		PromotionPlansModule,
		AdPromotionModule,
		UserPromotionModule,
		MessagingChannelModule,
	],
	controllers: [AppController],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
		{
			provide: APP_GUARD,
			useClass: ResourceGuard,
		},
		{
			provide: APP_GUARD,
			useClass: RoleGuard,
		},
		AppService,
	],
})
export class AppModule {}
