// place files you want to import through the `$lib` alias in this folder.
export function getTimeDiff(date1: Date, date2: Date): number {
	const diffTime = (date2 as any) - (date1 as any);
	if (diffTime < 0) {
		return 0;
	}
	const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
}

export function getTimeDiffString(date1: Date, date2: Date): string {
	const diff = getTimeDiff(date1, date2);
	if (diff < 0) {
		return `опоздали на ${diff * -1} дней`;
	}
	if (diff == 0) {
		// https://stackoverflow.com/a/13904120
		let delta = Math.abs((date2 as any) - (date1 as any)) / 1000;
		const days = Math.floor(delta / 86400);
		delta -= days * 86400;

		const hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		const minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		const seconds = Math.floor(delta % 60); // in theory the modulus is not required

		return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
	}
	if (diff == 1) {
		return `остался ${diff} день`;
	}
	if (diff <= 4) {
		return `осталось ${diff} дня`;
	}
	return `осталось ${diff} дней`;
}

export function addMinutes(date: Date, minutes: number): Date {
	return new Date(date.getTime() + minutes * 60_000);
}
