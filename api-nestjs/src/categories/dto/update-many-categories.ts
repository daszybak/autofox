import { Field, InputType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CategoryUpdateInput, CategoryWhereUniqueInput } from '../../@generated/category';

@InputType()
export class UpdateManyCategoriesInput {
	@Field(() => CategoryUpdateInput, { nullable: false })
	@Type(() => CategoryUpdateInput)
	data!: CategoryUpdateInput;

	@Field(() => CategoryWhereUniqueInput, { nullable: false })
	@Type(() => CategoryWhereUniqueInput)
	where!: CategoryWhereUniqueInput;
}

@ArgsType()
export class UpdateManyCategoriesArgs {
	@Field(() => [UpdateManyCategoriesInput], { nullable: false })
	items!: UpdateManyCategoriesInput[];
}
