import _, { Dictionary } from 'lodash';

export const removeFalsyValues = (obj: Dictionary<any>) =>
	_(obj)
		.pickBy((value) => {
			if (_.isArray(value)) return _.some(value, _.identity);
			return _.identity(value);
		})
		.value();
