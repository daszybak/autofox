import { useCallback, useRef } from 'react';

export function useScrollIntoView() {
	// Prevents scrolling into view again if re-render occurs
	const alreadyScrolled = useRef(false);
	const scrollIntoView = useCallback(
		(ref: HTMLElement | null) => {
			if (!alreadyScrolled.current) {
				ref?.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
					inline: 'center',
				});
				alreadyScrolled.current = true;
			}
		},
		[alreadyScrolled],
	);

	return scrollIntoView;
}

export default useScrollIntoView;
