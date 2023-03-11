# Autofox backend / api.

## Installation

Tasks below are defined as vscode tasks. It is convenient to run them with `Task Explorer` extension.

1. Have docker installed
2. Have `node` and `yarn` installed
3. Have vscode with docker extension
4. Clone the repo
5. Run `yarn install`
6. Copy `.env.example` to `.env` and modify if needed
7. Right click on `docker-compose.yml` file in vscode and select `compose up`.
8. Wait for containers to boot
9. Create database on sql server: Run task `Docker-mssql_create_database`
10. Migrate database: Run task `prisma_migrate` (either native or docker)
11. Navigate to http://localhost:3001/

## Vscode extentions:

1. Docker: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
2. Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
3. Task Explorer: https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer
4. Draw.io Integration: https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio
5. Prisma: https://marketplace.visualstudio.com/items?itemName=Prisma.prisma
6. GraphQL: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

## Generating new resource:

Run the commands with vscode task manager either in docker (if using it in container) or in native (if running it directly in your machine).

1. Add new entity definition to `./prisma/schema.prisma`
2. Run `prisma_regenerate_schema` both in docker and native (for typescript to work)
3. Run `create_new_resource`, select "GraphQL (code first)"
4. Delete generated `./src/[resource_name]/dto` and `./src/[resource_name]/entities` folders
5. Add `PrismaService` to `providers` section in `./src/[resource_name]/[resource_name].module.ts`.
6. Modify `./src/[resource_name]/[resource_name].resolver.ts` similar to snippet below (replace `User` with your entity):

```typescript
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from 'src/@generated/user/models/user.model';
import { CreateOneUserArgs, DeleteOneUserArgs, FindManyUserArgs, FindUniqueUserArgs, UpdateOneUserArgs } from 'src/@generated/user';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Mutation(() => User)
	createUser(@Args() args: CreateOneUserArgs) {
		return this.usersService.create(args);
	}

	@Query(() => [User], { name: 'users' })
	findAll(@Args() args: FindManyUserArgs) {
		return this.usersService.findAll(args);
	}

	@Query(() => User, { name: 'user' })
	findOne(@Args() args: FindUniqueUserArgs) {
		return this.usersService.findOne(args);
	}

	@Mutation(() => User)
	updateUser(@Args() args: UpdateOneUserArgs) {
		return this.usersService.update(args);
	}

	@Mutation(() => User)
	removeUser(@Args() args: DeleteOneUserArgs) {
		return this.usersService.remove(args);
	}
}
```

7. Modify `./src/[resource_name]/[resource_name].service.ts` similar to snippet below (replace `User` with your entity):

```typescript
import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs, DeleteOneUserArgs, FindManyUserArgs, FindUniqueUserArgs, UpdateOneUserArgs } from 'src/@generated/user';
import { User } from 'src/@generated/user/models/user.model';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async create(args: CreateOneUserArgs): Promise<User> {
		return this.prisma.user.create({
			data: args.data,
		});
	}

	async findAll(args: FindManyUserArgs): Promise<User[]> {
		return this.prisma.user.findMany(args);
	}

	async findOne(args: FindUniqueUserArgs): Promise<User> {
		return this.prisma.user.findUnique(args);
	}

	async update(args: UpdateOneUserArgs): Promise<User> {
		return this.prisma.user.update(args);
	}

	async remove(args: DeleteOneUserArgs): Promise<User> {
		return this.prisma.user.delete(args);
	}
}
```

## Example graphql queries (subject for frequent changes)

You can run all queries here: http://api.autofox.iddqd.hr/graphql

### Categories

```graphql
mutation createCategory {
	createCategory(data: { name: "Rijeka", code: "City" }) {
		code
		name
		category_id
	}
}

query getCategories {
	categories {
		code
		name
		category_id
	}
}

query getCategory {
	category(where: { category_id: 1 }) {
		code
		name
		category_id
	}
}
```

### Users

```graphql
mutation createUser {
	createUser(data: { name: "test", email: "email", cloud_user_id: 2 }) {
		user_id
		name
		email
	}
}

query getUsersWithAds {
	users {
		user_id
		name
		cloud_user_id
		ads {
			ad_id
			title
			text
		}
	}
}
```

### Ads

```graphql
mutation createAdWithAuto {
	createAd(
		data: {
			title: "test2"
			text: "test"
			address: "My home"
			price_eurocent: 1500000
			ad_auto: {
				create: {
					vehicle_type: { connectOrCreate: { where: { category_id: 1 }, create: { code: "AdAutoVehicleType", name: "Sedan" } } }
					condition_type: { connect: { category_id: 1 } }
					make: "Mazda"
					model: "cx3"
					year: 2015
					km: 500
					power_kw: 98
				}
			}
			ad_categories: { create: { category: { create: { code: "Country", name: "Croatia" } } } }
			user: { connectOrCreate: { where: { email: "test@test.com" }, create: { email: "test@test.com", cloud_user_id: 1 } } }
		}
	) {
		title
		text
		ad_id
		address
		ad_auto {
			ad_auto_id
			make
			model
			vehicle_type_cid
			km
			fuel_type_cid
		}

		ad_categories {
			category {
				category_id
				name
				code
			}
		}
		user {
			email
			cloud_user_id
			user_id
		}
	}
}

query getAds {
	ads {
		ad_id
		title
		ad_auto {
			ad_auto_id
			make
			model
			vehicle_type_cid
			vehicle_type {
				category_id
				name
			}
			km
			fuel_type {
				category_id
				name
			}
		}
		ad_house {
			ad_house_id
		}

		user {
			user_id
			email
		}
	}
}
```
