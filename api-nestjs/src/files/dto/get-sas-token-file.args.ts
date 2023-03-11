import { Field, InputType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class GetSasTokenInput {
	@Field(() => String, { nullable: false })
	filename!: string;
}

@ArgsType()
export class GetSasTokenArgs {
	@Field(() => GetSasTokenInput, { nullable: false })
	@Type(() => GetSasTokenInput)
	data!: GetSasTokenInput;
}
