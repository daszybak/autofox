import { useEffect, useState } from 'react';
import { isValid, parseISO } from 'date-fns';

export const useParsedDateString = (date: string): Date | null => {
	const [parsedDate, setParsedDate] = useState<Date | null>(null);
	useEffect(() => {
		setParsedDate(parseISO(date));
	}, [date]);

	if (!isValid(parsedDate)) return null;

	return parsedDate;
};
