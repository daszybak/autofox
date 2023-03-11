import { Field, InputType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFieldUpdateOperationsInput } from 'src/@generated/prisma';
import { UserUpdateInput, UserWhereUniqueInput } from 'src/@generated/user';

@InputType()
export class UserUpdateModerationInput extends UserUpdateInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	moderation_flag?: IntFieldUpdateOperationsInput;
}

@ArgsType()
export class UpdateOneUserWithModerationArgs {
	@Field(() => UserUpdateModerationInput, { nullable: false })
	@Type(() => UserUpdateModerationInput)
	data!: UserUpdateModerationInput;

	@Field(() => UserWhereUniqueInput, { nullable: false })
	@Type(() => UserWhereUniqueInput)
	where!: UserWhereUniqueInput;
}
