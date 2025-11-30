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
		return `осталось ${diff} дней`;
	}
	if (diff == 1) {
		return `остался ${diff} день`;
	}
	if (diff <= 4) {
		return `осталось ${diff} дня`;
	}
	return `осталось ${diff} дней`;
}
