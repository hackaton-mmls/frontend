import { API } from '$lib/api';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const course = await API.getCourse(params.course_id);
	if (course == null) {
		error(404, `Unknown course id=${params.course_id}`);
	}

	return {
		course: course
	};
}
