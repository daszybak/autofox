import React, { forwardRef } from 'react';
import { ScrollArea, ScrollAreaProps } from '@mantine/core';

export const SelectScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(({ style, ...others }: ScrollAreaProps, ref) => (
	<ScrollArea {...others} style={{ width: '100%', padding: '0.5rem 0', ...style, zIndex: 301 }} viewportRef={ref}>
		{others.children}
	</ScrollArea>
));

SelectScrollArea.displayName = '@mantine/core/SelectScrollArea';
