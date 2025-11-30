import { API } from '$lib/api';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const course = await API.getCourse(params.course_id);
	if (course == null) {
		error(404, `Unknown course id=${params.course_id}`);
	}

	const task = await API.getTask(course.id, params.task_id);
	if (task == null) {
		error(404, `Unknown task id=${params.task_id}`);
	}

	return {
		course: course,
		task: task
	};
}
