import { API } from '$lib/api';

export async function load({ params }) {
	return {
		user: await API.getUser()
	};
}
