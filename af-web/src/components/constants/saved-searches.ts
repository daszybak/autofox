import { ListWhereInput } from 'af-shared/lib/graphql';

export const findMyListsWhere: ListWhereInput = {
	list_type: {
		equals: 1,
	},
};
