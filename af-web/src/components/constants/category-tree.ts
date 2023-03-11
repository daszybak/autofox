import { AUTO } from 'af-shared/lib/components/constants/category-codes';

export const categoryTree: { [key: string]: any } = {
	make_cid: {
		attribute: 'make_cid',
		successors: [AUTO.MODEL, AUTO.VARIANT],
	},
	model_cid: {
		attribute: 'model_cid',
		successors: [AUTO.VARIANT],
		predecessors: [AUTO.MAKE],
	},
	variant_cid: {
		attribute: 'variant_cid',
		predecessors: [AUTO.MAKE, AUTO.MODEL],
	},
};
