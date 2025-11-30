import { API } from '$lib/api';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const course = await API.getCourse(params.course_id);
	if (course == null) {
		error(404, `Unknown course id=${params.course_id}`);
	}

	const topic = await API.getCourseTopic(course.id, params.topic);
	if (topic == null) {
		error(404, `Unknown topic id=${params.topic}`);
	}

	const lesson = topic.lessons.find((value) => value.id === params.lesson);
	if (lesson == null) {
		error(404, `Unknown lesson id=${params.lesson}`);
	}

	return {
		course: course,
		topic: topic,
		lesson: lesson
	};
}
