import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { AdUpdateInput, AdWhereUniqueInput } from 'src/@generated/ad';
import { IntFieldUpdateOperationsInput } from 'src/@generated/prisma';

@InputType()
export class AdUpdateModerationInput extends AdUpdateInput {
	@Field(() => IntFieldUpdateOperationsInput, { nullable: true })
	moderation_flag?: IntFieldUpdateOperationsInput;
}

@ArgsType()
export class UpdateOneAdWithModerationArgs {
	@Field(() => AdUpdateModerationInput, { nullable: false })
	@Type(() => AdUpdateModerationInput)
	data!: AdUpdateModerationInput;

	@Field(() => AdWhereUniqueInput, { nullable: false })
	@Type(() => AdWhereUniqueInput)
	where!: AdWhereUniqueInput;
}
