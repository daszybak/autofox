import React, { forwardRef } from 'react';
import IconWrapper from 'src/components/common/icon-wrapper/icon-wrapper.component';
import { AfSelectItem } from '../select.types';

export interface SelectItemProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value'> {
	item?: AfSelectItem;
	children?: React.ReactNode;
}

export const Item = forwardRef<HTMLDivElement, SelectItemProps>(({ item, placeholder, children, ...others }: SelectItemProps, ref) => {
	const Icon = item?.Icon;
	const label = item?.label;

	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				minWidth: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				lineHeight: '1.5rem',
				fontSize: '14px',
				userSelect: 'none',
				WebkitUserSelect: 'none',
				textTransform: 'uppercase',
			}}
			{...others}
		>
			{Icon !== undefined ? <IconWrapper Icon={<Icon fontSize={'2rem'} />} /> : null || label || placeholder?.toUpperCase() || item?.group || children}
		</div>
	);
});

Item.displayName = 'Item';

export default Item;
