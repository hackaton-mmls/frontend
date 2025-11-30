export function load({ params }) {
	return {
		slug: params.course_id,
		topic: params.topic,
		lesson: params.lesson,
		course_name: 'Математика',
		topic_name: 'Тема 1',
		lesson_name: 'Списки и кортежи',
		timestamp: new Date()
	};
}
