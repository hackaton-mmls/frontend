export function load({ params }) {
	return {
		slug: params.slug,
		topic: params.topic,
		lesson: params.lesson,
		task_id: params.task_id,
		course_name: 'Математика',
		topic_name: 'Тема 1',
		lesson_name: 'Списки и кортежи',
		timestamp: new Date(),
		task_type: 'submission',
		task_name: 'Тест 1'
	};
}
