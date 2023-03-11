import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SasToken {
	@Field(() => String, { nullable: false })
	url!: string;

	@Field(() => String, { nullable: false })
	blobName!: string;

	@Field(() => Date, { nullable: false })
	startsOn!: Date;

	@Field(() => Date, { nullable: false })
	expiresOn!: Date;
}
