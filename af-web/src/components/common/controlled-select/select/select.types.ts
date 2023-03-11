import { SelectItem } from '@mantine/core';

export type AfSelectItem = SelectItem & {
	Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};
