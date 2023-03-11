import { ArgsType, PickType, ObjectType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Ad, AdWhereUniqueInput, CreateOneAdArgs } from 'src/@generated/ad';

@ObjectType()
export class AdPrice extends PickType(Ad, ['price_eurocent'] as const) {}

@ArgsType()
export class EstimatedPriceArgs extends AdPrice {}

@ObjectType()
export class AdPriceRating extends PickType(Ad, ['price_rating'] as const) {}

@ArgsType()
export class EstimateAdPriceArgs extends CreateOneAdArgs {
	@Field(() => AdWhereUniqueInput, { nullable: false })
	@Type(() => AdWhereUniqueInput)
	where!: AdWhereUniqueInput;
}
